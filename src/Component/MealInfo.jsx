import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const MealInfo = () => {
   const navigate =  useNavigate()
    const {mealid} = useParams() 
    const [info , setInfo] = useState()

    const getInfo =async ()=>{ 
        const get =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json()
        console.log(jsonData.meals[0] );

        setInfo(jsonData.meals[0])
    }
    if(info != ""){
        getInfo()  
    }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-300 p-5'>
        {!info ? <h1 className='text-center text-3xl font-bold'>No Data Found</h1> :
        <div className='flex gap-4'>
        <img className='w-[300px] rounded-lg' src={info.strMealThumb} alt="" />
        <div className='bg-gray-400 p-4 rounded-lg shadow-lg shadow-black'>
            <h1 className='text-2xl font-bold text-white'>Recipe Detail</h1>
            <button className='px-3 py-1 rounded bg-red-400 mt-3'>{info.strMeal}</button>
            <h3 className='text-2xl font-bold mt-3 text-white'>Instruction's</h3>
            <p className='text-[14px]'>{info.strInstructions}</p>
            <button className='px-3 py-1 rounded bg-yellow-400 mt-5' onClick={()=>navigate('/')} >Go Back</button>
        </div>
    </div>
    }
    </div>
    
  )
}

export default MealInfo