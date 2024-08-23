import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Create = () => {
    const initialstate={
        bankName:"",
        branchName:"",
        userName:"",
        ifscCode:"",
        accountNo:"",
        mobileNo:""
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialstate);
    const handleSubmit=(e)=>{
        e.preventDefault();

        axios
        .post("http://localhost:4000/BankUserDetails", formData)
        .then((res)=>{
            if (res.status === 200 || res.status === 201){
                toast.success(res.data.message)
                setFormData(initialstate)
                
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((state) => ({ ...state, [name]: value }));
      };

      const handleReset = () => {
        setFormData(initialstate);
      };

      const handleNavigate = () => {
        navigate(`/read`);
      };

      

  return (
    <div className="w-[50%] mt-40 flex flex-col gap-5 ml-44">
      <h1 className="text-center text-2xl font-semibold text-black">ADD BANK USER DETAILS</h1>
    <form onSubmit={handleSubmit} onReset={handleReset}  className="w-full flex flex-col gap-4 text-center">
        <input type="text" name="bankName" required placeholder='Enter Your BankName' onChange={handleChange} value={formData.bankName} className="w-full p-2 border border-black bg-white text-black rounded mt-50"/>
        <input type="text" name="branchName" required placeholder='Enter your BranchName' onChange={handleChange}value={formData.branchName} className="w-full p-2 border border-black bg-white text-black rounded mt-50"/>
        <input type="text" name="userName" required placeholder='Enter your userName'onChange={handleChange}value={formData.userName} className="w-full p-2 border border-black bg-white text-black rounded"/>
        <input type="text" name="ifscCode" required placeholder='Enter your ifscCode'onChange={handleChange}value={formData.ifscCode} className="w-full p-2 border border-black bg-white text-black rounded"/>
        <input type="number" name="accountNo" required placeholder='Enter your accountNo'onChange={handleChange}value={formData.accountNo} className="w-full p-2 border border-black bg-white text-black rounded"/>
        <input type="number" name="mobileNo" required placeholder='Enter your mobileNo'onChange={handleChange}value={formData.mobileNo} className="w-full p-2 border border-black bg-white text-black rounded"/>
        <div className="flex gap-2">
        <button type="reset" className="w-[50%] px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-white ">Reset</button>
        <button type="submit" className="w-[50%] px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-white" >Submit</button>
        <button type="button" className="w-[50%] px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-white "onClick={handleNavigate}>Next</button>
        </div>
    </form>
    </div>
  )
  
}

export default Create
