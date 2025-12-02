import React from 'react'
import image from '../assets/footerlogo.avif'
import logo from '../assets/facebook.png'
import insta from '../assets/instagram (1).png'
import linked from '../assets/linkedin (1).png'
import youtube from '../assets/youtube (1).png'
import email from '../assets/envelope.png'
import phone from '../assets/phone.png'

import pin from '../assets/addresspin.png'
export default function Footer() {
    return (
        <div>
            <div className='bg-black  '>
                <div className='flex flex-col md:flex-row text-center  gap-10 px-10 py-20 '>
                    <div className='md:w-1/5 w-full flex flex-col md:flex-row items-center md:items-start'>
                        <img src={image} className=' w-44 h-28 object-contain cursor-pointer' />
                        <p className='text-white font-display'>Deconstruct offers a wide range of Beginner-friendly highly effective yet gentle skincare products.</p>
                    </div>
                    <ul className="text-center md:w-1/5 w-full space-y-2 text-white font-display">
                        <li className='pb-10 cursor-pointer md:text-lg text-xl'>About</li>
                        <li className='cursor-pointer'>Contact</li>
                        <li className='cursor-pointer'>Our Philosophy</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Terms and Conditions</li>
                        <li className='cursor-pointer'>Shipping & Return Policy</li>
                        <li className='cursor-pointer'>Careers</li>
                    </ul>


                    <ul className='text-center md:w-1/5  w-full space-y-2 text-white font-display'>
                        <li className='pb-10 cursor-pointer'>Also Available On</li>
                        <li className='cursor-pointer'>  Amazon</li>
                        <li className='cursor-pointer'>  Flipkart</li>
                        <li className='cursor-pointer'>   Nykaa</li>
                        <li className='cursor-pointer'>   Myntra</li>
                        <li className='cursor-pointer'>   Purplle</li>
                        <li className='cursor-pointer'>   Blinkit</li>
                        <li className='cursor-pointer'>   Zepto</li>
                        <li className='cursor-pointer'>   Instamart</li>
                    </ul>
                    <ul className='text-center md:w-1/5 w-full space-y-2 text-white font-display'>
                        <li className='pb-10 cursor-pointer'>Quick Links</li>
                        <li className='cursor-pointer'>My Account</li>
                        <li className='cursor-pointer'>Track Your Order</li>
                        <li className='cursor-pointer'>Our Ingredients</li>
                        <li className='cursor-pointer'>Blogs</li>
                    </ul>


                    <div className='text-white md:w-1/5 w-full space-y-2 text-center font-display'>
                        <p className='pb-5 cursor-pointer'>GET IN TOUCH</p>
                        <div className='flex justify-center space-x-6 pb-8 '>
                            <img src={logo} className='invert brightness-200 h-4 w-7 object-contain cursor-pointer' />
                            <img src={insta} className='invert brightness-200 h-4 w-7 object-contain cursor-pointer' />
                            <img src={linked} className='invert brightness-200 h-4 w-7 object-contain cursor-pointer' />
                            <img src={youtube} className='invert brightness-200 h-4 w-7 object-contain cursor-pointer' />



                        </div>
                        <p className=' cursor-pointer'>Address</p>
                        <div className='flex justify-around pb-8' >
                            <img src={pin} className='invert brightness-200 h-6 w-7 object-contain cursor-pointer' />
                            <p className='cursor-pointer'>581, 2nd Floor, 1st Main, 6th Sector, HSR Layout, Bengaluru, Karnataka - 560102</p>

                        </div>
                        <p className=''>Email</p>
                        <div className='flex justify-around pb-4'>
                            <img src={email} className='invert brightness-200 h-5 w-7 object-contain cursor-pointer' />

                            <p className='cursor-pointer'> wecare@thedeconstruct.in</p>
                        </div>

                        <p className=''>Phone</p>
                        <div className='flex justify-around pb-8'>
                            <img src={phone} className='invert brightness-200 h-5 w-7 object-contain cursor-pointer' />

                            <p className='cursor-pointer'> 080-471-05772
                                (Monday - Sunday 10am - 7pm)</p>
                        </div>

                    </div>

               </div>
            
                <div className='text-white py-5 px-10 border-t-white border-t flex justify-between w-full'>
                    <p className='cursor-pointer'>© The Deconstruct 2025. All rights Reserved.</p>
                    <p className='text-lg cursor-pointer'>    GST NO: 29AAICB9825H1Z8</p>
            </div>
            
            
            </div>

        </div>
    )
}
