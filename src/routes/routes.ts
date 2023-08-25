import { Router } from "express";

//============== importação de class de controller de Productos =================
import { CreateProductController } from "../controllers/products/CreateProductController";
import { CreateUpdateProduct } from "../controllers/products/CreateUpdateProduct";
import { controllerProductDelete } from "../controllers/products/CreateProductDelete";
import { controllerCategoryDelete } from "../controllers/products/CreateCategoryDelete";
import { FindCategoryController } from "../controllers/products/FindCategoryController";
import { FindProductController } from "../controllers/products/FindProductController";
import { controllerProductCategory } from "../controllers/products/FindProductCategoryId";
import { controllerProductId } from "../controllers/products/FindProductId";
import { CreateProductCategoryController } from "../controllers/products/CreateProductCategoryController";
import { CreateCategoryController } from "../controllers/products/CreateCategoryController";
import { CreateCategoryUpdate } from "../controllers/products/CreateUpdateCategory";
import { CreateProductWithExistCategory } from "../controllers/products/CreateProductWithExistCategory";
import { CreateProductWithExistCategoryPut } from "../controllers/products/ControllerProductCategoryPut";

//============== importação de class de controller de usuarios =================
import { ControllerCreate } from "../controllers/users/controllerCreate";
import { ControllerFind } from "../controllers/users/controllerFind";
import { controllerUpdate } from "../controllers/users/controllerUpdate";
import { controllerDelete } from "../controllers/users/controllerDelete";
import { ControllerAuth } from "../controllers/users/controllerAuth";
import { ControllerLogin } from "../controllers/users/controllerLogin";
import { UserParamesId } from "../controllers/users/controllerParamesId";

const router = Router();//

/* ============================== OBJETO CRIADOS PARA ROTAS ====================== */
const createProduct = new CreateProductController();
const findProduct = new FindProductController();
const createProductDel = new controllerProductDelete();
const createUpadate = new CreateUpdateProduct();

/* ============================== OBJETO CRIADOS PARA ROTAS DE CATEGORY ====================== */
const createCategory = new CreateCategoryController();
const findCategory = new FindCategoryController();
const createCategoryUpdate = new CreateCategoryUpdate();

/* ============================== OBJETO CRIADOS PARA ROTAS RELACIONAMENTO ====================== */
const createCategoryDel = new controllerCategoryDelete();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();
const createProductCategoryExistPut = new CreateProductWithExistCategoryPut();
const findProductCategory = new controllerProductCategory();
const findProductCategoryId = new controllerProductId();

/*=================================== ROTA DE PRODUCT =============================*/

router.post("/product", createProduct.handle);
router.delete("/product/:id", createProductDel.handle);
router.put("/product", createUpadate.handle);
router.get("/product", findProduct.handle);
router.get("/productcategory", findProductCategory.handle);
router.get("/productcategoryid/:id", findProductCategoryId.handle);

/*=================================== ROTA DE CATEGORY =============================*/
router.get("/category", findCategory.handle);
router.post("/category", createCategory.handle);
router.put("/category", createCategoryUpdate.handle);

/*=================================== ROTA DE REALACIONAMENTO =============================*/
router.delete("/category/:id", createCategoryDel.handle);
router.post("/categoryproduct", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);

/*=================================== ROTA DE USERS =============================*/

const findUser = new ControllerFind()
const findUserId = new UserParamesId()
const createUser = new ControllerCreate()
const deleteUser = new controllerDelete()
const updateUser = new controllerUpdate()
const authUser = new ControllerAuth()
const loginUser = new ControllerLogin()

/* ============================= ROTAS DE ACESSO =============================== */

router.post("/user", createUser.handle);
router.post("/login", loginUser.handle);
//router.use(authUser.handle);
router.put("/user", updateUser.handle);
router.delete("/user/:id", deleteUser.handle);
router.get("/", findUser.handle);
router.get("/user/:id", findUserId.handle);

export { router };
