const express = require("express");
const router = express.Router();

const { addItem ,getAllItems,getLostItems,getFoundItems } = require("../Controller/Item_Controller");
const upload = require("../Middleware/upload");

router.post("/add", upload.single("image"), addItem);
router.get("/getAllItems", getAllItems);
router.get("/getLostItems", getLostItems);
router.get("/getFoundItems", getFoundItems);
module.exports = router;