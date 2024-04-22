"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const library_1 = require("@prisma/client/runtime/library");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(studentId) {
        const result = this.prisma.student.findUnique({
            where: { studentId: studentId },
            include: {
                password: true,
            },
        });
        return result;
    }
    async changePassword(studentId, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatePassword = await this.prisma.password.update({
            where: { studentId: studentId },
            data: {
                hashedPassword: hashedPassword,
            },
        });
        return { studentId: updatePassword.studentId };
    }
    async selectedClassRoom(studentId) {
        const studentWithClassRooms = await this.prisma.student.findUnique({
            where: { studentId: studentId },
            include: { classRoom: true },
        });
        const classRooms = studentWithClassRooms.classRoom;
        return { classrooms: classRooms };
    }
    async editSelectedClassRoom(id, studentId) {
        try {
            const student = await this.prisma.student.findUnique({
                where: { studentId: studentId },
                include: { classRoom: true },
            });
            if (!student) {
                return { resultText: 'error: Student not found' };
            }
            if (!student.classRoom.some((classroom) => classroom.id === id)) {
                return { resultText: 'error: Classroom not linked to student' };
            }
            await this.prisma.student.update({
                where: { studentId: studentId },
                data: {
                    classRoom: {
                        disconnect: [{ id: id }],
                    },
                },
            });
            return { resultText: 'done' };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                return { resultText: `error: ${error.message}` };
            }
            return { resultText: 'error: An unexpected error occurred' };
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map