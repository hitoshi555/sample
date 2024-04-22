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
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const bcrypt = require("bcryptjs");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth/auth.service");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("./auth/auth.dto");
class LoginRequest {
}
class ResponseStudent {
}
class RequestProfile {
}
let AppController = class AppController {
    constructor(appService, authService) {
        this.appService = appService;
        this.authService = authService;
    }
    getHello() {
        console.log('getHello');
        return this.appService.getHello();
    }
    async getHash() {
        console.log('hash');
        const student = { studentId: 'S001', name: 'Alice', password: 'password1' };
        const hashedPassword = await bcrypt.hash(student.password, 10);
        console.log(hashedPassword);
        return hashedPassword;
    }
    async login(req) {
        console.log('login start');
        console.log('login req:', req);
        const user = req;
        console.log('login user:', user);
        console.log('login end');
        const result = this.authService.login(user);
        return result;
    }
    getProfile(req) {
        return req;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('hash'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHash", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiBody)({ type: LoginRequest }),
    (0, swagger_1.ApiOkResponse)({ type: auth_dto_1.ResponseLogin }),
    openapi.ApiResponse({ status: 201, type: require("./auth/auth.dto").ResponseLogin }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginRequest]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiBody)({ type: RequestProfile }),
    (0, swagger_1.ApiOkResponse)({ type: ResponseStudent }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        auth_service_1.AuthService])
], AppController);
//# sourceMappingURL=app.controller.js.map