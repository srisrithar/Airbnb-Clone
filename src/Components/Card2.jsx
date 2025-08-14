import React from 'react'

import card8 from '../assets/card-2/card8.avif'
import card9 from '../assets/card-2/card9.avif'
import card10 from '../assets/card-2/card10.avif'
import card11 from '../assets/card-2/card11.avif'
import card12 from '../assets/card-2/card12.avif'
import card13 from '../assets/card-2/card13.avif'
import card14 from '../assets/card-2/card14.avif'
import { useNavigate } from 'react-router-dom'

const carddata2=[
{   
    id:8,
    name:"Apartment in Chennai",
    rate:"$6,117 for 2 nights.*4.8",
    image:card8,
    guest:"Guest favorite",
    

},
{
    id:9,
    name:"Shared room in Shenoy",
    rate:"$1,900 for 2 nights.4.78" ,
    image:card9,
    guest:"Guest favorite",


},
{   
    id:10,
    name:"Home in Ramapuram",
    rate:"$6,277 for 2 nights.*4.8",
    image:card10,
    guest:"Guest favorite",


},
{   
    id:11,
    name:"Shared room in Royapettah",
    rate:"$1,339 for 2 nights.*5.0",
    image:card11,
    guest:"Guest favorite",


},
{   
    id:12,
    name:"Room in Vadapalani",
    rate:"$4,645 for 2 nights.*5.0",
    image:card12,
    guest:"Guest favorite",


},
{   
    id:13,
    name:"Appart in Shenoy Nagar",
    rate:"$8,532 for 2 nights.*4.88",
    image:card13,
    guest:"Guest favorite",


},
{   
    id:14,
    name:"Flat in Nazarethpettai",
    rate:"$11,367 for 2 nights.*5.0",
    image:card14,
    guest:"Guest favorite",


},
];
const Card2 = () => {


     const navigateCard=useNavigate();
    function cardClick(data){
        navigateCard(`Product Details/${data}`)
    }
  return (
  <>
  
  <div className="main-card-container w-[90%] m-auto">
    <h1 className='font-semibold text-[20px] '>Available in Chennai this weekend</h1>

<div className="card-container grid grid-cols-7 items-center gap-2">
    {carddata2.map((item,index)=>{
        return(
            <div className="card  relative  cursor-pointer" onClick={()=>cardClick(item.id)}>
               <div className="guest flex items-center justify-between w-[90%] absolute top-3 px-2">
                 <p className='bg-[#EBF1F5] rounded-3xl text-[14px] px-2'>{item.guest}</p>
                 <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></p>
               </div>
                <img src={item.image} className='w-[190px] h-[180px] rounded-2xl'/>
                <p className='text-[14px] px-1 mt-1'>{item.name}</p>

                <p className='text-[12px] text-gray-400 px-1'>{item.rate}</p>
            </div>
            
        )
    })}
</div>


</div>

  
  
  </>
  )
}

export default Card2
