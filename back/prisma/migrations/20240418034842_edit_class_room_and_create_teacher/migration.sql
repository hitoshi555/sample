/*
  Warnings:

  - You are about to alter the column `period` on the `ClassRoom` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `timeSlot` on the `ClassRoom` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `ClassRoom` MODIFY `period` ENUM('SPRING', 'AUTUMN') NOT NULL,
    MODIFY `timeSlot` ENUM('FIEST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH') NOT NULL;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `position` ENUM('PROFESSOR', 'ASSOCIATEPROFESSOR', 'LECTURER', 'ASSISTANTPROFESSOR') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClassRoomToTeacher` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ClassRoomToTeacher_AB_unique`(`A`, `B`),
    INDEX `_ClassRoomToTeacher_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ClassRoomToTeacher` ADD CONSTRAINT `_ClassRoomToTeacher_A_fkey` FOREIGN KEY (`A`) REFERENCES `ClassRoom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassRoomToTeacher` ADD CONSTRAINT `_ClassRoomToTeacher_B_fkey` FOREIGN KEY (`B`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
