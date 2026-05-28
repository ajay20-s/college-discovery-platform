/*
  Warnings:

  - Added the required column `averagePackage` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highestPackage` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placementRate` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ranking` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "averagePackage" TEXT NOT NULL,
ADD COLUMN     "highestPackage" TEXT NOT NULL,
ADD COLUMN     "placementRate" TEXT NOT NULL,
ADD COLUMN     "ranking" TEXT NOT NULL;
