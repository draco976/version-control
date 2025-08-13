/**
 * Simulated Processing Module
 * 
 * This module provides functions for generating realistic simulated data
 * that mimics what would be produced by the actual processing pipeline.
 */

import { BoundingBox } from '@/lib/bounding-box/types';

// Types for simulated data - UPDATED to match PDF viewer requirements
export interface Pattern {
  index: number;                    // Pattern index for PDF viewer
  text: string;                     // Pattern text content
  coordinates: [number, number, number, number];  // [y1, x1, y2, x2] format - CRITICAL!
  pattern_type?: string;            // Pattern type for filtering
  id?: string;                      // Optional ID for legacy support
  x?: number;                       // Legacy x coordinate
  y?: number;                       // Legacy y coordinate  
  width?: number;                   // Legacy width
  height?: number;                  // Legacy height
  code?: string;                    // Optional reference code
  value?: number;                   // Optional numeric value
}

export interface SheetMapping {
  code: string;
  title: string;
  index: number;
  references: string[];
}

export interface SimulatedSheetData {
  document_info: {
    pdf_name: string;
    page_number: number;
    svg_dimensions: {
      width: number;
      height: number;
    };
  };
  bounding_boxes: BoundingBox[];
  svg_content: string;
  patterns: {
    sf: Pattern[];
    cw: Pattern[];
    integer: Pattern[];
  };
  sheet_mappings: SheetMapping[];
  metadata: {
    created_date: string;
    modified_date: string;
    version: string;
    total_boxes: number;
    box_types: {
      figure: number;
      table: number;
      text: number;
    };
    processing_time: number;
  };
}

/**
 * Generate complete simulated data for a sheet
 * @param sheetId The sheet identifier (e.g., "A101")
 * @returns Complete simulated data package
 */
export function generateSimulatedSheetData(sheetId: string): SimulatedSheetData {
  const isArchitectural = sheetId.startsWith('A');
  const timestamp = new Date().toISOString();
  
  // Generate bounding boxes
  const boundingBoxes = generateBoundingBoxes(sheetId);
  
  // Count box types
  const boxTypes = {
    figure: boundingBoxes.filter(b => b.type === 'figure').length,
    table: boundingBoxes.filter(b => b.type === 'table').length,
    text: boundingBoxes.filter(b => b.type === 'text').length
  };

  // Create sheet code and number  
  const sheetPrefix = isArchitectural ? 'A' : 'S';
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  return {
    document_info: {
      pdf_name: `${sheetId}.pdf`,
      page_number: sheetNumber % 50, // Some reasonable page number
      svg_dimensions: {
        width: 3024,
        height: 2160
      }
    },
    bounding_boxes: boundingBoxes,
    svg_content: generateSvgContent(sheetId),
    patterns: {
      sf: generateSfPatterns(sheetId),
      cw: generateCwPatterns(sheetId),
      integer: generateIntegerPatterns(sheetId)
    },
    sheet_mappings: generateSheetMappings(sheetId),
    metadata: {
      created_date: timestamp,
      modified_date: timestamp,
      version: '1.0',
      total_boxes: boundingBoxes.length,
      box_types: boxTypes,
      processing_time: 2.5 + Math.random() * 3 // 2.5-5.5 seconds
    }
  };
}

/**
 * Generate bounding boxes appropriate for the sheet type
 * @param sheetId Sheet identifier
 * @returns Array of bounding boxes
 */
export function generateBoundingBoxes(sheetId: string): BoundingBox[] {
  const isArchitectural = sheetId.startsWith('A');
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Number of boxes varies by sheet type
  // Architectural sheets have more details
  const numBoxes = isArchitectural ? 
    8 + (seed % 7) : // 8-15 boxes for architectural
    4 + (seed % 5);  // 4-9 boxes for structural
  
  const boundingBoxes: BoundingBox[] = [];
  
  // Common shapes for different sheet types
  const shapes: Array<'circle' | 'square' | 'rectangle' | 'hexagon' | 'other' | 'none'> = [
    'rectangle', 'rectangle', 'rectangle', 'square', 'circle'
  ];
  
  // Generate boxes with different types and positions
  for (let i = 0; i < numBoxes; i++) {
    // Determine box type based on patterns in real drawings
    let boxType: 'figure' | 'table' | 'text';
    
    if (isArchitectural) {
      // Architectural sheets have more figures, then text, then tables
      boxType = i % 5 <= 2 ? 'figure' : i % 5 === 3 ? 'text' : 'table';
    } else {
      // Structural sheets have more tables, then figures, then text
      boxType = i % 5 <= 1 ? 'table' : i % 5 <= 3 ? 'figure' : 'text';
    }
    
    // Position varies by type
    let x, y, width, height;
    
    if (boxType === 'figure') {
      // Figures tend to be larger and central
      x = 400 + (((i * seed) % 1500) + (seed % 300));
      y = 300 + (((i * seed) % 1000) + (seed % 200));
      width = 300 + (seed % 500);
      height = 200 + (seed % 300);
    } else if (boxType === 'table') {
      // Tables tend to be rectangular and often at bottom
      x = 200 + (((i * seed) % 2000) + (seed % 200));
      y = 1200 + (((i * seed) % 500) + (seed % 150));
      width = 400 + (seed % 400);
      height = 150 + (seed % 100);
    } else {
      // Text boxes tend to be smaller and can be anywhere
      x = 100 + (((i * seed) % 2500) + (seed % 400));
      y = 100 + (((i * seed) % 1800) + (seed % 300));
      width = 150 + (seed % 200);
      height = 75 + (seed % 50);
    }
    
    // Generate content based on type
    let content, title;
    if (boxType === 'figure') {
      title = `${isArchitectural ? 'Architectural' : 'Structural'} Detail ${i+1}`;
      content = `Detail showing ${isArchitectural ? 'wall section' : 'beam connection'} for ${sheetId}`;
    } else if (boxType === 'table') {
      title = `${isArchitectural ? 'Room' : 'Material'} Schedule ${i+1}`;
      content = `Table containing ${isArchitectural ? 'room dimensions' : 'material specifications'}`;
    } else {
      title = `Notes Section ${i+1}`;
      content = `General notes about ${isArchitectural ? 'construction details' : 'structural requirements'}`;
    }
    
    // Create the bounding box
    boundingBoxes.push({
      id: `box_${i}_${sheetId}`,
      x,
      y,
      width,
      height,
      code: `${sheetId}-${i}`,
      title,
      content,
      type: boxType,
      shape: shapes[i % shapes.length],
      color: boxType === 'figure' ? '#3B82F6' : boxType === 'table' ? '#10B981' : '#8B5CF6'
    });
  }
  
  return boundingBoxes;
}

/**
 * Generate SF (Sheet Format) patterns that reference other sheets
 * @param sheetId Sheet identifier
 * @returns Array of SF patterns
 */
export function generateSfPatterns(sheetId: string): Pattern[] {
  const isArchitectural = sheetId.startsWith('A');
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Number of patterns depends on sheet type
  const numPatterns = isArchitectural ? 
    4 + (seed % 4) : // 4-8 SF patterns for architectural
    2 + (seed % 3);  // 2-5 SF patterns for structural
  
  const patterns: Pattern[] = [];
  
  // Generate SF patterns that reference other sheets
  for (let i = 0; i < numPatterns; i++) {
    // Referenced sheet
    // Architectural sheets typically reference other A sheets and some S sheets
    // Structural sheets typically reference other S sheets and some A sheets
    const refPrefix = isArchitectural ? 
      (i < numPatterns * 0.7 ? 'A' : 'S') : // 70% A refs for A sheets
      (i < numPatterns * 0.7 ? 'S' : 'A');  // 70% S refs for S sheets
    
    // Reference number is based on seed but different from current sheet
    let refNum = 100 + ((seed + i * 13) % 20);
    if (refPrefix === sheetId.charAt(0) && refNum === sheetNumber) {
      refNum = (refNum + 1) % 20 + 100; // Avoid self-reference
    }
    
    const refCode = `${refPrefix}${refNum}`;
    
    // Position patterns across the sheet, but avoid edges
    const x = 200 + ((seed + i * 73) % 2000);
    const y = 200 + ((seed + i * 97) % 1500);
    
    // Convert legacy x,y,width,height to [y1, x1, y2, x2] coordinates
    const y1 = y;
    const x1 = x;
    const y2 = y + (20 + (seed % 10));
    const x2 = x + (80 + (seed % 20));
    
    patterns.push({
      index: i,                               // PDF viewer requirement
      text: `SF-${refCode}`,
      coordinates: [y1, x1, y2, x2],         // [y1, x1, y2, x2] format - CRITICAL!
      pattern_type: "sf_patterns",           // PDF viewer requirement
      id: `sf_${i}_${sheetId}`,              // Legacy support
      x,                                     // Legacy support
      y,                                     // Legacy support
      width: 80 + (seed % 20),               // Legacy support
      height: 20 + (seed % 10),              // Legacy support
      code: refCode
    });
  }
  
  return patterns;
}

/**
 * Generate CW (Call-out Window) patterns for detail references
 * @param sheetId Sheet identifier
 * @returns Array of CW patterns
 */
export function generateCwPatterns(sheetId: string): Pattern[] {
  const isArchitectural = sheetId.startsWith('A');
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Architectural sheets have more detail callouts
  const numPatterns = isArchitectural ? 
    3 + (seed % 5) : // 3-8 CW patterns for architectural
    1 + (seed % 3);  // 1-4 CW patterns for structural
  
  const patterns: Pattern[] = [];
  
  // Generate CW patterns that reference specific details
  for (let i = 0; i < numPatterns; i++) {
    // Detail references often include the current sheet and others
    const refPrefix = i < numPatterns * 0.3 ? sheetId.charAt(0) : 
                     (isArchitectural ? 'A' : 'S');
    
    // Reference number with detail indicator
    let refNum, detailNum;
    
    if (i < numPatterns * 0.3) {
      // 30% chance of referencing current sheet with detail number
      refNum = sheetNumber;
      detailNum = 1 + (i % 5);
    } else {
      // Reference different sheet
      refNum = 100 + ((seed + i * 17) % 20);
      detailNum = 1 + ((seed + i) % 5);
    }
    
    const refCode = `${refPrefix}${refNum}/${detailNum}`;
    
    // Position patterns, typically near detail areas
    const x = 300 + ((seed + i * 87) % 1800);
    const y = 300 + ((seed + i * 61) % 1300);
    
    // Convert legacy x,y,width,height to [y1, x1, y2, x2] coordinates  
    const y1 = y;
    const x1 = x;
    const y2 = y + (20 + (seed % 10));
    const x2 = x + (90 + (seed % 15));
    
    patterns.push({
      index: i,                               // PDF viewer requirement
      text: `CW-${refCode}`,
      coordinates: [y1, x1, y2, x2],         // [y1, x1, y2, x2] format - CRITICAL!
      pattern_type: "cw_patterns",           // PDF viewer requirement
      id: `cw_${i}_${sheetId}`,              // Legacy support
      x,                                     // Legacy support
      y,                                     // Legacy support
      width: 90 + (seed % 15),               // Legacy support
      height: 20 + (seed % 10),              // Legacy support
      code: `CW-${refCode}`
    });
  }
  
  return patterns;
}

/**
 * Generate integer patterns for numerical references
 * @param sheetId Sheet identifier
 * @returns Array of integer patterns
 */
export function generateIntegerPatterns(sheetId: string): Pattern[] {
  const isArchitectural = sheetId.startsWith('A');
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Number of integer references
  const numPatterns = 5 + (seed % 15); // 5-20 integer patterns
  
  const patterns: Pattern[] = [];
  
  // Generate integer patterns for dimensions, elevations, etc.
  for (let i = 0; i < numPatterns; i++) {
    // Integer values depend on sheet type
    let intValue;
    
    if (isArchitectural) {
      if (i % 5 === 0) {
        // Room numbers (100-999)
        intValue = 100 + (seed + i) % 900;
      } else if (i % 5 === 1) {
        // Elevations (often increments of 4)
        intValue = 100 + ((seed + i) % 25) * 4;
      } else {
        // Dimensions in inches or feet
        intValue = 6 + (seed + i) % 96;
      }
    } else {
      if (i % 5 === 0) {
        // Beam sizes (W8-W36)
        intValue = 8 + ((seed + i) % 8) * 4;
      } else if (i % 5 === 1) {
        // Load values (often 2-digit numbers)
        intValue = 10 + (seed + i) % 90;
      } else {
        // Dimensions or reference numbers
        intValue = 6 + (seed + i) % 96;
      }
    }
    
    // Position throughout the drawing, more dense than other patterns
    const x = 100 + ((seed + i * 41) % 2500);
    const y = 100 + ((seed + i * 53) % 1900);
    
    // Convert legacy x,y,width,height to [y1, x1, y2, x2] coordinates
    const y1 = y;
    const x1 = x;
    const y2 = y + (15 + (seed % 10));
    const x2 = x + (30 + (seed % 15));
    
    patterns.push({
      index: i,                               // PDF viewer requirement
      text: intValue.toString(),
      coordinates: [y1, x1, y2, x2],         // [y1, x1, y2, x2] format - CRITICAL!
      pattern_type: "integers",              // PDF viewer requirement
      id: `int_${i}_${sheetId}`,             // Legacy support
      x,                                     // Legacy support
      y,                                     // Legacy support
      width: 30 + (seed % 15),               // Legacy support
      height: 15 + (seed % 10),              // Legacy support
      value: intValue
    });
  }
  
  return patterns;
}

/**
 * Generate SVG content placeholder for a sheet
 * @param sheetId Sheet identifier
 * @returns SVG content string
 */
export function generateSvgContent(sheetId: string): string {
  const isArchitectural = sheetId.startsWith('A');
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Generate a more detailed SVG placeholder based on sheet type
  let svgElements = '';
  
  // Add sheet title block
  svgElements += `
    <rect x="50" y="50" width="2924" height="2060" fill="#f8f9fa" stroke="#ccc" stroke-width="1" />
    <rect x="50" y="50" width="2924" height="100" fill="#e9ecef" stroke="#ccc" stroke-width="1" />
    <text x="1512" y="110" font-family="Arial" font-size="36" text-anchor="middle" fill="#333">
      ${isArchitectural ? 'ARCHITECTURAL' : 'STRUCTURAL'} DRAWING - SHEET ${sheetId}
    </text>
  `;
  
  // Add sheet grid lines
  for (let i = 0; i < 10; i++) {
    // Vertical grid lines
    svgElements += `
      <line x1="${300 + i * 300}" y1="150" x2="${300 + i * 300}" y2="2000" 
        stroke="#e2e8f0" stroke-width="1" stroke-dasharray="5,5" />
    `;
    
    // Horizontal grid lines
    svgElements += `
      <line x1="100" y1="${200 + i * 200}" x2="2900" y2="${200 + i * 200}" 
        stroke="#e2e8f0" stroke-width="1" stroke-dasharray="5,5" />
    `;
  }
  
  // Add grid labels (A-J across top, 1-10 down side)
  const gridLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 0; i < 10; i++) {
    // Top labels (letters)
    svgElements += `
      <text x="${300 + i * 300}" y="180" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">
        ${gridLetters[i]}
      </text>
    `;
    
    // Side labels (numbers)
    svgElements += `
      <text x="80" y="${200 + i * 200 + 5}" font-family="Arial" font-size="14" text-anchor="middle" fill="#666">
        ${i + 1}
      </text>
    `;
  }
  
  // Add content based on sheet type
  if (isArchitectural) {
    // For architectural sheets, add walls, doors, windows
    svgElements += `
      <!-- Outer walls -->
      <rect x="400" y="400" width="2000" height="1400" fill="none" stroke="#333" stroke-width="2" />
      
      <!-- Interior walls -->
      <line x1="400" y1="800" x2="2400" y2="800" stroke="#333" stroke-width="2" />
      <line x1="1200" y1="400" x2="1200" y2="1800" stroke="#333" stroke-width="2" />
      <line x1="1800" y1="800" x2="1800" y2="1800" stroke="#333" stroke-width="2" />
      
      <!-- Doors -->
      <path d="M600,400 Q700,500 800,400" fill="none" stroke="#333" stroke-width="1" />
      <path d="M1200,1000 Q1300,1100 1400,1000" fill="none" stroke="#333" stroke-width="1" />
      <path d="M1800,1200 Q1900,1300 2000,1200" fill="none" stroke="#333" stroke-width="1" />
      
      <!-- Windows -->
      <rect x="900" y="400" width="200" height="10" fill="#aadaff" stroke="#333" stroke-width="1" />
      <rect x="1500" y="400" width="200" height="10" fill="#aadaff" stroke="#333" stroke-width="1" />
      <rect x="400" y="1200" width="10" height="200" fill="#aadaff" stroke="#333" stroke-width="1" />
      <rect x="2390" y="1200" width="10" height="200" fill="#aadaff" stroke="#333" stroke-width="1" />
    `;
  } else {
    // For structural sheets, add beams, columns, connections
    svgElements += `
      <!-- Main structural grid -->
      <rect x="400" y="400" width="2000" height="1400" fill="none" stroke="#666" stroke-width="1" stroke-dasharray="10,5" />
      
      <!-- Columns -->
      <rect x="400" y="400" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1200" y="400" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="2000" y="400" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="400" y="1100" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1200" y="1100" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="2000" y="1100" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="400" y="1800" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1200" y="1800" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="2000" y="1800" width="40" height="40" fill="#d1d5db" stroke="#333" stroke-width="2" />
      
      <!-- Beams -->
      <rect x="440" y="410" width="760" height="20" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1240" y="410" width="760" height="20" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="440" y="1110" width="760" height="20" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1240" y="1110" width="760" height="20" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="440" y="1810" width="760" height="20" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1240" y="1810" width="760" height="20" fill="#d1d5db" stroke="#333" stroke-width="2" />
      
      <!-- Vertical members -->
      <rect x="410" y="440" width="20" height="660" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1210" y="440" width="20" height="660" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="2010" y="440" width="20" height="660" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="410" y="1140" width="20" height="660" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="1210" y="1140" width="20" height="660" fill="#d1d5db" stroke="#333" stroke-width="2" />
      <rect x="2010" y="1140" width="20" height="660" fill="#d1d5db" stroke="#333" stroke-width="2" />
    `;
  }
  
  // Add some detail callouts
  svgElements += `
    <circle cx="600" cy="600" r="30" fill="none" stroke="#ff4500" stroke-width="2" />
    <text x="600" y="605" font-family="Arial" font-size="16" text-anchor="middle" fill="#ff4500">1</text>
    
    <circle cx="1500" cy="1200" r="30" fill="none" stroke="#ff4500" stroke-width="2" />
    <text x="1500" y="1205" font-family="Arial" font-size="16" text-anchor="middle" fill="#ff4500">2</text>
    
    <circle cx="2000" cy="800" r="30" fill="none" stroke="#ff4500" stroke-width="2" />
    <text x="2000" y="805" font-family="Arial" font-size="16" text-anchor="middle" fill="#ff4500">3</text>
  `;
  
  // Assemble complete SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" width="3024" height="2160">
    ${svgElements}
  </svg>`;
}

/**
 * Generate sheet mappings that show relationships between sheets
 * @param sheetId Sheet identifier
 * @returns Array of sheet mappings
 */
export function generateSheetMappings(sheetId: string): SheetMapping[] {
  const isArchitectural = sheetId.startsWith('A');
  const sheetNumber = parseInt(sheetId.replace(/\D/g, '')) || 100;
  
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  const mappings: SheetMapping[] = [];
  
  // Add the current sheet
  mappings.push({
    code: sheetId,
    title: generateSheetTitle(sheetId),
    index: sheetNumber,
    references: []
  });
  
  // Number of references depends on sheet type and number
  const numRefs = 3 + (seed % 5); // 3-8 references
  
  // Generate references to other sheets
  for (let i = 0; i < numRefs; i++) {
    // Generate a reference sheet code
    let refPrefix, refNum;
    
    if (i < numRefs * 0.7) {
      // 70% of references are to the same type of sheet
      refPrefix = sheetId.charAt(0);
      refNum = 100 + ((seed + i * 17) % 20); // Different sheet number
    } else {
      // 30% of references are to the other type of sheet
      refPrefix = isArchitectural ? 'S' : 'A';
      refNum = 100 + ((seed + i * 19) % 20);
    }
    
    // Avoid self-reference
    if (refPrefix === sheetId.charAt(0) && refNum === sheetNumber) {
      refNum = (refNum + 1) % 20 + 100;
    }
    
    const refCode = `${refPrefix}${refNum}`;
    
    // Add reference to current sheet
    mappings[0].references.push(refCode);
    
    // Also add the referenced sheet as a mapping
    if (!mappings.some(m => m.code === refCode)) {
      mappings.push({
        code: refCode,
        title: generateSheetTitle(refCode),
        index: refNum,
        references: [sheetId] // Reference back to original sheet
      });
    }
  }
  
  return mappings;
}

/**
 * Generate a realistic sheet title based on sheet code
 * @param sheetCode Sheet code (e.g., "A101")
 * @returns Descriptive sheet title
 */
function generateSheetTitle(sheetCode: string): string {
  const isArchitectural = sheetCode.startsWith('A');
  const sheetNumber = parseInt(sheetCode.replace(/\D/g, '')) || 100;
  
  // Different title patterns based on sheet type and number
  if (isArchitectural) {
    if (sheetNumber < 100) {
      return 'GENERAL INFORMATION';
    } else if (sheetNumber < 110) {
      return 'FLOOR PLAN - LEVEL ' + ((sheetNumber - 100) + 1);
    } else if (sheetNumber < 120) {
      return 'CEILING PLAN - LEVEL ' + ((sheetNumber - 110) + 1);
    } else if (sheetNumber < 130) {
      return 'ELEVATIONS - ' + ['NORTH', 'SOUTH', 'EAST', 'WEST', 'INTERIOR'][sheetNumber % 5];
    } else if (sheetNumber < 140) {
      return 'SECTIONS - BUILDING ' + String.fromCharCode(65 + (sheetNumber % 10));
    } else if (sheetNumber < 150) {
      return 'DETAILS - ' + ['WINDOWS', 'DOORS', 'STAIRS', 'WALLS', 'ROOF'][sheetNumber % 5];
    } else {
      return 'ARCHITECTURAL MISCELLANEOUS - ' + (sheetNumber - 150);
    }
  } else {
    // Structural sheets
    if (sheetNumber < 100) {
      return 'STRUCTURAL GENERAL NOTES';
    } else if (sheetNumber < 110) {
      return 'FOUNDATION PLAN - LEVEL ' + ((sheetNumber - 100) + 1);
    } else if (sheetNumber < 120) {
      return 'FRAMING PLAN - LEVEL ' + ((sheetNumber - 110) + 1);
    } else if (sheetNumber < 130) {
      return 'COLUMN SCHEDULE - ZONE ' + String.fromCharCode(65 + (sheetNumber % 10));
    } else if (sheetNumber < 140) {
      return 'BEAM DETAILS - TYPE ' + String.fromCharCode(65 + (sheetNumber % 10));
    } else if (sheetNumber < 150) {
      return 'CONNECTION DETAILS - ' + ['TYPICAL', 'SPECIAL', 'MOMENT', 'BRACED', 'SEISMIC'][sheetNumber % 5];
    } else {
      return 'STRUCTURAL MISCELLANEOUS - ' + (sheetNumber - 150);
    }
  }
}

/**
 * Simulate processing time and progression for a sheet
 * @param sheetId Sheet identifier
 * @param onProgressUpdate Callback for progress updates
 * @returns Promise that resolves when processing is complete
 */
export async function simulateProcessingTime(
  sheetId: string,
  onProgressUpdate?: (progress: number) => void
): Promise<void> {
  // Create deterministic but varied seed based on sheet ID
  const seed = sheetId.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) / 1000;
  
  // Total processing time 5-20 seconds, varies by sheet
  const totalTime = 5000 + (seed * 15000);
  const startTime = Date.now();
  
  // Report progress at 10% intervals
  for (let progress = 10; progress <= 100; progress += 10) {
    const timeForThisStep = (totalTime * progress / 100) - (Date.now() - startTime);
    
    // Wait for the appropriate time
    if (timeForThisStep > 0) {
      await new Promise(resolve => setTimeout(resolve, timeForThisStep));
    }
    
    // Report progress
    if (onProgressUpdate) {
      onProgressUpdate(progress);
    }
  }
}
