const express = require("express");
const router = express.Router();

const { addItem ,getAllItems,getLostItems,getFoundItems } = require("../Controller/Item_Controller");
const upload = require("../Middleware/upload");

router.post("/add", upload.single("image"), addItem);
router.get("/all", getAllItems);
router.get("/lost", getLostItems);
router.get("/found", getFoundItems);
module.exports = router;