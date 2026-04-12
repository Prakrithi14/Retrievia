const Item = require("../Model/Item_Model");

const addItem = async (req, res) => {
  try {
    const { title, description, category, location, type } = req.body;

    const newItem = new Item({
      title,
      description,
      category,
      location,
      type,
      image: req.file ? req.file.filename : null,
      userId: req.user?.id   // optional (if auth added)
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



const getAllItems = async (req, res) => {
try {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
} 
catch (error) {
  console.log(error);
  res.status(500).json({ success: false });
}
};


const getLostItems = async (req, res) => {
try {
const items = await Item.find({ type: "lost" }).sort({ createdAt: -1 });
res.json(items);

} catch (error) {
console.log(error);
res.status(500).json({ success: false });
}
};


const getFoundItems = async (req, res) => {
try {
const items = await Item.find({ type: "found" }).sort({ createdAt: -1 });

res.json(items);

} catch (error) {
console.log(error);
res.status(500).json({ success: false });
}
};




module.exports = { addItem,getAllItems,getLostItems,getFoundItems };