"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerCreate = void 0;
const prismaClient_1 = require("../../database/prismaClient");
const bcrypt = __importStar(require("bcrypt"));
class ControllerCreate {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, home, phone, city, cep, street, image, state, number } = request.body;
            const cryptPass = yield bcrypt.hash(password, 8);
            const userExists = yield prismaClient_1.prismaClient.user.findUnique({
                where: {
                    email: email
                }
            });
            if (userExists) {
                return response.status(400).json({
                    msg: `O email ${email} já existe!  E lembre-se que, todos os campos tem que ser string ok!`
                });
            }
            if (typeof number === 'number' ||
                typeof phone === 'number' ||
                typeof cep === 'number' ||
                typeof password === 'number' ||
                typeof name === 'number' ||
                typeof email === 'number' ||
                typeof state === 'number' ||
                typeof street === 'number' ||
                typeof city === 'number' ||
                typeof home === 'number' ||
                typeof image === 'number') {
                return response.status(500).json({
                    msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
                });
            }
            if (typeof number === 'undefined' ||
                typeof phone === 'undefined' ||
                typeof cep === 'undefined' ||
                typeof password === 'undefined' ||
                typeof name === 'undefined' ||
                typeof email === 'undefined' ||
                typeof state === 'undefined' ||
                typeof street === 'undefined' ||
                typeof city === 'undefined' ||
                typeof home === 'undefined' ||
                typeof image === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! Verifique novamente!`
                });
            }
            const user = yield prismaClient_1.prismaClient.user.create({
                data: {
                    email,
                    name,
                    phone,
                    image,
                    home,
                    password: cryptPass,
                    street,
                    city,
                    cep,
                    number,
                    state
                }
            });
            return response.status(201).json({ message: 'Usuario criado com ', user });
        });
    }
}
exports.ControllerCreate = ControllerCreate;
