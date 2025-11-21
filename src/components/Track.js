import React from 'react'

export default function Track() {
    return (
        <div className="flex justify-center py-10">
            <div className='border mx-10 px-10 py-16 w-[600px] shadow-md rounded-xl'>

                <p className='text-center text-2xl font-semibold mb-10'>
                    Track Your Order
                    <br />
                    <span className='text-gray-600 text-base font-normal'>
                        Enter your order details to track your order
                    </span>
                </p>

                {/* Order ID */}
                <label className='capitalize font-medium'>Order ID</label>
                <input
                    type="text"
                    className='border border-zinc-400 rounded-lg h-10 w-full px-3 mt-1'
                    placeholder="Enter your Order ID"
                />

                {/* Mobile Number */}
                <label className='capitalize font-medium mt-6 block'>Mobile Number</label>
                <input
                    type="text"
                    className='border border-zinc-400 rounded-lg h-10 w-full px-3 mt-1'
                    placeholder="Enter your mobile number"
                />

                {/* Button */}
                <button className='bg-black text-white rounded-lg w-full h-12 mt-8 hover:bg-gray-900 transition'>
                    Track Your Order
                </button>

            </div>
        </div>
    )
}
