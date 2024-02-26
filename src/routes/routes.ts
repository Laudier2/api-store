import { Router } from "express";

//============== importação de class de controller de Productos =================
import { CreateProductController } from "../controllers/controllerProducts/CreateProductController";
import { CreateUpdateproducts } from "../controllers/controllerProducts/CreateUpdateProduct";
import { controllerproductsDelete } from "../controllers/controllerProducts/CreateProductDelete";
import { controllercategoriesDelete } from "../controllers/controllerProducts/CreateCategoryDelete";
import { FindcategoriesController } from "../controllers/controllerProducts/FindCategoryController";
import { FindCategoryRelation } from "../controllers/controllerProducts/FindCategorProductRealtion";
import { FindcategoriesControllerId } from "../controllers/controllerProducts/FindCategoryControllerId"; 
import { FindproductsController } from "../controllers/controllerProducts/FindProductController";
import { controllerproductsCategory } from "../controllers/controllerProducts/FindProductCategoryId";
import { controllerproductsId } from "../controllers/controllerProducts/FindProductId";
import { CreateProductCategoryRelation } from "../controllers/controllerProducts/CreateProductCategoryRelation";
import { CreatecategoriesController } from "../controllers/controllerProducts/CreateCategoryController";
import { CreatecategoriesUpdate } from "../controllers/controllerProducts/CreateUpdateCategory";
import { CreateProductWithExistcategories } from "../controllers/controllerProducts/CreateProductWithExistCategory";
import { CreateproductsWithExistCategoryPut } from "../controllers/controllerProducts/ControllerProductCategoryPut";
import { ControllerCategoryDeleteRelations } from "../controllers/controllerProducts/CreateCategoryDeleteRelations";
import { FindProductRealationTodos } from "../controllers/controllerProducts/FindProductRealationTodos";

//============== importação de class de controller de usuarios =================
import { ControllerCreate } from "../controllers/controllerUsers/controllerCreateUser";
import { ControllerFind } from "../controllers/controllerUsers/controllerFindUser";
import { controllerUpdate } from "../controllers/controllerUsers/controllerUpdateUser";
import { controllerDelete } from "../controllers/controllerUsers/controllerDeleteUser";
import { ControllerAuth } from "../controllers/controllerUsers/controllerAuth";
import { ControllerLogin } from "../controllers/controllerUsers/controllerLogin";
import { UserParamesId } from "../controllers/controllerUsers/controllerParamesIdFindUser";
import { ControllerFindAdressUser } from "../controllers/controllerUsers/controllerFindUserAdress";

//============== importação de class de controller de adress =================
import { CreateAdressUser } from "../controllers/adress/CreateAdressUser";
import { FindAdressUser } from "../controllers/adress/FindAdressUser ";
import { UpdateAdressUser } from "../controllers/adress/UpdateAdressUser";
import { ControllerRelationsUserAdress } from "../controllers/controllerUsers/CreateRealationsUserAdress";
import { FindRelationsUserAdress } from "../controllers/controllerUsers/FindUserAdressReations";
import { FindRelationsUserAdressId } from "../controllers/controllerUsers/FindUserAdressReationsId";

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
const createCategoryDeleteR = new ControllerCategoryDeleteRelations();

/* ============================== OBJETO CRIADOS PARA ROTAS RELACIONAMENTO ====================== */
const createCategoryDel = new controllercategoriesDelete();
const findCategoryRelation = new FindCategoryRelation()
const findCategoryRelationId = new FindcategoriesControllerId()
const createProductCategory = new CreateProductCategoryRelation();
const createProductCategoryExist = new CreateProductWithExistcategories();
const createProductCategoryExistPut = new CreateproductsWithExistCategoryPut();
const findProductCategory = new controllerproductsCategory();
const findProductCategoryId = new controllerproductsId();
const FindProductRealationTodosList = new FindProductRealationTodos();

/* ================================= CONTROLLERS COMPRA ================================ */
import { ControllerCompra, ControllerCompra1, ControllerCompra2, ControllerCompra3, ControllerCompra4 } from "../controllers/controllerCompra/controllerCompraCreate"; 
import { ControllerCompraFind, ControllerCompraFind1, ControllerCompraFind2, ControllerCompraFind3, ControllerCompraFind4 } from "../controllers/controllerCompra/controllerCompraFind";
import { ControllerCompraUpdate } from "../controllers/controllerCompra/controllerCompraUpdate";
import { ControllerCompraDelete, ControllerCompraDelete1, ControllerCompraDelete2, ControllerCompraDelete3, ControllerCompraDelete4 } from "../controllers/controllerCompra/controllerCompraDelete";
import { ControllerCompraRelations } from "../controllers/controllerCompra/controllerCompraRelations";
import { ControllerCompraRelationsDel } from "../controllers/controllerCompra/controllerCompraRelationsDelete"; 
import { ControllerCompraFindRelations } from "../controllers/controllerCompra/controllerCompraFindRelation";

/* ================================= CONTROLLERS FAVORIT ================================ */
import { CreateFavorit } from "../controllers/controllerFavoriotos/controllerFavoriotosCreate"; 
import { ControllerFavoritUpdate } from "../controllers/controllerFavoriotos/controllerFavoriotosUpdate"; 
import { ControllerFavoritFind } from "../controllers/controllerFavoriotos/controllerFavoriotosFind"; 
import { ControllerFavoritDelete } from "../controllers/controllerFavoriotos/controllerFavoriotosDelete"; 

const createFavorito = new CreateFavorit()
const findFavorito = new ControllerFavoritFind()
const updateFavorito = new ControllerFavoritUpdate()
const deleteFavorito = new ControllerFavoritDelete()

/* ================================= CONTROLLERS COMENTARIOS ================================ */
import { ControllerComentario } from "../controllers/controllerComentarios/controllerCompraCreate"; 
import { ControllerComentarioUpdate } from "../controllers/controllerComentarios/controllerCompraUpdate"; 
import { ControllerComentarioFind } from "../controllers/controllerComentarios/controllerCompraFind"; 
import { ControllerComentarioDelete } from "../controllers/controllerComentarios/controllerCompraDelete"; 
import { controllerComentarioFindRelation } from "../controllers/controllerComentarios/controllerComentarioFindRelation"; 
import { ControllerComentarioaRelationsDel } from "../controllers/controllerComentarios/ControllerComentarioaRelationsDel"; 
import { controllerComentarioCreateRelation } from "../controllers/controllerComentarios/controllerComentarioCreateRelation"; 

const createComentario = new ControllerComentario()
const createComentarioRelation = new controllerComentarioCreateRelation()
const findComentario = new ControllerComentarioFind()
const findComentarioRelation = new controllerComentarioFindRelation()
const updateComentario = new ControllerComentarioUpdate()
const deleteComentario = new ControllerComentarioDelete()
const deleteComentarioRelation = new ControllerComentarioaRelationsDel()

const createCompra = new ControllerCompra()
const createCompra1 = new ControllerCompra1()
const createCompra2 = new ControllerCompra2()
const createCompra3 = new ControllerCompra3()
const createCompra4 = new ControllerCompra4()
const createCompraFind = new ControllerCompraFind()
const createCompraFind1 = new ControllerCompraFind1()
const createCompraFind2 = new ControllerCompraFind2()
const createCompraFind3 = new ControllerCompraFind3()
const createCompraFind4 = new ControllerCompraFind4()
const createCompraFindRelations = new ControllerCompraFindRelations()
const createCompraUpdate = new ControllerCompraUpdate()
const createCompraDelete = new ControllerCompraDelete()
const createCompraDelete1 = new ControllerCompraDelete1()
const createCompraDelete2 = new ControllerCompraDelete2()
const createCompraDelete3 = new ControllerCompraDelete3()
const createCompraDelete4 = new ControllerCompraDelete4()
const createDeleteRelation = new ControllerCompraRelationsDel()
const createCompraRealtion = new ControllerCompraRelations()

/*=================================== IMPORT CONTROLLER MARCKTS =============================*/
// SLids
import { ControllerSlids } from "../controllers/marckts/slids/controllerSlidsCreate";
import { ControllerSlidsUpdate } from "../controllers/marckts/slids/controllerSlidsUpdate";
import { ControllerSlidsFind } from "../controllers/marckts/slids/controllerSlidsFind";
import { ControllerSlidsDelete } from "../controllers/marckts/slids/controllerSlidsDelete";
//Banner
import { ControllerBanner } from "../controllers/marckts/banne/controllerBannesCreate";
import { ControllerBannerUpdate } from "../controllers/marckts/banne/controllerBannesUpdate";
import { ControllerBannerFind } from "../controllers/marckts/banne/controllerBannesFind";
import { ControllerBannerDelete } from "../controllers/marckts/banne/controllerBannesDelete";
//Promocao
import { ControllerPromocao } from "../controllers/marckts/promocao/controllerPromocaoCreate";
import { ControllerPromocaoUpdate } from "../controllers/marckts/promocao/controllerPromocaoUpdate";
import { ControllerPromocaoFind } from "../controllers/marckts/promocao/controllerPromocaoFind";
import { ControllerPromocaoDelete } from "../controllers/marckts/promocao/controllerPromocaoDelete";
//Ofertas
import { ControllerOfertas } from "../controllers/marckts/ofertas/controllerOfertaCreate";
import { ControllerOfertasUpdate } from "../controllers/marckts/ofertas/controllerOfertaUpdate";
import { ControllerOfertasFind } from "../controllers/marckts/ofertas/controllerOfertaFind";
import { ControllerOfertasDelete } from "../controllers/marckts/ofertas/controllerOfertaDelete";

//Objetos criados para rotas das class marckts
//OBJ slids
const slidsCreate = new ControllerSlids()
const slidsUpdate = new ControllerSlidsUpdate()
const slidsFind = new ControllerSlidsFind()
const slidsDelete = new ControllerSlidsDelete()
//OBJ banner
const bannerCreate = new ControllerBanner()
const bannerUpdate = new ControllerBannerUpdate()
const bannerFind = new ControllerBannerFind()
const bannerDelete = new ControllerBannerDelete()
//OBJ promoção
const promocaoCreate = new ControllerPromocao()
const promocaoUpdate = new ControllerPromocaoUpdate()
const promocaoFind = new ControllerPromocaoFind()
const promocaoDelete = new ControllerPromocaoDelete()
//OBJ ofertas
const ofertasCreate = new ControllerOfertas()
const ofertasUpdate = new ControllerOfertasUpdate()
const ofertasFind = new ControllerOfertasFind()
const ofertasDelete = new ControllerOfertasDelete()


/*=================================== ROTA DE MACKTS =============================*/
//SLIDS
router.post("/slids", slidsCreate.handle);
router.delete("/slids/:id", slidsDelete.handle);
router.put("/slids", slidsUpdate.handle);
router.get("/slids", slidsFind.handle);
//BANNER
router.post("/banner", bannerCreate.handle);
router.delete("/banner/:id", bannerDelete.handle);
router.put("/banner", bannerFind.handle);
router.get("/banner", bannerFind.handle);
//PROMOÇÃO
router.post("/promocao", promocaoCreate.handle);
router.delete("/promocao/:id", promocaoDelete.handle);
router.put("/promocao", promocaoUpdate.handle);
router.get("/promocao", promocaoFind.handle);
//OFERTAS
router.post("/ofertas", ofertasCreate.handle);
router.delete("/ofertas/:id", ofertasDelete.handle);
router.put("/ofertas", ofertasUpdate.handle);
router.get("/ofertas", ofertasFind.handle);

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
router.delete("/categoryrelations/:id", createCategoryDeleteR.handle);
router.get("/category/:id", findCategoryRelationId.handle);
router.get("/categorypr", findCategoryRelation.handle);
router.post("/categorypr", createProductCategory.handle);
router.post("/productwithcategory", createProductCategoryExist.handle);
router.put("/productwithcategoryput", createProductCategoryExistPut.handle);
router.get("/producttodos", FindProductRealationTodosList.handle);

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

router.post("/login", loginUser.handle);
//router.use(authUser.handle);
router.post("/user", createUser.handle);
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

/* ============================= ROTAS DE ADRESS =============================== */
/* ============================= ROTAS DE ADRESS =============================== */
router.post("/comentario", createComentario.handle)
router.post("/comentariorelation", createComentarioRelation.handle)
router.get("/comentario", findComentario.handle)
router.get("/comentariorelation", findComentarioRelation.handle)
router.put("/comentario", updateComentario.handle)
router.delete("/comentario/:id", deleteComentario.handle)
router.delete("/comentariorelation/:id", deleteComentarioRelation.handle)

/* ============================= ROTAS DE ADRESS =============================== */
router.post("/favorito", createFavorito.handle)
router.get("/favorito", findFavorito.handle)
router.put("/favorito", updateFavorito.handle)
router.delete("/favorito/:id", deleteFavorito.handle)


/* ============================= ROTAS DE REATION_USER_ADRESS =============================== */
router.post("/relationuseradress", relationUserAdress.handle)
router.get("/relationuseradress", findAdressUersRealations.handle)
router.get("/relationuseradress/:id", findAdressUersRealationsid.handle)

/* ============================= ROTAS DE COMPRAS =============================== */
router.post("/compra", createCompra.handle);
router.post("/compra1", createCompra1.handle);
router.post("/compra2", createCompra2.handle);
router.post("/compra3", createCompra3.handle);
router.post("/compra4", createCompra4.handle);
router.post("/comprarelations", createCompraRealtion.handle);
router.get("/comprarelations", createCompraFindRelations.handle);
router.get("/compra", createCompraFind.handle);
router.get("/compra1", createCompraFind1.handle);
router.get("/compra2", createCompraFind2.handle);
router.get("/compra3", createCompraFind3.handle);
router.get("/compra4", createCompraFind4.handle);
router.put("/compraupdate", createCompraUpdate.handle);
router.delete("/compra/:id", createCompraDelete.handle);
router.delete("/compra1/:id", createCompraDelete1.handle);
router.delete("/compra2/:id", createCompraDelete2.handle);
router.delete("/compra3/:id", createCompraDelete3.handle);
router.delete("/compra4/:id", createCompraDelete4.handle);
router.delete("/comprarelations/:id", createDeleteRelation.handle);

/* ============================= ROTAS DE REATION_USER_ADRESS =============================== */

router.post('/payment', MercadoPagoPayment)

router.get("/", (req, res) => {
    res.status(200).send(
        `
        <h1 style="text-align: center; color: #00BFFF; font-size: 50px">Pagamento com mercado pago</h1>
        <hr/>
         <ul>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/user">GET user: Lista todos os usuarios na base de dados!</a></li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/product">GET produtos: Lista todos os produtos na base de dados!</a></li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/adress">GET endereços: Lista todos os endereços na base de dados!</a></li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/compra">GET compras: Lista todos as compras na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/slids">GET slids: Lista todos as imagens na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/banner">GET banner: Lista todos os banner na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/promocao">GET promoção: Lista todos as promoçoes na base de dados!</a>
            </li>
            <li style="background-color: aqua; font-weight: bold; font-size: large 15px; margin: 10px; display: inline-block; padding: 10px; border-radius: 6px; border: solid 1px; text-decoration: none;">
                <a href="/ofertas">GET ofertas: Lista todos as ofertas na base de dados!</a>
            </li>
        </ul>
        <img style="margin: auto; dispaly: flex; width: 100%" src="https://s2-techtudo.glbimg.com/cBzv_-VyoyirkotBx76jb_m-FQA=/0x0:620x304/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/M/n/z8weK8QpCWDfcY8KFx4w/2013-08-27-mp.jpg" alt="img" />
        `
    );
});

export { router };
