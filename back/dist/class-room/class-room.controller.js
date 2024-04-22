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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoomController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const class_room_service_1 = require("./class-room.service");
const swagger_1 = require("@nestjs/swagger");
const class_room_dto_1 = require("./class-room.dto");
const passport_1 = require("@nestjs/passport");
let ClassRoomController = class ClassRoomController {
    constructor(classRoomService) {
        this.classRoomService = classRoomService;
    }
    async getAllClassRoom() {
        console.log('getAllClassRoom');
        const response = await this.classRoomService.getAllClassRoom();
        console.log('response', response);
        return response;
    }
    async getOneClassRoom(id) {
        console.log('getOneClassRoom');
        console.log('id', id);
        const response = await this.classRoomService.getOneClassRoom(id);
        console.log('response', response);
        return { classRoom: response };
    }
    async selectClassRoom(body) {
        console.log('select-class-room');
        const studentId = body.studentId;
        const classroomId = body.id;
        const period = body.period;
        const timeSlot = body.timeSlot;
        const weekday = body.weekday;
        const response = await this.classRoomService.selectClassRoom(studentId, classroomId, period, timeSlot, weekday);
        console.log('select-class-room end');
        return response;
    }
};
exports.ClassRoomController = ClassRoomController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: class_room_dto_1.ResponseAllClassRoom }),
    openapi.ApiResponse({ status: 200, type: require("./class-room.dto").ResponseAllClassRoom }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassRoomController.prototype, "getAllClassRoom", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: class_room_dto_1.ResponseOneClassRoom }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClassRoomController.prototype, "getOneClassRoom", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBasicAuth)(),
    (0, swagger_1.ApiBody)({ type: class_room_dto_1.RequestSelectClassroom }),
    (0, swagger_1.ApiOkResponse)({ type: class_room_dto_1.ResponseSelectClassroom }),
    (0, common_1.Post)('select-class-room'),
    openapi.ApiResponse({ status: 201, type: require("./class-room.dto").ResponseSelectClassroom }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [class_room_dto_1.RequestSelectClassroom]),
    __metadata("design:returntype", Promise)
], ClassRoomController.prototype, "selectClassRoom", null);
exports.ClassRoomController = ClassRoomController = __decorate([
    (0, common_1.Controller)('class-room'),
    __metadata("design:paramtypes", [class_room_service_1.ClassRoomService])
], ClassRoomController);
//# sourceMappingURL=class-room.controller.js.map