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

const getAllClaims=async(req,res)=>{
  try {
    const claims=await Claim.find()
     .populate("itemId")
      .populate("claimantId", "name email")
      // .populate("ownerId", "name email");
      res.json(claims)
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Error fetching claims"})

  }
}

// const updateClaimStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     const updated = await Claim.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     res.json({
//       message: "Status updated",
//       claim: updated
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error updating status" });
//   }
// };

const getMyClaims = async (req, res) => {
  try {
    // 🔥 get user from token (auth middleware)
    const userId = req.user.id;

    // 🔹 fetch only this user's claims
    const claims = await Claim.find({ claimantId: userId })
      .populate("itemId")     // get item details
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json(claims);

  } catch (error) {
    console.log("GET MY CLAIMS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching user claims"
    });
  }
};
const updateClaimStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // 🔹 update claim status
    const claim = await Claim.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    // 🔥 if approved → mark item as claimed
    if (status === "Approved") {
      await Item.findByIdAndUpdate(claim.itemId, {
        status: "claimed"
      });
    }

    res.json({
      message: "Claim status updated",
      claim
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateClaimStatus };
module.exports = {
createClaim,getAllClaims,updateClaimStatus,getMyClaims
};
