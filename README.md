# Version Control

A Next.js application for comparing document versions and tracking sheet changes.

## Features

- **Document Version Comparison**: Compare sheets across different document versions
- **Tabbed Interface**: Easy navigation between comparable sheets
- **Side-by-Side Viewer**: Visual comparison of document changes
- **Database Integration**: Uses Prisma with SQLite for data persistence

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Initialize the database**:
   ```bash
   npx prisma generate
   node scripts/init-db.js
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## Deployment

This app is ready for deployment on Vercel:

1. Push to a Git repository
2. Connect to Vercel
3. Deploy automatically

The build process will:
- Generate Prisma client
- Initialize the database with sample data
- Build the Next.js application

## Database

The app uses SQLite with Prisma ORM. Sample data includes:
- 1 sample project (West Julia Martin Construction)
- 2 documents (Construction Drawings, Repairs Addendum)
- 10 sheets with matching codes for comparison

## Version Control Features

- Find sheets with matching codes across documents
- Display side-by-side comparisons
- Track changes and differences
- Scrollable tabs for multiple sheet comparisons