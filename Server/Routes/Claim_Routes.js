const express = require("express");
const router = express.Router();

const { createClaim ,getAllClaims,updateClaimStatus,getMyClaims} = require("../Controller/Claim_Controller");
const auth = require("../middleware/auth"); // your auth middleware

const multer = require("multer");

// 🔹 Multer config (same as items)
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, "uploads/");
},
filename: function (req, file, cb) {
cb(null, Date.now() + "-" + file.originalname);
}
});

const upload = multer({ storage });

// 🔹 Create Claim
router.post(
"/createclaim",
auth, // ✅ ensures req.user is available
upload.single("image"), // ✅ matches frontend
createClaim
);
router.get("/myclaims", auth, getMyClaims);
router.get("/allclaims", getAllClaims);
router.put("/status/:id", updateClaimStatus);

module.exports = router;
