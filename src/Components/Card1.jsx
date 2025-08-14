import React from 'react'
import card1 from '../assets/card-1/card1.avif'
import card2 from '../assets/card-1/card2.avif'
import card3 from '../assets/card-1/card3.avif'
import card4 from '../assets/card-1/card4.avif'
import card5 from '../assets/card-1/card5.avif'
import card6 from '../assets/card-1/card6.avif'
import card7 from '../assets/card-1/card7.avif'
import { useNavigate } from 'react-router-dom'

const carddata1=[
{   
    id:1,
    name:"Flat in Bangalore Urban",
    rate:"$5,478 for 2 nights.*5.0",
    image:card1,
    guest:"Guest Favorite",

},
{
    id:2,
    name:"Flat in Bangalore Urban",
    rate:"$6,391 for 2 nights.4.89" ,
    image:card2,
    guest:"Guest Favorite",


},
{   
    id:3,
    name:"Flat in Bangalore Urban",
    rate:"$7,384 for 2 nights.*4.95",
    image:card3,
    guest:"Guest Favorite",


},
{   
    id:4,
    name:"Flat in Haralur",
    rate:"$5,478 for 2 nights.*4.88",
    image:card4,
    guest:"Guest Favorite",


},
{   
    id:5,
    name:"Flat in Bangalore Urban",
    rate:"$7,076 for 2 nights.*4.92",
    image:card5,
    guest:"Guest Favorite",


},
{   
    id:6,
    name:"Flat in Bangalore Urban",
    rate:"$5,044 for 2 nights.*5.0",
    image:card6,
    guest:"Guest Favorite",


},
{   
    id:7,
    name:"Loft in Bangalore Urban",
    rate:"$8,331 for 2 nights.*5.0",
    image:card7,
    guest:"Guest Favorite",


},
];
const Card1 = () => {
    const navigateCard=useNavigate();
    function cardClick(data){
        navigateCard(`Product Details/${data}`)
    }

  return (
   <>
   <div className="main-card-container w-[90%] m-auto">
    <h1 className='font-semibold text-[20px] '>Popular homes in Bengaluru</h1>

<div className="card-container grid grid-cols-7 items-center gap-2">
    {carddata1.map((item,index)=>{
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

export default Card1
