import { spawn } from 'child_process'
import path from 'path'
import fs from 'fs/promises'

/**
 * Run Python scripts from Next.js API routes
 * 
 * Expected usage for sheet processing:
 * 
 * const result = await runPythonScript('sheet_processor.py', {
 *   sheet_mappings: {
 *     architectural_drawings: {"A-001": 12, "A-002": 13},
 *     structural_drawings: {"S-001": 45}
 *   },
 *   pdf_path: "/path/to/file.pdf", 
 *   api_key: process.env.CHUNKR_API_KEY,
 *   base_url: "http://localhost:3000"
 * });
 * 
 * Expected output format:
 * {
 *   success: true,
 *   message: "Sheet processing completed",
 *   total_sheets: 3,
 *   results: [...],  // Successful processing results
 *   errors: [...]    // Any processing errors
 * }
 */

export async function runPythonScript(scriptName: string, data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    // Save input data to temporary file
    const tempInputFile = `/tmp/input_${Date.now()}.json`
    const tempOutputFile = `/tmp/output_${Date.now()}.json`
    
    fs.writeFile(tempInputFile, JSON.stringify(data))
      .then(() => {
        // Run Python script using the virtual environment
        const pythonPath = path.join(process.cwd(), 'scripts', scriptName)
        const venvPythonPath = path.join(process.cwd(), '.venv', 'bin', 'python')
        console.log(`Running Python script: ${pythonPath} with input file: ${tempInputFile}, output file: ${tempOutputFile}`)
        const python = spawn(venvPythonPath, [pythonPath, tempInputFile, tempOutputFile])
        
        python.on('close', async (code) => {
          try {
            if (code === 0) {
              // Read output file
              const output = await fs.readFile(tempOutputFile, 'utf-8')
              const result = JSON.parse(output)
              
              // Clean up temp files
              await fs.unlink(tempInputFile)
              await fs.unlink(tempOutputFile)
              
              resolve(result)
            } else {
              reject(new Error(`Python script exited with code ${code}`))
            }
          } catch (error) {
            reject(error)
          }
        })
        
        python.on('error', reject)
      })
      .catch(reject)
  })
}
