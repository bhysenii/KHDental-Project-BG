import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'

const CustomerCard = ({ title, name, position, img }) => {
    return (
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card' >
            <RiDoubleQuotesR className='w-[48px] h-[48px] object-contain text-white' />
            <p className='font-normal text-[18px] leading-[32.4px] text-white my-10'>{title}</p>
            <div className="flex flex-row ml-4">
                <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
                <div className="flex flex-col  ml-4 ">
                    <h3 className=' font-semibold text-[20px] leading-[32px] my-2 text-white'>{name}</h3>
                    <p className='text-[16px] font-bold leading-[24px] text-gray-900'>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard