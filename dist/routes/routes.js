"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateProductController_1 = require("../controllers/CreateProductController");
const FindCategoryController_1 = require("../controllers/FindCategoryController");
const FindProductController_1 = require("../controllers/FindProductController");
const CreateProductCategoryController_1 = require("../controllers/CreateProductCategoryController");
const CreateCategoryController_1 = require("../controllers/CreateCategoryController");
const CreateProductWithExistCategory_1 = require("../controllers/CreateProductWithExistCategory");
const ControllerProductCategoryPut_1 = require("../controllers/ControllerProductCategoryPut");
const controllerCreate_1 = require("../controllers/controllerUser/controllerCreate");
const controllerFind_1 = require("../controllers/controllerUser/controllerFind");
const controllerUpdate_1 = require("../controllers/controllerUser/controllerUpdate");
const controllerDelete_1 = require("../controllers/controllerUser/controllerDelete");
const controllerAuth_1 = require("../controllers/controllerUser/controllerAuth");
const controllerLogin_1 = require("../controllers/controllerUser/controllerLogin");
const controllerParamesId_1 = require("../controllers/controllerUser/controllerParamesId");
const router = (0, express_1.Router)(); //
exports.router = router;
/* ============================== OBJETO CRIADOS PARA ROTAS ====================== */
const createProduct = new CreateProductController_1.CreateProductController();
const createCategory = new CreateCategoryController_1.CreateCategoryController();
const createProductCategory = new CreateProductCategoryController_1.CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory_1.CreateProductWithExistCategory();
const createProductCategoryExistPut = new ControllerProductCategoryPut_1.CreateProductWithExistCategoryPut();
const findProduct = new FindProductController_1.FindProductController();
const findCategory = new FindCategoryController_1.FindCategoryController();
const findProductCategory = new FindProductController_1.controllerProductCategory();
const findProductCategoryId = new FindProductController_1.controllerProductId();
/*=================================== ROTA DE PRODUCT =============================*/
router.post("/product", createProduct.handle);
router.get("/product", findProduct.handle);
router.get("/productcategory", findProductCategory.handle);
router.get("/productcategoryid/:id", findProductCategoryId.handle);
/*=================================== ROTA DE CATEGORY =============================*/
router.post("/category", createCategory.handle);
router.post("/categoryproduct", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);
router.get("/category", findCategory.handle);
/*=================================== ROTA DE USERS =============================*/
const findUser = new controllerFind_1.ControllerFind();
const findUserId = new controllerParamesId_1.UserParamesId();
const createUser = new controllerCreate_1.ControllerCreate();
const deleteUser = new controllerDelete_1.controllerDelete();
const updateUser = new controllerUpdate_1.controllerUpdate();
const authUser = new controllerAuth_1.ControllerAuth();
const loginUser = new controllerLogin_1.ControllerLogin();
/* ============================= ROTAS DE ACESSO =============================== */
router.post("/user", createUser.handle);
router.post("/login", loginUser.handle);
//router.use(authUser.handle);
router.put("/user", updateUser.handle);
router.delete("/user/:id", deleteUser.handle);
router.get("/", findUser.handle);
router.get("/user/:id", findUserId.handle);
