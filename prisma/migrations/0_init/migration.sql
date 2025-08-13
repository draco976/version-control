-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT,
    "path" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "category" TEXT,
    "subcategory" TEXT,
    "title" TEXT,
    CONSTRAINT "Document_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sheet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "title" TEXT,
    "type" TEXT,
    "page" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'not started',
    "svgPath" TEXT,
    "documentId" INTEGER NOT NULL,
    CONSTRAINT "Sheet_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComparisonDiff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originalSheetId" INTEGER NOT NULL,
    "currentSheetId" INTEGER NOT NULL,
    "hasAdditions" BOOLEAN NOT NULL DEFAULT false,
    "hasDeletions" BOOLEAN NOT NULL DEFAULT false,
    "originalBbox" TEXT,
    "currentBbox" TEXT,
    "title" TEXT,
    "description" TEXT,
    "subContractorId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'review',
    CONSTRAINT "ComparisonDiff_subContractorId_fkey" FOREIGN KEY ("subContractorId") REFERENCES "SubContractor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ComparisonDiff_currentSheetId_fkey" FOREIGN KEY ("currentSheetId") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ComparisonDiff_originalSheetId_fkey" FOREIGN KEY ("originalSheetId") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubContractor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Box" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "title" TEXT,
    "scale" TEXT,
    "content" TEXT,
    "coordinates" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'figure',
    "shape" TEXT NOT NULL DEFAULT 'rectangle',
    "color" TEXT NOT NULL DEFAULT '#FF5722',
    "pageWidth" INTEGER,
    "pageHeight" INTEGER,
    "userModified" BOOLEAN NOT NULL DEFAULT false,
    "sheetId" INTEGER NOT NULL,
    CONSTRAINT "Box_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "coordinates" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sheetCode" TEXT NOT NULL,
    "sheetId" INTEGER NOT NULL,
    CONSTRAINT "Reference_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Distance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pointA" TEXT NOT NULL,
    "pointB" TEXT NOT NULL,
    "length" REAL NOT NULL,
    "pixel_distance" REAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    CONSTRAINT "Distance_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlignmentResult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sourceBoxId" INTEGER NOT NULL,
    "targetSheetId" INTEGER NOT NULL,
    "translationX" REAL NOT NULL,
    "translationY" REAL NOT NULL,
    "scale" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AlignmentResult_sourceBoxId_fkey" FOREIGN KEY ("sourceBoxId") REFERENCES "Box" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AlignmentResult_targetSheetId_fkey" FOREIGN KEY ("targetSheetId") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ComparisonDiff_originalSheetId_currentSheetId_key" ON "ComparisonDiff"("originalSheetId", "currentSheetId");

-- CreateIndex
CREATE UNIQUE INDEX "AlignmentResult_sourceBoxId_targetSheetId_key" ON "AlignmentResult"("sourceBoxId", "targetSheetId");

