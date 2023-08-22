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
exports.controllerUpdate = void 0;
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
class controllerUpdate {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, password, phone, image, home, street, city, cep, number, state } = request.body;
            const cryptPass = yield bcrypt.hash(password, 8);
            const userExists = yield prisma.user.findFirst({
                where: {
                    id: id,
                    email: email
                }
            });
            if (!userExists) {
                return response.status(400).json({
                    msg: `Você não pode autera o email: ${email}! Somente os outros dados.`
                });
            }
            if (typeof id === "undefined") {
                return response.status(400).json({
                    msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
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
                typeof home === 'number' ||
                typeof city === 'number' ||
                typeof image === 'number') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando ou estão em números! Lembre-se que, todos os campos tem que estar em string ok!`
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
                typeof home === 'undefined' ||
                typeof city === 'undefined' ||
                typeof image === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! E lembre-se que todos os campos tem que ser string ok!`
                });
            }
            const user = yield prisma.user.update({
                where: {
                    id: id,
                },
                data: {
                    email,
                    name,
                    phone,
                    image,
                    password: cryptPass,
                    home,
                    street,
                    city,
                    cep,
                    number,
                    state
                }
            });
            return response.status(201).json(user);
        });
    }
}
exports.controllerUpdate = controllerUpdate;
