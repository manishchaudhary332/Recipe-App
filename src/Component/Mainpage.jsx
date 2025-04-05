import React from 'react'
import { useState } from 'react'
import MealCards from './MealCards'

const Mainpage = () => {

    const [Data, setData] = useState()
    const [search, setSearch] = useState("")

    const HandleInput = (event)=>{
        setSearch(event.target.value)
        console.log(search);
    }

    // meal dp api se api leke aaggye
    const myFun = async ()=>{
        if(search === ""){
            alert("Please Enter Dishe Name")
            return
        }
        const get =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json()
        console.log(jsonData.meals );
    
    // setData me Api ka data pass kr diya
        setData(jsonData.meals) 
        
    }

  return (
    <div className='w-full h-screen  '>

        <div className= ' w-[600px] mx-auto bg-zinc-300 rounded flex mt-2 p-2 gap-2 '>

            {/* input me on change isliye lga rhe taki jab bhi ham kuch search kre vo api me jake search ho jaye */}
            <input onChange={HandleInput} className='w-full p-1 border-green-500' type="text" placeholder='Enter Dishe' />

            <button onClick={myFun} className='bg-green-700 px-3 py-1 p-1 rounded hover:bg-green-500 hover:text-white'>Search</button>
        </div>
        <div className=''>
            {/* jsonData.meals ko hamne data me store kiya tha or use ab MealCards me Prop kr diya */}
            <MealCards details={Data}/>

        </div>
    </div>
  )
}

export default Mainpage