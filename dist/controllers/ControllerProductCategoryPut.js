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
exports.CreateProductWithExistCategoryPut = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductWithExistCategoryPut {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, home, price, bar_code, color, size, quantity, description, image, slug } = request.body;
            const userExists = yield prismaClient_1.prismaClient.products.findUnique({
                where: {
                    id: id
                }
            });
            if (!userExists) {
                return response.status(400).json({
                    msg: `Esse id: ${id} não estar cadastrado, tente outro!`
                });
            }
            if (typeof price === 'number' ||
                typeof bar_code === 'number' ||
                typeof color === 'number' ||
                typeof size === 'number' ||
                typeof name === 'number' ||
                typeof quantity === 'number' ||
                typeof description === 'number' ||
                typeof slug === 'number' ||
                typeof home === 'number' ||
                typeof image === 'number') {
                return response.status(500).json({
                    msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
                });
            }
            if (typeof price === 'undefined' ||
                typeof size === 'undefined' ||
                typeof description === 'undefined' ||
                typeof color === 'undefined' ||
                typeof name === 'undefined' ||
                typeof bar_code === 'undefined' ||
                typeof quantity === 'undefined' ||
                typeof slug === 'undefined' ||
                typeof home === 'undefined' ||
                typeof image === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! Verifique novamente!`
                });
            }
            const product = yield prismaClient_1.prismaClient.products.update({
                where: {
                    id
                },
                data: {
                    name,
                    price,
                    bar_code,
                    color,
                    size,
                    quantity,
                    description,
                    image,
                    slug
                }
            });
            return response.json(product);
        });
    }
}
exports.CreateProductWithExistCategoryPut = CreateProductWithExistCategoryPut;
