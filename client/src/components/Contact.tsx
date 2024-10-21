import React, { KeyboardEvent, useState } from 'react'
import { json } from 'react-router-dom'

const Contact = () => {

  const [error,setError]=useState<String>();
  interface userDataType {
    name: string,
    email: string,
    message: string
  }


  const [userData, setUserData] = useState<userDataType>({
    name: "",
    email: "",
    message: ""
  })

  const onSubmit = async (e?: React.FormEvent<HTMLFormElement>): Promise<void> => {
    
   if(e) e.preventDefault()
    console.log(userData);
    if (!userData.name || !userData.email || !userData.message) {
      console.log('Fill The Value');
      return
    }
    try {
      const res = await fetch('http://localhost:4444/api/enquiries', {
        method: 'POST', headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
      console.log();
      const fetchRes = await res.json()
      if (fetchRes?.success) {
        setUserData({ name: "", message: "", email: "" });
      }
    } catch (error:any) {
      console.log(error);
      setError(error.message)
    }

  }
  const keyPressEvent=async(e:React.KeyboardEvent<HTMLFormElement>)=> {
    if (e.code === "Enter") {
      e.preventDefault()
     await onSubmit()
    }
  }

  const handleChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className='p-4 lg:items-center md:items-center flex flex-col'>
      <h1 className='w-100 text-start'>Contant any Reports</h1>
      <form onSubmit={onSubmit} onKeyDown={keyPressEvent} className='shadow-inner rounded shadow-blue-700 w-100 md:w-72 lg:w-72  p-2 flex flex-col  gap-4 mt-4'>
        <div className='flex flex-col gap-2 p-2'>
          <label htmlFor="name" > Name</label>
          <input value={userData.name} onChange={handleChanger} type="text" id='name' name='name' className='outline-1 ronded-2 hover:bg-blue-200 rounded-2 p-2 outline-gray-300 border-2 border-slate-200' />
        </div>
        <div className='flex flex-col gap-2 p-2'><label htmlFor="email" > Email</label>
          <input value={userData.email} onChange={handleChanger} type="text" id='email' name='email' className='outline-1 ronded-2 hover:bg-blue-200 rounded-2 p-2 outline-gray-300 border-2 border-slate-200' /></div>
        <div className='flex flex-col gap-2 p-2'>
          <label htmlFor="message" > Message</label>
          <input onChange={handleChanger} value={userData.message} type="text" id='message' name='message' className='outline-1 ronded-2 hover:bg-blue-200 select:bg-red rounded-2 p-2 outline-gray-300 border-2 border-slate-200 aria-checked:bg-red-700 ' />
        </div>
        <button type="submit" className=" rounded-lg bg-blue-700 outline-none  py-2 px-4 mt4 hover:bg-blue-800 focus:ring ring-blue-400 ">
          Submit
        </button>
      </form>
      {error?<p className='mt-2'>{error}</p>:null}

    </div>
  )
}

export default Contact
