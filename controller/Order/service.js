const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    "orderId":String,
	"paymentmethod":String,
    "customername":String,
	"email":String,
    "branch":String,
	"pincode":Number,
	"phone":Number
  }); 
  const model = mongoose.model('order',orderSchema);

let SaveOrder = async(data)=>{
try{
const Order = new model(data);
const saveOrder = await Order.save();
return saveOrder;
}catch(err){
    return false
}
}

let FindOrder = async(data)=>{
    try{
    const finddata = await model.find(data);
    return finddata;
}catch(err){
    return false;
}
}

let  ShowOrders = async(data)=> {
    try{
    const showdata = await model.find({email:data.email});
    return showdata;
  }catch(err){
      return false;
  }
}

let UpdateDetails = async(data)=> {
    try{
    const updatedata = await model.findOneAndUpdate({"email":data.email},
    {$set:{"customername":data.customername,
            "pincode":data.pincode,
            "isActive":true,
            }},
       {new : true}
      );
    return updatedata;
}catch(err){
    return false
}
}

let DeleteData = async(data)=> {
    try {
    let deletedata = await model.deleteOne({email:data.email});
    return deletedata;
    }catch(err){
        return false
    }
}





module.exports={
    SaveOrder,
    FindOrder,
    ShowOrders,
    UpdateDetails,
    DeleteData
};