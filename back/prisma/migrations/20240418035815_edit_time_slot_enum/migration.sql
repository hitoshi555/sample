/*
  Warnings:

  - The values [FIEST] on the enum `ClassRoom_timeSlot` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `ClassRoom` MODIFY `timeSlot` ENUM('FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH') NOT NULL;
