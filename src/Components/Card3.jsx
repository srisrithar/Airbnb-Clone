import React from 'react'
import card15 from '../assets/card-3/card15.avif'
import card16 from '../assets/card-3/card16.avif'
import card17 from '../assets/card-3/card17.avif'
import card18 from '../assets/card-3/card18.avif'
import card19 from '../assets/card-3/card19.avif'
import card20 from '../assets/card-3/card20.avif'
import card21 from '../assets/card-3/card21.avif'
import { useNavigate } from 'react-router-dom'



const carddata3=[
    {
         id:15,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card15,
            guest:"Guest Favorite",
    },
    {
         id:16,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card16,
            guest:"Guest Favorite",
    },
    {
         id:17,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card17,
            guest:"Guest Favorite",
    },
    {
         id:18,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card18,
            guest:"Guest Favorite",
    },
    {
         id:19,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card19,
            guest:"Guest Favorite",
    },
    {
         id:20,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card20,
            guest:"Guest Favorite",
    },
    {
         id:21,
            name:"Flat in Bangalore Urban",
            rate:"$5,478 for 2 nights.*5.0",
            image:card21,
            guest:"Guest Favorite",
    },
]
const Card3 = () => {

     const navigateCard=useNavigate();
    function cardClick(data){
        navigateCard(`Product Details/${data}`)
    }

  return (
   <>
   
   
  <div className="main-card-container w-[90%] m-auto">
    <h1 className='font-semibold text-[20px] '>Available in Chennai this weekend</h1>

<div className="card-container grid grid-cols-7 items-center gap-2">
    {carddata3.map((item,index)=>{
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

export default Card3
