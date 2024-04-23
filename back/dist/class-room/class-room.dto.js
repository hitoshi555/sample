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
exports.ResponseSelectClassroom = exports.RequestSelectClassroom = exports.ResponseOneClassRoom = exports.ResponseAllClassRoom = exports.ClassRoomDTO = exports.ClassRoomWithTeachers = exports.Teacher = exports.ClassRoom = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class ClassRoom {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, units: { required: true, type: () => Number }, period: { required: true, type: () => Object }, timeSlot: { required: true, type: () => Object }, weekday: { required: true, type: () => Object } };
    }
}
exports.ClassRoom = ClassRoom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClassRoom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClassRoom.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClassRoom.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClassRoom.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.Period),
    __metadata("design:type", String)
], ClassRoom.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.TimeSlot),
    __metadata("design:type", String)
], ClassRoom.prototype, "timeSlot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.WeekDay),
    __metadata("design:type", String)
], ClassRoom.prototype, "weekday", void 0);
class Teacher {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, position: { required: true, type: () => Object } };
    }
}
exports.Teacher = Teacher;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Teacher.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Teacher.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.Position),
    __metadata("design:type", String)
], Teacher.prototype, "position", void 0);
class ClassRoomWithTeachers {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, units: { required: true, type: () => Number }, period: { required: true, type: () => Object }, timeSlot: { required: true, type: () => Object }, weekday: { required: true, type: () => Object }, teacher: { required: true, type: () => [require("./class-room.dto").Teacher], nullable: true } };
    }
}
exports.ClassRoomWithTeachers = ClassRoomWithTeachers;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClassRoomWithTeachers.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClassRoomWithTeachers.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClassRoomWithTeachers.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClassRoomWithTeachers.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.Period),
    __metadata("design:type", String)
], ClassRoomWithTeachers.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.TimeSlot),
    __metadata("design:type", String)
], ClassRoomWithTeachers.prototype, "timeSlot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.WeekDay),
    __metadata("design:type", String)
], ClassRoomWithTeachers.prototype, "weekday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ClassRoomWithTeachers.prototype, "teacher", void 0);
class ClassRoomDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, units: { required: true, type: () => Number }, period: { required: true, type: () => Object }, timeSlot: { required: true, type: () => Object }, weekday: { required: true, type: () => Object } };
    }
}
exports.ClassRoomDTO = ClassRoomDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClassRoomDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClassRoomDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ClassRoomDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ClassRoomDTO.prototype, "units", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.Period),
    __metadata("design:type", String)
], ClassRoomDTO.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.TimeSlot),
    __metadata("design:type", String)
], ClassRoomDTO.prototype, "timeSlot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.WeekDay),
    __metadata("design:type", String)
], ClassRoomDTO.prototype, "weekday", void 0);
class ResponseAllClassRoom {
    static _OPENAPI_METADATA_FACTORY() {
        return { classRooms: { required: true, type: () => [require("./class-room.dto").ClassRoom] } };
    }
}
exports.ResponseAllClassRoom = ResponseAllClassRoom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ResponseAllClassRoom.prototype, "classRooms", void 0);
class ResponseOneClassRoom {
    static _OPENAPI_METADATA_FACTORY() {
        return { classRoom: { required: true, type: () => require("./class-room.dto").ClassRoomWithTeachers } };
    }
}
exports.ResponseOneClassRoom = ResponseOneClassRoom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", ClassRoomWithTeachers)
], ResponseOneClassRoom.prototype, "classRoom", void 0);
class RequestSelectClassroom {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, studentId: { required: true, type: () => String }, period: { required: true, type: () => Object }, timeSlot: { required: true, type: () => Object }, weekday: { required: true, type: () => Object } };
    }
}
exports.RequestSelectClassroom = RequestSelectClassroom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], RequestSelectClassroom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestSelectClassroom.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.Period),
    __metadata("design:type", String)
], RequestSelectClassroom.prototype, "period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.TimeSlot),
    __metadata("design:type", String)
], RequestSelectClassroom.prototype, "timeSlot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(client_1.WeekDay),
    __metadata("design:type", String)
], RequestSelectClassroom.prototype, "weekday", void 0);
class ResponseSelectClassroom {
    static _OPENAPI_METADATA_FACTORY() {
        return { resultText: { required: true, type: () => String } };
    }
}
exports.ResponseSelectClassroom = ResponseSelectClassroom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResponseSelectClassroom.prototype, "resultText", void 0);
//# sourceMappingURL=class-room.dto.js.map