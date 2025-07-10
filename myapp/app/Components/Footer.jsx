import React from 'react'
import { font } from './font/font'

const Footer = () => {
  return (
    <div className={`${font.className} bg-black px-20 pb-8 pt-12 w-full`}>
        <div className='text-gray-100 flex md:flex-row flex-col space-x-4'>
            <p className='cursor-pointer hover:text-gray-500'>Privacy</p>
            <p className='cursor-pointer hover:text-gray-500'>Terms & Conditions</p>
            <p className='cursor-pointer hover:text-gray-500'>Security</p>
            <p className='cursor-pointer hover:text-gray-500'>Remove Your Data</p>
            <p className='cursor-pointer hover:text-gray-500'>Refund Policy</p>
        </div>
        <hr className='border-2 border-gray-500 w-full mt-8'/>
        <p className='text-center text-gray-300 mt-8'>© 2024 Vehicle Scanner. All Rights Reserved. </p>
    </div>
  )
}

export default Footer