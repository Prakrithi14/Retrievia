const Claim = require("../Model/Claim_Model");
const Item = require("../Model/Item_Model");

// 🔹 Create Claim
const createClaim = async (req, res) => {
try {
const { itemId, description } = req.body;

// 🔸 check item exists
const item = await Item.findById(itemId);
if (!item) {
  return res.status(404).json({ message: "Item not found" });
}

// 🔸 get owner from item (secure)
const ownerId = item.userId;

// 🔸 get claimant from token (assumes auth middleware sets req.user)
const claimantId = req.user.id;

// 🔸 get uploaded file
const image = req.file ? req.file.filename : null;

if (!image) {
  return res.status(400).json({ message: "Proof image required" });
}

// 🔸 create claim
const newClaim = new Claim({
  itemId,
  ownerId,
  claimantId,
  description,
  image
});

await newClaim.save();

res.status(201).json({
  message: "Claim submitted successfully",
  claim: newClaim
});
console.log("BODY:", req.body);
console.log("FILE:", req.file);
console.log("USER:", req.user);


} catch (error) {
console.log(error);
res.status(500).json({ message: "Server error" });
}
};

module.exports = {
createClaim
};
