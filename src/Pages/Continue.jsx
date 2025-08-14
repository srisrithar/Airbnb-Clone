import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Continue = () => {
    const [number, setNumber] = useState(false);

     const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState("");

    const [firstName, setfName] = useState(false);
    const [lastName, setlName] = useState(false);
    const [dateofbirth, setBirth] = useState("");
    const [showLabel, setLabel] = useState(false);
   
     function handlefloat2() {
        setNumber(true);
    }
    // when input blur (click outside)
    function handleBlur2() {
        if (phone === "") {
            setNumber(false);
        }
    }


    function handlefloat3() {

        setEmail(true);
    }
    function handleBlur3(e) {
        if (e.target.value === "") {

            setEmail("");
        }
    }

    function handlefloat4() {

        setfName(true);
    }
    function handleBlur4(e) {
        if (e.target.value === "") {

            setfName("");
        }
    }

    function handlefloat5() {

        setlName(true);
    }
    function handleBlur5(e) {
        if (e.target.value === "") {

            setlName("");
        }
    }

    function handlefloat6() {

        setLabel(true);
    }
    function handleBlur6(e) {
        if (e.target.value === "") {

            setLabel(false);
        }
    }
  return (
   <>
   
    <div className="your-details w-[90%] m-auto pb-5  mt-5">

                                <h1 className='font-medium'>Your details</h1>
                                <div className="container relative py-5">
                                    <div className={`parent-of-number flex items-center border  px-2  rounded-md focus-within:border-amber-500 bg-[#F7F7F7]`}>
                                        {number && (
                                            <p className='translate-x-2 mt-1'>+91</p>

                                        )}
                                        <input type="number" onClick={handlefloat2} onBlur={handleBlur2} value={phone} placeholder={number ? "" : 'Enter Number'} onChange={(e) => { setPhone(e.target.value) }} className='text-sm py-4 px-3  rounded-md w-full mt-1 outline-none ' />

                                    </div>
                                    <div className="parent">
                                        {number && (
                                            <label className={`absolute top-5 text-sm left-1`}>Phone number</label>

                                        )}
                                    </div>

                                </div>

                                <div className="have-account mt-2">
                                    <h1>Already have an account? <Link to={"/Experiences"}><span className='underline'>Login</span></Link></h1>
                                </div>
                                <div className="contact-info mt-3">
                                    <h1 className='font-medium'>Contact info</h1>
                                    <div className="parent-of-input border mt-2 relative">

                                        <h5 className={`font-medium text-[13px] left-4 ${email ? 'animate-zoom-up' : 'animate-float-down'}`}>Email</h5>
                                        <input type="text" placeholder='Email' className='boreder border-gray-800 py-5 w-full px-4 outline-none' onClick={handlefloat3} onBlur={handleBlur3} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <p className='text-[#6A6A6A] text-[12px] mt-1'> Email We'll email you trip confirmations and receipts.</p>
                                </div>

                                <h1 className='font-medium'>Legal name</h1>
                                <div className="legal-name">
                                    <div className="parent-of-input border mt-2 relative">

                                        <h5 className={`font-medium text-[10px] left-4 ${firstName ? 'animate-zoom-up2' : 'animate-float-down2'}`}>First name on ID</h5>
                                        <input type="text" placeholder='First name on ID' className='boreder border-gray-800 py-5 w-full px-4 outline-none' onClick={handlefloat4} onBlur={handleBlur4} onChange={(e) => setfName(e.target.value)} />
                                    </div>

                                    <div className="parent-of-input border mt-2 relative">

                                        <h5 className={`font-medium text-[10px] left-4 ${lastName ? 'animate-zoom-up3' : 'animate-float-down3'}`}>Last name on ID</h5>
                                        <input type="text" placeholder='Last name on ID' className='boreder border-gray-800 py-5 w-full px-4 outline-none' onClick={handlefloat5} onBlur={handleBlur5} onChange={(e) => setlName(e.target.value)} />
                                    </div>
                                </div>
                                <h1 className='text-[#6A6A6A] text-[12px] mt-1'>Make sure this matches the name on your government ID. If you go by another name, you can add a preferred first name.</h1>
                                <h1>Date of birth</h1>

                                <div className="date border relative">
                                    {showLabel && (
                                        <div className="parent relative">
                                            <p className={`font-medium text-[10px] left-4 absolute top-2`}>Date of birth</p>
                                            <input type="date" value={dateofbirth} onChange={(e) => setBirth(e.target.value)} className='left-4 absolute top-7 w-[97%] outline-none border h-auto ' />
                                        </div>

                                    )}

                                    <input type="text" value={dateofbirth} placeholder={showLabel ? " " : "Date of birth "} className='w-full py-5 px-4 outline-none' onClick={handlefloat6} onBlur={handleBlur6} onChange={(e) => setBirth(e.target.value)} />

                                </div>
                                <h1 className='text-[#6A6A6A] text-[12px] mt-1'>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</h1>

                                <button className='bg-gradient-to-r from-[#d50364] to-[#d50563] text-white font-medium py-3 px-6 rounded-lg w-full mt-2 '>Agree and continue</button>
                            </div>
                       
   </>
  )
}

export default Continue
