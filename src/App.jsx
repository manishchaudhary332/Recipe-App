import React from 'react'
import Mainpage from './Component/Mainpage'
import { Routes, Route} from 'react-router-dom'
import MealInfo from './Component/MealInfo'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/:mealid' element={<MealInfo/>}/>
        {/* <Route path='/goback' elament={<Mainpage/>}/> */}
      </Routes>

    </div>
  )
}

export default App