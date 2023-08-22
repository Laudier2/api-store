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
exports.CreateProductCategoryController = void 0;
const prismaClient_1 = require("../database/prismaClient");
class CreateProductCategoryController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, id_product, id_category } = request.body;
            if (typeof id_category === 'number' ||
                typeof id_product === 'number') {
                return response.status(500).json({
                    msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
                });
            }
            if (typeof id_category === 'undefined' ||
                typeof id_product === 'undefined') {
                return response.status(500).json({
                    msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
                });
            }
            const productCategory = yield prismaClient_1.prismaClient.products_categories.create({
                data: {
                    id: id,
                    id_category,
                    id_product,
                },
            });
            return response.json(productCategory);
        });
    }
}
exports.CreateProductCategoryController = CreateProductCategoryController;
