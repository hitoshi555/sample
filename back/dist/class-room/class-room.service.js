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
exports.ClassRoomService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClassRoomService = class ClassRoomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllClassRoom() {
        const allClassRoom = await this.prisma.classRoom.findMany();
        return { classRooms: allClassRoom };
    }
    async getOneClassRoom(id) {
        const result = await this.prisma.classRoom.findUnique({
            where: { id },
            include: {
                teacher: true,
            },
        });
        console.log(result.name);
        return result;
    }
    async selectClassRoom(studentId, classroomId, period, timeSlot, weekday) {
        console.log('selectClassRoom');
        const student = await this.prisma.student.findUnique({
            where: { studentId: studentId },
            include: { classRoom: true },
        });
        if (!student) {
            throw new Error('Student not found');
        }
        const isConflict = student.classRoom.some((classRoom) => classRoom.period === period &&
            classRoom.timeSlot === timeSlot &&
            classRoom.weekday === weekday);
        if (!isConflict) {
            await this.prisma.student.update({
                where: { studentId: studentId },
                data: {
                    classRoom: {
                        connect: { id: classroomId },
                    },
                },
            });
            console.log('selectClassRoom added end');
            return { resultText: 'added' };
        }
        else {
            console.log('selectClassRoom scheduling conflict end');
            return { resultText: 'scheduling conflict' };
        }
    }
};
exports.ClassRoomService = ClassRoomService;
exports.ClassRoomService = ClassRoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassRoomService);
//# sourceMappingURL=class-room.service.js.map