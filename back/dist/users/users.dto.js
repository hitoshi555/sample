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
exports.ResponseEditSelectClassroom = exports.RequestEditSelectClassroom = exports.ResponseSelectedRooms = exports.RequestSelectedRooms = exports.ResponseChangePassword = exports.RequestChangePassword = exports.StudentDTO = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class StudentDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, studentId: { required: true, type: () => String }, name: { required: true, type: () => String }, department: { required: true, type: () => Object }, password: { required: true, nullable: true } };
    }
}
exports.StudentDTO = StudentDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StudentDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StudentDTO.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StudentDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(client_1.Department),
    __metadata("design:type", String)
], StudentDTO.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], StudentDTO.prototype, "password", void 0);
class RequestChangePassword {
    static _OPENAPI_METADATA_FACTORY() {
        return { studentId: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.RequestChangePassword = RequestChangePassword;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestChangePassword.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestChangePassword.prototype, "password", void 0);
class ResponseChangePassword {
    static _OPENAPI_METADATA_FACTORY() {
        return { studentId: { required: true, type: () => String } };
    }
}
exports.ResponseChangePassword = ResponseChangePassword;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseChangePassword.prototype, "studentId", void 0);
class RequestSelectedRooms {
    static _OPENAPI_METADATA_FACTORY() {
        return { studentId: { required: true, type: () => String } };
    }
}
exports.RequestSelectedRooms = RequestSelectedRooms;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequestSelectedRooms.prototype, "studentId", void 0);
class ResponseSelectedRooms {
    static _OPENAPI_METADATA_FACTORY() {
        return { classrooms: { required: true, type: () => [require("../class-room/class-room.dto").ClassRoomDTO] } };
    }
}
exports.ResponseSelectedRooms = ResponseSelectedRooms;
class RequestEditSelectClassroom {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, studentId: { required: true, type: () => String } };
    }
}
exports.RequestEditSelectClassroom = RequestEditSelectClassroom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RequestEditSelectClassroom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequestEditSelectClassroom.prototype, "studentId", void 0);
class ResponseEditSelectClassroom {
    static _OPENAPI_METADATA_FACTORY() {
        return { resultText: { required: true, type: () => String } };
    }
}
exports.ResponseEditSelectClassroom = ResponseEditSelectClassroom;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResponseEditSelectClassroom.prototype, "resultText", void 0);
//# sourceMappingURL=users.dto.js.map