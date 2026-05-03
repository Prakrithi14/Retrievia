// // const Item = require("../Model/Item_Model");

// // const addItem = async (req, res) => {
// //   try {
// //     const { title, description, category, location, type } = req.body;

// //     const newItem = new Item({
// //       title,
// //       description,
// //       category,
// //       location,
// //       type,
// //       image: req.file ? req.file.filename : null,
// //       userId: req.user?.id   // optional (if auth added)
// //     });

// //     await newItem.save();

// //     res.json({
// //       success: true,
// //       message: "Item added successfully"
// //     });

// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).json({
// //       success: false,
// //       message: "Error adding item"
// //     });
// //   }
// // };



// // const getAllItems = async (req, res) => {
// // try {
// //   const items = await Item.find().sort({ createdAt: -1 });
// //   res.json(items);
// // } 
// // catch (error) {
// //   console.log(error);
// //   res.status(500).json({ success: false });
// // }
// // };

// //  const getitembyid=async(req,res)=>{
// //     try {
// //        const pid=req.params.id
// //        const itembyid=await Item.findById(pid)
// //        console.log(itembyid)
// //        res.status(200).json({message:"product fetched by id",itembyid:itembyid})
        
// //     } catch (error) {
// //         console.log(error)
// //         res.status(500).json({message:"server error",error})
// //     }
// //  }

// // const getLostItems = async (req, res) => {
// // try {
// // const items = await Item.find({ type: "lost" }).sort({ createdAt: -1 });
// // res.json(items);

// // } catch (error) {
// // console.log(error);
// // res.status(500).json({ success: false });
// // }
// // };


// // const getFoundItems = async (req, res) => {
// // try {
// // const items = await Item.find({ type: "found" }).sort({ createdAt: -1 });

// // res.json(items);

// // } catch (error) {
// // console.log(error);
// // res.status(500).json({ success: false });
// // }
// // };




// // module.exports = { addItem,getAllItems,getLostItems,getFoundItems,getitembyid };

// const Item = require("../Model/Item_Model");

// // 🔹 Add Item
// const addItem = async (req, res) => {
//   console.log("REQ.USER:", req.user);
//   try {
//     const { title, description, category, location, type } = req.body;

//     // 🔥 ensure user exists (auth required)
//     if (!req.user || !req.user.id) {
//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized: user not found"
//       });
//     }

//     const newItem = new Item({
//       title,
//       description,
//       category,
//       location,
//       type,
//       image: req.file ? req.file.filename : null,
//       userId: req.user.id   // ✅ FIXED
//     });

//     await newItem.save();

//     res.json({
//       success: true,
//       message: "Item added successfully"
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Error adding item"
//     });
//   }
// };


// // 🔹 Get All Items
// const getAllItems = async (req, res) => {
//   try {
//     const items = await Item.find().sort({ createdAt: -1 });
//     res.json(items);
//   } 
//   catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false });
//   }
// };


// // 🔹 Get Item By ID
// const getitembyid = async (req, res) => {
//   try {
//     const pid = req.params.id;

//     const itembyid = await Item.findById(pid);

//     if (!itembyid) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     res.status(200).json({
//       message: "Item fetched by id",
//       itembyid: itembyid
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "server error", error });
//   }
// };


// // 🔹 Get Lost Items
// const getLostItems = async (req, res) => {
//   try {
//     const items = await Item.find({ type: "lost" }).sort({ createdAt: -1 });
//     res.json(items);

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false });
//   }
// };


// // 🔹 Get Found Items
// const getFoundItems = async (req, res) => {
//   try {
//     const items = await Item.find({ type: "found" }).sort({ createdAt: -1 });
//     res.json(items);

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false });
//   }
// };

// const getExpiredItems = async (req, res) => {
//   try {
   
//     const days = 7;
//     const expiryDate = new Date();
//     expiryDate.setDate(expiryDate.getDate() - days);

//     // 🔹 find items older than 7 days AND not claimed
//   const expiredItems = await Item.find({
//   createdAt: { $lte: expiryDate },
//   status: { $nin: ["claimed", "sale", "adoption"] }, // exclude processed
//   type: "found" // only found items
// }).sort({ createdAt: -1 });

// res.status(200).json(expiredItems);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Error fetching expired items"
//     });
//   }
// };
// const moveToSale = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const item = await Item.findById(id);

//     if (!item) {
//       return res.status(404).json({
//         message: "Item not found"
//       });
//     }

//     // 🔹 update status
//     item.status = "sale";

//     await item.save();

//     res.status(200).json({
//       message: "Item moved to sale successfully",
//       item
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Error moving item to sale"
//     });
//   }
// };
// module.exports = {
//   addItem,
//   getAllItems,
//   getLostItems,
//   getFoundItems,
//   getitembyid,
//   getExpiredItems,moveToSale
// };

const Item = require("../Model/Item_Model");

// 🔹 Add Item
const addItem = async (req, res) => {
  console.log("REQ.USER:", req.user);
  try {
    const { title, description, category, location, type } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: user not found"
      });
    }

    const newItem = new Item({
      title,
      description,
      category,
      location,
      type,
      image: req.file ? req.file.filename : null,
      userId: req.user.id
    });

    await newItem.save();

    res.json({
      success: true,
      message: "Item added successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error adding item"
    });
  }
};


// 🔹 Get All Items  ✅ FIXED ONLY THIS PART
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({
      status: { $nin: ["sale", "adoption", "sold"] } // 🔥 FIX
    }).sort({ createdAt: -1 });

    res.json(items);
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};


// 🔹 Get Item By ID
const getitembyid = async (req, res) => {
  try {
    const pid = req.params.id;

    const itembyid = await Item.findById(pid);

    if (!itembyid) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({
      message: "Item fetched by id",
      itembyid: itembyid
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error });
  }
};


// 🔹 Get Lost Items
const getLostItems = async (req, res) => {
  try {
    const items = await Item.find({ type: "lost" }).sort({ createdAt: -1 });
    res.json(items);

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};


// 🔹 Get Found Items
const getFoundItems = async (req, res) => {
  try {
    const items = await Item.find({ type: "found" }).sort({ createdAt: -1 });
    res.json(items);

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};


// 🔹 Get Expired Items (Already correct 👍)
// const getExpiredItems = async (req, res) => {
//   try {
//     const days = 7;
//     const expiryDate = new Date();
//     expiryDate.setDate(expiryDate.getDate() - days);

//     const expiredItems = await Item.find({
//       createdAt: { $lte: expiryDate },
//       status: { $nin: ["claimed", "sale", "adoption"] },
//       type: "found"
//     }).sort({ createdAt: -1 });

//     res.status(200).json(expiredItems);

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Error fetching expired items"
//     });
//   }
// };

const getExpiredItems = async (req, res) => {
  try {
    const days = 4;
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() - days);

    const expiredItems = await Item.find({
      createdAt: { $lte: expiryDate },
      type: "found",
      status: { $nin: ["claimed", "sale", "adoption", "sold"] } // 🔥 FIXED
    }).sort({ createdAt: -1 });

    res.status(200).json(expiredItems);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching expired items"
    });
  }
};
// 🔹 Move To Sale (KEEPING SIMPLE AS YOU HAD)
// const moveToSale = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const item = await Item.findById(id);

//     if (!item) {
//       return res.status(404).json({
//         message: "Item not found"
//       });
//     }

//     // 🔴 optional safety (doesn't break your logic)
//     if (item.type !== "found") {
//       return res.status(400).json({
//         message: "Only found items allowed"
//       });
//     }

//     item.status = "sale"; // keeping your original behavior

//     await item.save();

//     res.status(200).json({
//       message: "Item moved to sale successfully",
//       item
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Error moving item to sale"
//     });
//   }
// };

const moveToSale = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("ID RECEIVED:", id); // 🔍 debug

    // 🔥 validate id
    if (!id) {
      return res.status(400).json({
        message: "Invalid ID"
      });
    }

    const item = await Item.findById(id);

    console.log("ITEM FOUND:", item); // 🔍 debug

    if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    if (item.type !== "found") {
      return res.status(400).json({
        message: "Only found items allowed"
      });
    }

    item.status = "sale";

    await item.save();

    res.status(200).json({
      message: "Item moved to sale successfully",
      item
    });

  } catch (error) {
    console.log("ERROR IN moveToSale:", error); // 🔥 IMPORTANT
    res.status(500).json({
      message: "Error moving item to sale",
      error: error.message
    });
  }
};

const getSaleItems = async (req, res) => {
  try {
    const items = await Item.find({
      status: { $in: ["sale", "adoption"] }
    }).sort({ createdAt: -1 });

    res.status(200).json(items);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching sale items"
    });
  }
};
const buyOrAdoptItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (!["sale", "adoption"].includes(item.status)) {
      return res.status(400).json({
        message: "Item not available"
      });
    }

    item.status = item.status === "sale" ? "sold" : "adopted";

    await item.save();

    res.json({
      message: "Success",
      item
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  addItem,
  getAllItems,
  getLostItems,
  getFoundItems,
  getitembyid,
  getExpiredItems,
  moveToSale,
  getSaleItems,
  buyOrAdoptItem
};