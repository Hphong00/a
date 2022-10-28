const userCrtl = require("../controller/userCtrl");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", /* verifyTokenAndAuthorization,*/ userCrtl.updateUser);
//UPDATE PROFILE
router.put("/profile/:id",/* verifyTokenAndAuthorization,*/ userCrtl.updateProfile);
//DELETE
router.delete("/:id", /* verifyTokenAndAuthorization,*/ userCrtl.deleteUser);
//GET USER
router.get("/find/:id", /* verifyTokenAndAdmin,*/ userCrtl.getUser);
//GET ALL USER
router.get("/", /*verifyTokenAndAdmin,*/ userCrtl.getAllUsers);
//GET USER STATS
router.get("/stats", /* verifyTokenAndAdmin,*/ userCrtl.getUserStats);
module.exports = router;
