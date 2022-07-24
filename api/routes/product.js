const productCtrl = require("../controller/productCtrl");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", /*verifyTokenAndAdmin,*/ productCtrl.createProduct)

//UPDATE
router.put("/:id", /*verifyTokenAndAdmin,*/ productCtrl.updateProduct)

//DELETE
router.delete("/:id",/* verifyTokenAndAdmin,*/ productCtrl.deleteProduct)

//GET PRODUCT
router.get("/find/:id", productCtrl.getProduct)

//GET ALL PRODUCTS
router.get("/", productCtrl.getAllProducts)

module.exports = router;