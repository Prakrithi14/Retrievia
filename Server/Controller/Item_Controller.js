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

 const getitembyid=async(req,res)=>{
    try {
       const pid=req.params.id
       const itembyid=await Item.findById(pid)
       console.log(itembyid)
       res.status(200).json({message:"product fetched by id",itembyid:itembyid})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
 }

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




module.exports = { addItem,getAllItems,getLostItems,getFoundItems,getitembyid };