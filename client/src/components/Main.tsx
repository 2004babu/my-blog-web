import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux'
import { setPost } from '../reduxState/StateSlice'



const Main = () => {

const [search,setSearch]=useState("")
const [reload,setReload]=useState(false)

  interface User{
    _id?:string ,
    title:string,
    context:string,
    pic:string
  }
  interface PostState{
    post :{post:User[]}
  }

  const useTypeSelector:TypedUseSelectorHook<PostState>=useSelector
const dispatch=useDispatch()
  const {post} =useTypeSelector((state)=>state?.post)
  useEffect(()=>{
   async  function fetchpost(){
    try {

      const  fetchData=await fetch('http://localhost:4444/api/post',{method:"GET"})

        const post:User = await fetchData.json()
      console.log( post);
      if (post) {
       dispatch(setPost(post)) 
      }
      
     } catch (error) {
      console.log(error);
       
     }
   }
   fetchpost()

   
  },[reload])
console.log(search);


const handleSearch=async(e:React.ChangeEvent<HTMLInputElement>)=>{
const typed:string=e.target.value
console.log(typed);

  setSearch(typed)

  if (typed.length>0) {
  const response=  await fetch(`http://localhost:4444/api/post/search?s=${typed}`,{method:"GET"})

  const post =await response.json()
  if (post?.posts) {
    dispatch(setPost(post))
  }
  console.log(post);
  
  }else{
setReload(prev=>!prev)
  }
  
}

    return (
        <div className='container-fluid h-screen w-100  bg-white/[.7] text-black overflow-/-scroll'>
          <div className="flex flex-row p-2 mt-2 justify-evenly items-center gap-4">
            <h1 className=''> Its My Wepsite.. by Babu</h1>
    
            <div className='flex flex-row justify-between items-center gap-3 p-1 '>
              <input type="text" name="search" id="search" onChange={handleSearch} className="outline-none w-30 p-2 border-2 hover:bg-sky-400 rounded-md  border-slate-300 focus:ring-1 ring:bg-blue-800 " />
              <button className='bg-blue-700 px-4 py-2 text-white rounded'> Search</button>
            </div>
          </div>
          <div className="contaner-fluid gap-4 gap-y-8 p-5 mt-2 flex flex-row max-[600px]:justify-center lg:justify-start    flex-wrap min-w-100 min-h-fit bg-red">
          { post.length>0 ?post?.map((item:User, index:number) =>
              <div key={index} className="min-w-40 bg-black/[0.2] max-w-72  shadow-lg shadow-blue-500/50   rounded-lg pb-3 ">
                <img height={200} src={item.pic} alt="photebabu" />
                <h1 className=' p-2 font-bold '>{item.title.substring(0,50)+'...'}</h1>
                <p className='px-2 '>{item.context.substring(0,50)+'...'}</p>
              </div>):(<h1 className='text-xl font-bold w-100 text-center'>Post not Found </h1>)}
          </div>
        </div>
      )
}

export default Main
