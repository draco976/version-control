const { PrismaClient } = require('../lib/generated/prisma')

async function initializeDatabase() {
  const prisma = new PrismaClient()
  
  try {
    // Check if any projects exist
    const projectCount = await prisma.project.count()
    
    if (projectCount === 0) {
      console.log('Initializing database with sample data...')
      
      // Create sample project
      const project = await prisma.project.create({
        data: {
          name: 'West Julia Martin Construction',
          date: new Date('2024-01-15')
        }
      })
      
      // Create sample documents
      const doc1 = await prisma.document.create({
        data: {
          title: 'Construction Drawings',
          path: '/documents/construction-drawings.pdf',
          category: 'IFC',
          type: 'pdf',
          projectId: project.id
        }
      })
      
      const doc2 = await prisma.document.create({
        data: {
          title: 'Repairs Addendum',
          path: '/documents/repairs-addendum.pdf',
          category: 'Addendum',
          type: 'pdf',
          projectId: project.id
        }
      })
      
      // Create sample sheets with matching codes for comparison
      await prisma.sheet.createMany({
        data: [
          // Document 1 sheets
          { code: 'A1.1', title: 'Level 1 Floor Plan', type: 'Floor Plan', page: 1, status: 'completed', documentId: doc1.id },
          { code: 'A1.2', title: 'Level 2 Floor Plan', type: 'Floor Plan', page: 2, status: 'completed', documentId: doc1.id },
          { code: 'A2.1', title: 'Level 1 Ceiling Plan', type: 'RCP', page: 3, status: 'completed', documentId: doc1.id },
          { code: 'A3.1', title: 'Building Elevations', type: 'Elevation', page: 4, status: 'completed', documentId: doc1.id },
          { code: 'S1.1', title: 'Foundation Plan', type: 'Structural', page: 5, status: 'completed', documentId: doc1.id },
          
          // Document 2 sheets (with some matching codes for comparison)
          { code: 'A1.1', title: 'Level 1 Floor Plan (Revised)', type: 'Floor Plan', page: 1, status: 'completed', documentId: doc2.id },
          { code: 'A1.2', title: 'Level 2 Floor Plan (Revised)', type: 'Floor Plan', page: 2, status: 'completed', documentId: doc2.id },
          { code: 'A2.2', title: 'Level 1 Reflected Ceiling Plan', type: 'RCP', page: 3, status: 'completed', documentId: doc2.id },
          { code: 'A3.1', title: 'Building Elevations (Updated)', type: 'Elevation', page: 4, status: 'completed', documentId: doc2.id },
          { code: 'S1.1', title: 'Foundation Plan (Revised)', type: 'Structural', page: 5, status: 'completed', documentId: doc2.id },
        ]
      })
      
      console.log('Database initialized successfully!')
    } else {
      console.log('Database already contains data.')
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