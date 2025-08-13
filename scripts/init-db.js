const { PrismaClient } = require('../lib/generated/prisma')

async function initializeDatabase() {
  const prisma = new PrismaClient()
  
  try {
    // Check if any projects exist
    const projectCount = await prisma.project.count()
    
    if (projectCount === 0) {
      console.log('Initializing database with current project data...')
      
      // Embedded project data for reliable production deployment
      const currentData = {
        "projects": [
          {
            "id": 6,
            "name": "JULIA MARTIN",
            "date": "2025-08-07T19:43:30.212Z",
            "documents": [
              {
                "id": 6,
                "type": "document",
                "path": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings.pdf",
                "category": "IFC",
                "subcategory": null,
                "title": null,
                "projectId": 6,
                "sheets": [
                  {
                    "id": 978,
                    "code": "G0.0",
                    "title": "COVER SHEET",
                    "type": "G",
                    "page": 1,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_1.svg",
                    "documentId": 6
                  },
                  {
                    "id": 979,
                    "code": "G0.1",
                    "title": "GENERAL INFORMATION",
                    "type": "G",
                    "page": 2,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_2.svg",
                    "documentId": 6
                  },
                  {
                    "id": 980,
                    "code": "G1.0",
                    "title": "CODE SUMMARY",
                    "type": "G",
                    "page": 3,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_3.svg",
                    "documentId": 6
                  },
                  {
                    "id": 981,
                    "code": "G2.1",
                    "title": "LEVEL 1 CODE PLAN",
                    "type": "G",
                    "page": 4,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_4.svg",
                    "documentId": 6
                  },
                  {
                    "id": 982,
                    "code": "D2.1",
                    "title": "AA2 DEMOLITION PLAN",
                    "type": "D",
                    "page": 5,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_5.svg",
                    "documentId": 6
                  },
                  {
                    "id": 983,
                    "code": "A2.1",
                    "title": "LEVEL 1 FLOOR PLAN",
                    "type": "A",
                    "page": 6,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_6.svg",
                    "documentId": 6
                  },
                  {
                    "id": 984,
                    "code": "A6.1",
                    "title": "INTERIOR ELEVATIONS",
                    "type": "A",
                    "page": 7,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_7.svg",
                    "documentId": 6
                  },
                  {
                    "id": 985,
                    "code": "A6.2",
                    "title": "CASEWORK DETAILS",
                    "type": "A",
                    "page": 8,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_8.svg",
                    "documentId": 6
                  },
                  {
                    "id": 986,
                    "code": "A9.1",
                    "title": "SCHEDULES",
                    "type": "A",
                    "page": 9,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_9.svg",
                    "documentId": 6
                  },
                  {
                    "id": 987,
                    "code": "A9.2",
                    "title": "DETAILS",
                    "type": "A",
                    "page": 10,
                    "status": "completed",
                    "svgPath": "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings_svgs/page_10.svg",
                    "documentId": 6
                  }
                ]
              },
              {
                "id": 7,
                "type": "document",
                "path": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum.pdf",
                "category": "Addendum",
                "subcategory": null,
                "title": null,
                "projectId": 6,
                "sheets": [
                  {
                    "id": 988,
                    "code": "A2.1",
                    "title": "LEVEL 1 FLOOR PLAN",
                    "type": "A",
                    "page": 13,
                    "status": "completed",
                    "svgPath": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum_svgs/page_13.svg",
                    "documentId": 7
                  },
                  {
                    "id": 989,
                    "code": "A2.2",
                    "title": "ADD ALTERNATE 2",
                    "type": "A",
                    "page": 14,
                    "status": "completed",
                    "svgPath": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum_svgs/page_14.svg",
                    "documentId": 7
                  },
                  {
                    "id": 990,
                    "code": "A6.2",
                    "title": "CASEWORK DETAILS",
                    "type": "A",
                    "page": 15,
                    "status": "completed",
                    "svgPath": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum_svgs/page_15.svg",
                    "documentId": 7
                  },
                  {
                    "id": 991,
                    "code": "A9.1",
                    "title": "SCHEDULES",
                    "type": "A",
                    "page": 16,
                    "status": "completed",
                    "svgPath": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum_svgs/page_16.svg",
                    "documentId": 7
                  },
                  {
                    "id": 992,
                    "code": "D2.1",
                    "title": "LEVEL 1 DEMOLITION PLAN",
                    "type": "D",
                    "page": 12,
                    "status": "completed",
                    "svgPath": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum_svgs/page_12.svg",
                    "documentId": 7
                  },
                  {
                    "id": 993,
                    "code": "G0.1",
                    "title": "GENERAL INFORMATION",
                    "type": "G",
                    "page": 11,
                    "status": "completed",
                    "svgPath": "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum_svgs/page_11.svg",
                    "documentId": 7
                  }
                ]
              }
            ]
          }
        ]
      }
      
      // Create projects with their documents and sheets
      for (const projectData of currentData.projects) {
        const { documents, ...projectInfo } = projectData
        
        const project = await prisma.project.create({
          data: {
            name: projectInfo.name,
            date: new Date(projectInfo.date)
          }
        })
        
        // Create documents for this project
        for (const documentData of documents) {
          const { sheets, ...docInfo } = documentData
          
          const document = await prisma.document.create({
            data: {
              type: docInfo.type,
              path: docInfo.path,
              category: docInfo.category,
              subcategory: docInfo.subcategory,
              title: docInfo.title,
              projectId: project.id
            }
          })
          
          // Create sheets for this document
          if (sheets && sheets.length > 0) {
            await prisma.sheet.createMany({
              data: sheets.map(sheet => ({
                code: sheet.code,
                title: sheet.title,
                type: sheet.type,
                page: sheet.page,
                status: sheet.status,
                svgPath: sheet.svgPath,
                documentId: document.id
              }))
            })
          }
        }
      }
      
      console.log('Database initialized successfully with current data!')
    } else {
      console.log('Database already contains data.')
      // For production/Vercel, always run migrations
      if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
        console.log('Running migrations for production...');
        const { execSync } = require('child_process');
        try {
          execSync('npx prisma migrate deploy', { stdio: 'inherit' });
        } catch (e) {
          console.log('Migration already applied or not needed');
        }
      }
    }
    
  } catch (error) {
    console.error('Error initializing database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

if (require.main === module) {
  initializeDatabase()
}

module.exports = { initializeDatabase }