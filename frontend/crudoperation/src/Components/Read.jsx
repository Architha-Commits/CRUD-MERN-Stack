import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Read = () => {
    const [data,setData]=useState([])

    const getData=async()=>{

        await
        axios
        .get("http://localhost:4000/BankDetails")
        .then((res)=>{
            if(res.status === 200 || res.status === 201){
                setData(res.data.data)
            }
        })
        .catch((err)=>console.log(err))
    };
    useEffect(()=>{
        getData();
    },[]);


    const handleDelete=async(id)=>{
        await
        axios
        .delete(`http://localhost:4000/user/${id}`)
        .then((res)=>{
            if(res.status === 200 || res.status === 201){
                alert('Data deleted Successfully')
                setData((state)=>{
                    const filteredData = state.filter((val)=> val._id !== id);
                    return filteredData
                });
            }
        })
        .catch((err)=>console.log(err));
    };







    return(
        <>
        <Link to={`/`}>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white mt-10 ml-10 ">
            Add Form
          </button>
        </Link>
        <div className="flex gap-5 ">
            
             {data?.map((val)=>(
                <div key={val._id} >
                    <div className=" ml-10 flex flex-col  border-2 border-black-600 p-30 mt-20">
                    <Link to={`/update/${val._id}`}><button  className="w-full px-3 py-1.5 bg-green-500 hover:bg-green-600 rounded text-white mb-2">Update</button></Link>
                    <button className="w-full px-4 py-1.5 bg-red-500 hover:bg-red-600 rounded text-white mb-2 " onClick={() => handleDelete(val._id)}>Delete</button>
                    <h1>Bank Name:{val.bankName}</h1>
                    <h1>Branch Name:{val.branchName}</h1>
                    <h1>User Name:{val.userName}</h1>
                    <h1>IFSC Code:{val.ifscCode}</h1>
                    <h1>Account No:{val.accountNo}</h1>
                    <h1>Mobile No:{val.mobileNo}</h1>
                    </div>
                  
                </div>
             ))}
        </div>
        </>
       
    )
}


export default Read




