import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCards = ({details}) => {
    // details ko props se le liya
    console.log(details);
  return (
    <div className='flex flex-wrap gap-10 justify-center items-center mt-10 '>
        {!details ? <h1 className='text-center text-3xl font-bold'>No Data Found</h1> :
        details.map((currItem,index)=>{
            return (
                <div className='w-[300px] h-[400px] bg-gray-400 flex flex-col justify-center items-center gap-2 p-2 rounded-lg shadow-lg shadow-black hover:scale-101' key={index}>
                    <img className='w-[300px] rounded-lg' src={currItem.strMealThumb} alt="" />
                    <p className='text-center text-xl'> {currItem.strMeal}</p>
                    <NavLink to={`/${currItem.idMeal}`}><button className='px-3 py-1 w-[200px] bg-green-400 rounded text-[16px]'>Recipe</button></NavLink>
                </div>
            )
        })}
    </div>
  )
}

export default MealCards