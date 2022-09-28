const propertyModel = require('../models/user');

exports.createUser = async(req,res)=>{
    try{
        const saveData = await new propertyModel(req.body).save();
        res.json(saveData);
    }
    catch{(err)=>res.json(err)};
}

exports.getUser = async(req,res)=>{
    try{
        const getusers = await propertyModel.find();
        res.json(getusers);
    }
    catch{(err)=>res.json(err)};
}
exports.getU = async (req,res)=>{
    try{
        const user = await propertyModel.find({name:req.params.id});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}