const bank = require("../models/bank.model")
const {model}=require('mongoose')

const createUser=async(req,res)=>{
    try {
        const createUserList=await bank.create(req.body)
        res.status(200).json({
            data:createUserList,
            message:"User List created successfully"
        })
    } catch (error) {
        res.json({
            Error:error,
        })
        
    }
}

const getDataById = async (req, res) => {
  try {
    let { id } = req.params;
    // console.log(id)
    let findproduct = await bank.findById(id);
    if (!findproduct || findproduct.length === 0) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.json({
      data: findproduct,
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

const getAllData = async (req, res) => {
  try {
    let findproduct = await bank.find();
    if (!findproduct || findproduct.length === 0) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      data: findproduct,
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

const deleteDataById = async (req, res) => {
  try {
    let { id } = req.params;
    const deleteProductList = await bank.findByIdAndDelete(id);
    if (!deleteProductList) {
      return res.status(404).json({
        message: "No Data Found",
      });
    }
    res.json({
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

const updateDataById = async (req, res) => {
  try {
    let { id } = req.params;
    const updateProductList = await bank.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateProductList) {
      res.json({
        message: "data not found",
      });
    }
    res.json({
      data: updateProductList,
      message: "User updated successfully",
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

module.exports={
    createUser,
    getDataById,
    getAllData,
    deleteDataById,
    updateDataById
}