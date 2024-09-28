"use client"

import { useState } from 'react';
import Todo from '../Components/Todo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Home() {

  const [formData,SetFormData] = useState ({
    title:"",
    description:"",
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetFormData(form => ({...form,[name]:value}));
    console.log(formData);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //api code
      const response = await axios.post('/api',formData);
      
      toast.success(response.data.msg)
    } catch (error) {
      toast.error("Task Add Unsuccessful")
    }
  }

  return (
    <>
    <ToastContainer theme="light"/>
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-3 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter Description" className="px-2 py-2 border-2 w-full"></textarea>
        <button type="submit" className="bg-blue-500 py-3 px-11 text-white rounded ml-auto">Add Todo</button>
      </form>



      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-white text-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo/>
            <Todo/>
            <Todo/>
          </tbody>
        </table>
      </div>


    </>
  );
}
