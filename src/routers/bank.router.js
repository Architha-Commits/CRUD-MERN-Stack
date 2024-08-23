const express=require("express")
const router=express.Router();
const bankController = require("../controllers/bank.controller")

router
.route("/BankUserDetails")
.post(bankController.createUser)

router
.route("/BankDetails")
.get(bankController.getAllData)

router
.route("/user/:id")
.delete(bankController.deleteDataById)
.get(bankController.getDataById)
.put(bankController.updateDataById)



module.exports=router