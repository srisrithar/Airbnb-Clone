import React, { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import card1 from '../assets/card-1/card1.avif'
import card2 from '../assets/card-1/card2.avif'
import card3 from '../assets/card-1/card3.avif'
import card4 from '../assets/card-1/card4.avif'
import card5 from '../assets/card-1/card5.avif'
import card6 from '../assets/card-1/card6.avif'
import card7 from '../assets/card-1/card7.avif'
import card1_1 from '../assets/card-1/card1-1.avif'
import card1_2 from '../assets/card-1/card1-2.avif'
import card1_3 from '../assets/card-1/card1-3.avif'
import card1_4 from '../assets/card-1/card1-4.avif'
import sri from '../assets/sri.jpg'



import card8 from '../assets/card-2/card8.avif'
import card8_1 from '../assets/card-2/card8-1.avif'
import card8_2 from '../assets/card-2/card8-2.avif'
import card8_3 from '../assets/card-2/card8-3.avif'
import card8_4 from '../assets/card-2/card8-4.avif'
import card9 from '../assets/card-2/card9.avif'
import card9_1 from '../assets/card-2/card9-1.avif'
import card9_2 from '../assets/card-2/card9-2.avif'
import card9_3 from '../assets/card-2/card9-3.avif'
import card9_4 from '../assets/card-2/card9-4.avif'
import card10 from '../assets/card-2/card10.avif'
import card10_1 from '../assets/card-2/card10-1.avif'
import card10_2 from '../assets/card-2/card10-2.avif'
import card10_3 from '../assets/card-2/card10-3.avif'
import card10_4 from '../assets/card-2/card10-4.avif'
import card11 from '../assets/card-2/card11.avif'
import card11_1 from '../assets/card-2/card11-1.avif'
import card11_2 from '../assets/card-2/card11-2.avif'
import card11_3 from '../assets/card-2/card11-3.avif'
import card11_4 from '../assets/card-2/card11-4.avif'
import card12 from '../assets/card-2/card12.avif'
import card12_1 from '../assets/card-2/card12-1.avif'
import card12_2 from '../assets/card-2/card12-2.avif'
import card12_3 from '../assets/card-2/card12-3.avif'
import card12_4 from '../assets/card-2/card12-4.avif'
import card13 from '../assets/card-2/card13.avif'
import card13_1 from '../assets/card-2/card13-1.avif'
import card13_2 from '../assets/card-2/card13-2.avif'
import card13_3 from '../assets/card-2/card13-3.avif'
import card13_4 from '../assets/card-2/card13-4.avif'
import card14 from '../assets/card-2/card14.avif'
import card14_1 from '../assets/card-2/card14-1.avif'
import card14_2 from '../assets/card-2/card14-2.avif'
import card14_3 from '../assets/card-2/card14-3.avif'
import card14_4 from '../assets/card-2/card14-4.avif'




const carddatas = [

    {
        id: 1,
        name: "Flat in Bangalore Urban",
        rate: "$5,478 for 2 nights.*5.0",
        image: card1,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,




    },
    {
        id: 2,
        name: "Flat in Bangalore Urban",
        rate: "$6,391 for 2 nights.4.89",
        image: card2,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,




    },
    {
        id: 3,
        name: "Flat in Bangalore Urban",
        rate: "$7,384 for 2 nights.*4.95",
        image: card3,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        image1: card1_1,
        image2: card1_2,
        image3: card1_3,
        image4: card1_4,
        circle: sri,




    },
    {
        id: 4,
        name: "Flat in Haralur",
        rate: "$5,478 for 2 nights.*4.88",
        image: card4,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,





    },
    {
        id: 5,
        name: "Flat in Bangalore Urban",
        rate: "$7,076 for 2 nights.*4.92",
        image: card5,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,




    },
    {
        id: 6,
        name: "Flat in Bangalore Urban",
        rate: "$5,044 for 2 nights.*5.0",
        image: card6,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,




    },
    {
        id: 7,
        name: "Loft in Bangalore Urban",
        rate: "$8,331 for 2 nights.*5.0",
        image: card7,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,




    },
    {
        id: 8,
        name: "Apartment in Chennai",
        rate: "$6,117 for 2 nights.*4.8",
        image: card8,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card8_1,
        image2: card8_2,
        image3: card8_3,
        image4: card8_4,

    },
    {
        id: 9,
        name: "Shared room in Shenoy Nagar",
        rate: "$1,900 for 2 nights.4.78",
        image: card9,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card9_1,
        image2: card9_2,
        image3: card9_3,
        image4: card9_4,

    },
    {
        id: 10,
        name: "Home in Ramapuram",
        rate: "$6,277 for 2 nights.*4.8",
        image: card10,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card10_1,
        image2: card10_2,
        image3: card10_3,
        image4: card10_4,

    },
    {
        id: 11,
        name: "Shared room in Royapettah",
        rate: "$1,339 for 2 nights.*5.0",
        image: card11,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card11_1,
        image2: card11_2,
        image3: card11_3,
        image4: card11_4,

    },
    {
        id: 12,
        name: "Room in Vadapalani",
        rate: "$4,645 for 2 nights.*5.0",
        image: card12,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card12_1,
        image2: card12_2,
        image3: card12_3,
        image4: card12_4,

    },
    {
        id: 13,
        name: "Appart in Shenoy Nagar",
        rate: "$8,532 for 2 nights.*4.88",
        image: card13,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card13_1,
        image2: card13_2,
        image3: card13_3,
        image4: card13_4,

    },
    {
        id: 14,
        name: "Flat in Nazarethpettai",
        rate: "$11,367 for 2 nights.*5.0",
        image: card14,
        guest: "Guest Favorite",
        tittle: "Independent Luxurious Penthouse with AC",
        circle: sri,
        image1: card14_1,
        image2: card14_2,
        image3: card14_3,
        image4: card14_4,

    },
];


const RequestBook = ({ fidata }) => {
    const { id } = useParams();
    const filteredCard = carddatas.filter((item) => item.id == id);

    const [showFloat, setFloat] = useState(false);
    const [showContinue, setContinueAlert] = useState(false);
    const [showname, setName] = useState("");
    const [isPhonenumber, setPhonenumber] = useState(false);
    const navigateContinue = useNavigate();





    const inputRef = useRef(null);

    // when input clicked
    function handlefloat() {
        setFloat(true);
    }

    // when input blur (click outside)
    function handleBlur() {
        if (phone === "") {
            setFloat(false);
        }
    }

    // phone input click

    // continue button click
    function handleContinue() {
        if (showname === "") {
            setContinueAlert(true);
            inputRef.current.focus();
            setPhonenumber(true);
            return;
        } else {


        }


        if (showname.length === 10) {
            // alert("Phone number is valid. Proceeding...");
            navigateContinue(`/continue`)

            return;
        } else {
            alert("Please enter a valid 10-digit phone number.");
        }

    }
    return (
        <>

            <div className="navbar shadow-xl p-10">
                <div className="icon ">
                    <h1 className='text-3xl text-[#FF4667] font-medium'>airbnb</h1>
                </div>
            </div>
            <div className="Main-container w-[73%] m-auto flex justify-between mt-4">
                <div className="Left-side  w-[50%] ">

                    <div className="Tittle">
                        <h1 className='text-4xl font-medium '>Request to book</h1>
                    </div>
                    <div className="card-container leading-loose shadow mt-10">
                        <h1 className='text-sm font-medium mt-5'>This place is no longer available</h1>
                        <p className='text-gray-500 text-sm w-[400px] '>Edit your dates to get updated pricing or search for another place to stay.</p>
                        <Link>
                            <p className='underline text-base '>Edit dates</p>
                        </Link>
                    </div>

                    <div className="Your-trip pb-10 py-3" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <div className="heading">
                            <p className='font-medium text-2xl'>Your trip</p>
                        </div>

                        <div className="Enter-chckin-date flex justify-between  items-center mt-3">
                            <div className="dates">
                                <p className='font-medium'>Dates</p>
                                <p>Show Date</p>
                            </div>
                            <Link><p className='underline font-medium'>Edit</p></Link>
                        </div>


                        <div className="Enter-Guest flex justify-between  items-center mt-3">
                            <div className="dates">
                                <p className='font-medium'>Guest</p>
                                <p> Guest count</p>
                            </div>
                            <Link><p className='underline font-medium'>Edit</p></Link>
                        </div>
                        {/* <button className='bg-[#E41E57] text-white text-base font-medium py-4 px-6 mt-5 rounded-md'>Sign up to book</button>

                        <div className="login flex mt-4 text-base">
                            <p>Already have an account?</p>
                            <Link><p className='underline font-medium text-base'>Login</p></Link>
                        </div> */}
                    </div>
                    <div className="login-page mt-10">
                        <h1 className='font-medium text-xl'>Log in or sign up to book</h1>
                        <div className="main-container mt-4 ">
                            <div className="country border border-b-0 rounded-md  flex justify-between items-center p-2">
                                <div className="region ">
                                    <h5 className='text-gray-400 text-sm'>Country/Region</h5>
                                    <h2>India(+91)</h2>
                                </div>
                                <div className="down-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </div>

                            </div>
                            <div className={`phonenumber relative `}>
                                {showFloat ? <div className="parent">
                                    <label className='absolute top-1 left-1 text-sm text-red-600 px-1 '>Phonenumber</label>
                                    <div className='absolute left-2 top-7 text-sm text-black '>+91</div>

                                </div> : ""}
                                <input ref={inputRef} onChange={(eventHappen) => { setName(eventHappen.target.value) }} type="number" placeholder={showFloat ? "" : "Enter your Number"}
                                    className={`focus:border-2 focus:border-red-700 border outline-none w-full py-5 px-2 ${showContinue ? "border-2" : ""} rounded-md`} onClick={handlefloat} onBlur={handleBlur} />

                            </div>
                            {/* {showContinue ? (
                               

                            ) : <div className="phonenumber border border-t-0 relative">
                                <input onChange={(eventHappen) => { setName(eventHappen.target.value) }} type="number" placeholder={showFloat ? '' : 'Phonenumber'} className=' w-full py-5 px-2 rounded-md border-3 bg-amber-300' onClick={handlefloat} />
                                {showFloat && (
                                    <div className="parent">
                                        <label className='absolute top-1 left-1 text-sm text-blue-600 px-1 border'>Phonenumber</label>
                                        <div className='absolute left-2 top-7 text-sm text-black'>+91</div>

                                    </div>

                                )}

                            </div>} */}

                        </div>
                        {/* {showContinue ? (
                            <h1 className='text-red-500'>Phone number is required</h1>
                        ) : (
                            <h4 className='text-[12px] mt-1'>
                                We’ll call or text you to confirm your number. Standard message and data rates apply.
                                <Link><span className='underline font-medium'>Privacy Policy</span></Link>

                            </h4>
                        )}
 */}

                        {showContinue ?
                            <p className='text-red-500'>
                                Phone number is required
                            </p> :
                            <p>
                                We’ll call or text you to confirm your number. Standard message and data rates apply.

                            </p>
                        }


                        <button onClick={handleContinue} className='bg-gradient-to-r from-pink-600 via-red-500 to-pink-500 text-white py-3 px-6 rounded-lg w-full text-center font-medium mt-3'>Continue</button>



                        <div className="line flex justify-between gap-2 items-center mt-3 px-2">
                            <div className="left border-b-1 w-full border-gray-400"></div>
                            <p className='text-sm'>or</p>
                            <div className="right border-b-1 w-full border-gray-400"></div>
                        </div>
                        <div className="icons flex justify-between mt-3">
                            <div className="fb border px-19 py-5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg></div>
                            <div className="google border px-19 py-5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg></div>
                            <div className="apple border px-19 py-5 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                            </svg></div>
                        </div>
                        <div className="continue-mail mt-3 ">
                            <button className='continue-mail flex w-full border justify-center items-center px-6 py-3 rounded-lg hover:bg-[#F7F7F7]'>
                                <p className='translate-x-[-180px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>
                                </p>
                                <p>Continue with email</p>
                            </button>

                        </div>

                    </div>




                </div>



                <div className="Rigt-side shadow py-5 h-[450px]">
                    <div className="card-container p-2">
                        <div className="header flex  items-center gap-3 bottom-1 border-b-1 py-2 border-gray-500">
                            <div className="picture border h-[100px] w-[100px] rounded-lg overflow-hidden">
                                <img src={filteredCard[0].image} className='h-full w-full object-cover' />
                            </div>
                            <div className='right'>  <p className='font-medium text-base'>
                                Cosy Studio Apartment 8 @ Hole in the Wall Cafe
                            </p>
                                <p className='text-sm'>Entire rental unit</p>
                            </div>
                        </div>
                        <p className='mt-5 py-22 m-auto  text-center w-[300px] '>
                            It looks like someone else has just requested a reservation for the same dates. If you’re set on this place, change your trip dates and try again.
                        </p>
                    </div>

                </div>

            </div >

            <div className="footer w-[90%] m-auto mt-70">
                <div className="foot-footer flex  justify-between mt-10 pb-5 items-center">
                    <div className="left flex items-center justify-between w-[40%]">
                        <p>© 2025 Airbnb, Inc.</p>
                        <Link><p className='hover:underline'>. Privacy</p></Link>
                        <Link><p className='hover:underline'>. Terms</p></Link>
                        <Link><p className='hover:underline'>. Sitemap</p></Link>
                        <Link><p className='hover:underline'>. Company details</p></Link>

                    </div>
                    <div className="right flex justify-between items-center translate-x-1 gap-3">
                        <Link><p className='earth-icon flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg><span className='font-medium'>English (IN)</span></p></Link>

                        <Link><p className='currency-icon flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                        </svg><span className='font-medium'>INR</span></p></Link>

                        <Link><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></p></Link>
                        <Link><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></p></Link>
                        <Link><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg></p></Link>
                    </div>
                </div>

            </div>

        </>
    )
}


export default RequestBook
