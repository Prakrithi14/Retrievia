const express = require("express");
const router = express.Router();
const auth=require("../middleware/auth")
const { addItem ,getAllItems,getitembyid,getLostItems,getFoundItems,getExpiredItems,moveToSale,buyOrAdoptItem,getSaleItems} = require("../Controller/Item_Controller");
const upload = require("../Middleware/upload");

router.post("/add", upload.single("image"),auth, addItem);
router.get("/all", getAllItems);
router.get("/lost", getLostItems);
router.get("/found", getFoundItems);
router.get("/item/:id", getitembyid);
router.get("/expired", getExpiredItems);
router.get("/sale", getSaleItems);
router.put("/buy/:id", buyOrAdoptItem);
router.put("/moveTosale/:id", moveToSale);
module.exports = router;