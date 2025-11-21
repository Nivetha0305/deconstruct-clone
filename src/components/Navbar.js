import React from 'react'
import image from '../assets/logo.webp'
import logo from '../assets/search.png'
import login from '../assets/login.png'
import cart from '../assets/shopping-cart.png'
import { useNavigate } from 'react-router-dom'
export default function () {
    
    const navigate=useNavigate()
  return (
      <div>
        <div className='w-full px-8 py-1 border border-b-gray-200 '> 
                  
                    <div className='flex justify-between items-center '>
                    <img
                    
                    src={image}
                    className="w-44 h-28 object-contain "
            alt="logo"
          />
                    
                       <div className={'flex items-center  space-x-16  font-display text-md uppercase mr-28 '}>
                            <p onClick={() => navigate('/shop')} className="cursor-pointer">shop</p>
                            <p onClick={() => navigate('/bestsellers')} className="cursor-pointer">bestsellers</p>
                            <p onClick={() => navigate('/offers')} className="cursor-pointer">offers</p>
                            <p onClick={() => navigate('/blog')} className="cursor-pointer">blogs</p>
                             <p onClick={() => navigate('/track')} className="cursor-pointer">track your  order</p>
                        </div>
                        <div className='flex justify-end space-x-6'>
                            <img src={logo} className='h-8 w-7  object-contain cursor-pointer ' />
                            <img src={login} className='h-8 w-7  object-contain cursor-pointer' /> 
                            <img src={cart} className='h-8 w-7  object-contain cursor-pointer' />
                        </div>
        
                
                       </div>
                       
                       
                   </div>
          
    </div>
  )
}
