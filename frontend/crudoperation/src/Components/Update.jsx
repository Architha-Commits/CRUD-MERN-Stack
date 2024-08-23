import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Update = () => {
  const { id } = useParams();

  const initialState = {
    bankName:"",
        branchName:"",
        userName:"",
        ifscCode:"",
        accountNo:"",
        mobileNo:""
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  

  useEffect(() => {
    const getById = async () => {
      await axios
        .get(`http://localhost:4000/user/${id}`)
        .then((res) => setFormData(res.data.data))
        .catch((err) => console.log(err));
    };
    getById();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    

    axios
      .put(`http://localhost:4000/user/${id}`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert('updated successfully')
          setFormData(initialState);
          
          navigate(`/read`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <div className="w-[50%] mt-40 flex flex-col gap-5 ml-44">
      <h1 className="text-center text-2xl font-semibold text-black ">UPDATE BANK USER DETAILS</h1>
      <form onSubmit={handleUpdate} onReset={handleReset} className="w-full flex flex-col gap-4 ">
      <input type="text" name="bankName" required placeholder='Enter Your BankName' onChange={handleChange} value={formData.bankName} className="w-full p-2 border border-black bg-white text-black rounded mt-50"/>
      <input type="text" name="branchName" required placeholder='Enter your BranchName' onChange={handleChange}value={formData.branchName} className="w-full p-2 border border-black bg-white text-black rounded mt-50"/>
      <input type="text" name="userName" required placeholder='Enter your userName'onChange={handleChange}value={formData.userName} className="w-full p-2 border border-black bg-white text-black rounded"/>
      <input type="text" name="ifscCode" required placeholder='Enter your ifscCode'onChange={handleChange}value={formData.ifscCode} className="w-full p-2 border border-black bg-white text-black rounded"/>
      <input type="number" name="accountNo" required placeholder='Enter your accountNo'onChange={handleChange}value={formData.accountNo} className="w-full p-2 border border-black bg-white text-black rounded"/>
      <input type="number" name="mobileNo" required placeholder='Enter your mobileNo'onChange={handleChange}value={formData.mobileNo} className="w-full p-2 border border-black bg-white text-black rounded"/>
        <div className="flex gap-2">
          <button type="reset" className="w-full px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-white ">Reset</button>
          <button type="submit" className="w-full px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-white ">Update </button>
          <button type="button" className="w-full px-4 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-white "onClick={handleNavigate}>Go back</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
