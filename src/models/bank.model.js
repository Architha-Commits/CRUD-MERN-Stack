const mongoose =require("mongoose");

const bankSchema = new mongoose.Schema({
  
    bankName:{
        type:String,
        require:true,
    },
    branchName:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    ifscCode:{
        type:String,
        require:true, 
    },
    accountNo:{
        type:Number,
        require:true,
    },
    mobileNo:{
        type:Number,
        
    },
    
},
{ timestamps: true }
);

const bank =mongoose.model("bank",bankSchema);

module.exports=bank;