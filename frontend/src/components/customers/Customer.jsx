import React from 'react'
import { customer } from '../../data/customer'
import CustomerCard from './CustomerCard'


const Customer = () => {
    return (
        <section className='bg-gray sm:py-16 md:p-20 py-6 flex justify-center items-center flex-col relative'>

            <div className="w-full justify-between flex items-center md:flex-row flex-col sm:mb-16 mb-7 relative z-[1]">
                <h1 className='text-center font-semibold xs:text-[47px] text-[40px] text-white w-full'>What people are saying about us</h1>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full mr-0 relative z-[1]">
                {customer.map((customer) => (
                    <CustomerCard key={customer.id} {...customer} />
                ))}
            </div>
        </section >
    )
}

export default Customer