const mongoose = require("mongoose")
const connection =()=>{
    mongoose.connect("mongodb+srv://rparchitha:cABb8HQdV9RKyRjX@cluster0.rvpkmrs.mongodb.net/BankDetails")
    .then(()=>{
        console.log("Mongoose connected successfully");
    })
    .catch((err)=>{
        console.log(`Connection Error:${err}`);
    });

};

module.exports=connection;