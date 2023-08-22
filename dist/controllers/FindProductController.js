"use strict";
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
exports.controllerProductId = exports.controllerProductCategory = exports.FindProductController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class FindProductController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield prismaClient_1.prismaClient.products.findMany({});
            return response.json(product);
        });
    }
}
exports.FindProductController = FindProductController;
class controllerProductCategory {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const User = yield prismaClient_1.prismaClient.products.findMany({
                where: {
                    id: id
                },
                include: {
                    products_categories: {
                        include: {
                            categories: true
                        }
                    }
                }
            });
            return response.json(User);
        });
    }
}
exports.controllerProductCategory = controllerProductCategory;
class controllerProductId {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const userExists = yield prismaClient_1.prismaClient.products.findUnique({
                where: {
                    id: id
                }
            });
            if (!userExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não estar vinculado a nem uma produto, tente outro!`
                });
            }
            const User = yield prismaClient_1.prismaClient.products.findUnique({
                where: {
                    id: id
                },
                include: {
                    products_categories: {
                        include: {
                            categories: true
                        }
                    }
                }
            });
            return response.status(200).json(User);
        });
    }
}
exports.controllerProductId = controllerProductId;
