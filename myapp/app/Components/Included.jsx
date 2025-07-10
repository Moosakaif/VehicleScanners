import React from 'react'
import { font } from './font/font'

const Included = () => {
  return (
    <div id='services' className={`${font.className} bg-white flex flex-col p-8 md:p-20 justify-center items-center text-black`}>
        <h1 className='font-bold text-4xl'>Discover What's Included in Your Vehicle Record</h1>
        <div className='flex md:flex-row flex-col  md:space-y-0 space-y-6 md:space-x-6 justify-center items-center'>
            <div className='flex flex-col justify-center h-[33rem] mt-8 bg-white md:w-[30%] p-8 rounded-md shadow-md hover:shadow-2xl duration-300 shadow-black items-center'>
                <img src='/comprehension.png' className='w-20 h-20'/>
                <h2 className='text-2xl mt-4 text-center'>Vehicle Insight & History</h2>
                <p className='mt-4 text-center'>Discover the full story of your vehicle with a comprehensive VIN Check report. Get detailed information about the car’s specifications, including its make, model, year, body style, color, and country of assembly. Dive into its history with records on odometer readings, smog checks, fuel type, and engine size.</p>
            </div>
            <div className='flex flex-col justify-center h-[33rem] mt-8 bg-white md:w-[30%] p-8 rounded-md shadow-md shadow-black hover:shadow-2xl duration-300 items-center'>
                <img src='/market.png' className='w-20 h-20'/>
                <h2 className='text-2xl mt-4 text-center'>Accident & Repair Records</h2>
                <p className='mt-4 text-center'>Uncover the past of any vehicle with our VIN lookup tool. Access detailed reports on accidents, major repairs, and service history. Stay informed with data on manufacturer recalls, lien records, salvage information, and more, ensuring you're aware of any potential red flags.</p>
            </div>
            <div className='flex flex-col justify-center h-[33rem] mt-8 bg-white md:w-[30%] p-8 rounded-md shadow-md shadow-black hover:shadow-2xl duration-300 items-center'>
                <img src='/fraud-alert.png' className='w-20 h-20'/>
                <h2 className='text-2xl mt-4 text-center'>Ownership & Fraud Protection</h2>
                <p className='mt-4 text-center'>Safeguard your investment with a deep dive into the vehicle’s title records and ownership history. Learn about previous owners, registration details, mileage records, and any branded title alerts. Plus, ensure peace of mind with advanced theft and fraud detection checks, providing security against stolen vehicles and fraudulent activities.</p>
            </div>
        </div>
    </div>
  )
}

export default Included