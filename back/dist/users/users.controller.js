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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const users_dto_1 = require("./users.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async postChangePassword(body) {
        const studentId = body.studentId;
        const password = body.password;
        const response = await this.usersService.changePassword(studentId, password);
        return response;
    }
    async getSelectedClassRoom(studentId) {
        const result = await this.usersService.selectedClassRoom(studentId);
        return result;
    }
    async postEditSelectedClassRoom(body) {
        const classRoomId = body.id;
        const studentId = body.studentId;
        const result = await this.usersService.editSelectedClassRoom(classRoomId, studentId);
        return result;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('change-password'),
    (0, swagger_1.ApiBody)({ type: users_dto_1.RequestChangePassword }),
    (0, swagger_1.ApiOkResponse)({ type: users_dto_1.ResponseChangePassword }),
    openapi.ApiResponse({ status: 201, type: require("./users.dto").ResponseChangePassword }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.RequestChangePassword]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postChangePassword", null);
__decorate([
    (0, common_1.Get)('selected-class-rooms/:studentId'),
    (0, swagger_1.ApiOkResponse)({ type: users_dto_1.ResponseSelectedRooms }),
    openapi.ApiResponse({ status: 200, type: require("./users.dto").ResponseSelectedRooms }),
    __param(0, (0, common_1.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getSelectedClassRoom", null);
__decorate([
    (0, common_1.Post)('edit-selected-class-rooms/'),
    (0, swagger_1.ApiBody)({ type: users_dto_1.RequestEditSelectClassroom }),
    (0, swagger_1.ApiOkResponse)({ type: users_dto_1.ResponseEditSelectClassroom }),
    openapi.ApiResponse({ status: 201, type: require("./users.dto").ResponseEditSelectClassroom }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.RequestEditSelectClassroom]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "postEditSelectedClassRoom", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map