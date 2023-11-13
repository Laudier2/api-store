import { Router } from "express";

//============== importação de class de controller de Productos =================
import { CreateProductController } from "../controllers/products/CreateProductController";
import { CreateUpdateproducts } from "../controllers/products/CreateUpdateProduct";
import { controllerproductsDelete } from "../controllers/products/CreateProductDelete";
import { controllercategoriesDelete } from "../controllers/products/CreateCategoryDelete";
import { FindcategoriesController } from "../controllers/products/FindCategoryController";
import { FindCategoryRelation } from "../controllers/products/FindCategorProductRealtion";
import { FindproductsController } from "../controllers/products/FindProductController";
import { controllerproductsCategory } from "../controllers/products/FindProductCategoryId";
import { controllerproductsId } from "../controllers/products/FindProductId";
import { CreateProductCategoryController } from "../controllers/products/CreateProductCategoryController";
import { CreatecategoriesController } from "../controllers/products/CreateCategoryController";
import { CreatecategoriesUpdate } from "../controllers/products/CreateUpdateCategory";
import { CreateProductWithExistcategories } from "../controllers/products/CreateProductWithExistCategory";
import { CreateproductsWithExistCategoryPut } from "../controllers/products/ControllerProductCategoryPut";

//============== importação de class de controller de usuarios =================
import { ControllerCreate } from "../controllers/users/controllerCreateUser";
import { ControllerFind } from "../controllers/users/controllerFindUser";
import { controllerUpdate } from "../controllers/users/controllerUpdateUser";
import { controllerDelete } from "../controllers/users/controllerDeleteUser";
import { ControllerAuth } from "../controllers/users/controllerAuth";
import { ControllerLogin } from "../controllers/users/controllerLogin";
import { UserParamesId } from "../controllers/users/controllerParamesIdFindUser";
import { ControllerFindAdressUser } from "../controllers/users/controllerFindUserAdress";

//============== importação de class de controller de adress =================
import { CreateAdressUser } from "../controllers/adress/CreateAdressUser";
import { FindAdressUser } from "../controllers/adress/FindAdressUser ";
import { UpdateAdressUser } from "../controllers/adress/UpdateAdressUser";
import { ControllerRelationsUserAdress } from "../controllers/users/CreateRealationsUserAdress";
import { FindRelationsUserAdress } from "../controllers/users/FindUserAdressReations";
import { FindRelationsUserAdressId } from "../controllers/users/FindUserAdressReationsId";

//Mercado pago
import MercadoPagoPayment from "../controllers/mercadoPagoPayment/MercadoPagoPayment";

const router = Router();//

/* ============================== OBJETO CRIADOS PARA ROTAS ====================== */
const createProduct = new CreateProductController();
const findProduct = new FindproductsController();
const createProductDel = new controllerproductsDelete();
const createUpadate = new CreateUpdateproducts();

/* ============================== OBJETO CRIADOS PARA ROTAS DE CATEGORY ====================== */
const createCategory = new CreatecategoriesController();
const findCategory = new FindcategoriesController();
const createCategoryUpdate = new CreatecategoriesUpdate();

/* ============================== OBJETO CRIADOS PARA ROTAS RELACIONAMENTO ====================== */
const createCategoryDel = new controllercategoriesDelete();
const findCategoryRelation = new FindCategoryRelation()
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistcategories();
const createProductCategoryExistPut = new CreateproductsWithExistCategoryPut();
const findProductCategory = new controllerproductsCategory();
const findProductCategoryId = new controllerproductsId();

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
router.get("/categorypr", findCategoryRelation.handle);
router.post("/categorypr", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);

/*=================================== ROTA DE USERS =============================*/

const findUser = new ControllerFind()
const findUserAdress = new ControllerFindAdressUser()
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
router.get("/user", findUser.handle);
router.get("/usersadress", findUserAdress.handle);
router.get("/user/:id", findUserId.handle);

/* ============================== OBJETO CRIADOS PARA ROTAS ADRESS ====================== */
const createAdress = new CreateAdressUser()
const findAdress = new FindAdressUser()
const findAdressUersRealations = new FindRelationsUserAdress()
const findAdressUersRealationsid = new FindRelationsUserAdressId()
const updateAdress = new UpdateAdressUser()
const relationUserAdress = new ControllerRelationsUserAdress()

/* ============================= ROTAS DE ADRESS =============================== */
router.post("/adress", createAdress.handle)
router.get("/adress", findAdress.handle)
router.put("/adress", updateAdress.handle)

/* ============================= ROTAS DE REATION_USER_ADRESS =============================== */
router.post("/relationuseradress", relationUserAdress.handle)
router.get("/relationuseradress", findAdressUersRealations.handle)
router.get("/relationuseradress/:id", findAdressUersRealationsid.handle)

/* ============================= ROTAS DE REATION_USER_ADRESS =============================== */

router.post('/payment', MercadoPagoPayment)

router.get("/payment", (req, res) => {
    res.status(200).send(
        `
        <h1 style="text-align: center; color: blue; font-size: 50px">Pagamento com mercado pago</h1>
        <hr/>
        <img style="margin: auto; dispaly: flex; width: 100%" src="https://s2-techtudo.glbimg.com/cBzv_-VyoyirkotBx76jb_m-FQA=/0x0:620x304/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/n/z8weK8QpCWDfcY8KFx4w/2013-08-27-mp.jpg" alt="img" />
        `
    );
});

export { router };
