const express = require("express");
const router = express.Router();

const { addItem ,getAllItems,getitembyid,getLostItems,getFoundItems } = require("../Controller/Item_Controller");
const upload = require("../Middleware/upload");

router.post("/add", upload.single("image"), addItem);
router.get("/all", getAllItems);
router.get("/lost", getLostItems);
router.get("/found", getFoundItems);
router.get("/item/:id", getitembyid);
module.exports = router;