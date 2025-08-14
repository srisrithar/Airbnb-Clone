import React from 'react'
import home from '../assets/home.png'
import bell from '../assets/call bell.jpeg'
import ballon from '../assets/hot ballon.webp'




import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
            <div className="main-container  bg-[#FBFBFB] py-3">

                <div className="container flex items-center justify-around mt-3">
                    <div className="icon ">
                        <h1 className='text-3xl text-[#FF4667] font-medium translate-x-[-70px]'>airbnb</h1>
                    </div>
                    <div className="3-link flex gap-10 ml-10">
                        <div className="home">
                            <Link to="/">
                                <h1 className='flex items-center gap-2 '>
                                    <img src={home} className="w-[40px] transition-all ease-linear duration-300 hover:scale-120 " />
                                    Homes </h1><p className='border-b-3 mt-2'></p>
                            </Link>
                        </div>
                        <Link to="/Experience"><h1 className='flex items-center gap-2'><img src={ballon} className="w-[40px] transition-all ease-linear duration-300 hover:scale-120" />Experiences</h1></Link>
                        <Link to="/Services"><h1 className='flex gap-2 items-center'><img src={bell} className="w-[40px] transition-all ease-linear duration-300 hover:scale-120" />Services</h1></Link>
                    </div>
                    <div className="icons flex gap-8  mr-[-100px] items-center">
                        <h1 className='font-semibold'>Become a host</h1>
                        <div className="earth p-2 rounded-full bg-gray-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                        </div>
                        <div className="list p-2 rounded-full bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>
                    </div>


                </div>


                <div className="secon-search-bar  flex m-auto w-fit mt-15 gap-3 bg-[#FFFFFF] p- rounded-full">
                    <div className="search-bar flex gap-3  hover:bg-[#EBEBEB] rounded-full items-center py-2">
                        <div className="where text-[12px] px-2">
                            <p>Where</p>
                            <input type="text" placeholder='Search destinations' className='outline-0 text-[14px]' />
                        </div>
                        <p className='border-r-2 border-gray-300 h-10 ml-8'></p>
                    </div>

                    <div className="search-bar flex justify-evenly  hover:bg-[#EBEBEB] rounded-full items-center">
                        <div className="check-in text-[12px] px-1 w-fit">
                            <p>Check in</p>
                            <input type="text" placeholder='Add dates' className='outline-0 text-[14px]' />
                        </div>
                        <p className='border-r-2 border-gray-300 h-10'></p>
                    </div>


                    <div className="search-bar flex gap-3  hover:bg-[#EBEBEB] rounded-full items-center">
                        <div className="check-out text-[12px]">
                            <p>Check out</p>
                            <input type="text" placeholder='Add dates' className='outline-0 text-[14px]' />
                        </div>
                        <p className='border-r-2 border-gray-300 h-10'></p>
                    </div>

                    <div className="search-bar flex gap-3  hover:bg-[#EBEBEB] rounded-full items-center px-1">
                        <div className="who text-[12px]">
                            <p>Who</p>
                            <input type="text" placeholder='Add guests' className='outline-0 text-[14px]' />
                        </div>
                        <p className='bg-[#E41D56] rounded-full items-center p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Navbar
