import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Experiences from './Pages/Experiences'
import Services from './Pages/Services'
import CardDetails1 from './Pages/CardDetails1'
import Footer from './Components/Footer'
import RequestBook from './Pages/RequestBook'
import Continue from './Pages/Continue'
const App = () => {
  const[cardDetailData,setCardDetail]=useState();
  return (

   <>
   <div>
    {/* <CardDetails1 data={cardDetailData}/> */}
   </div>
   
   {/* <Navbar/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Experiences' element={<Experiences/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Product Details/:id' element={<CardDetails1 />}/>
    <Route path='/booking/:id' element={<RequestBook/>}/>
    <Route path='/continue' element={<Continue/>}/>


  </Routes>
  

   </>
  )
}

export default App
