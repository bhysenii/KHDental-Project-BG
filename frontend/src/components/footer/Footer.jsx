import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className='w-full  bg-black text-white px-2 py-2'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 grid-cols-2 border-b-2 border-gray py-8">
                <div className="">
                    <h5 className='font-semibold uppercase pt-4'>Solutions</h5>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analystics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div className="">
                    <h5 className='font-semibold uppercase pt-4'>Solutions</h5>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analystics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div className="">
                    <h5 className='font-semibold uppercase pt-4'>Solutions</h5>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analystics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div className="">
                    <h5 className='font-semibold uppercase pt-4'>Solutions</h5>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analystics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div className="mt-4 col-span-2 pt-9 md:pt-2">
                    <p className='uppercase font-semibold'>Subscribe to our newsletter</p>
                    <p className='pt-4'>The latest news articles and resources</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" placeholder='Type your email' className='w-full mr-4 mb-4 p-2 rounded-lg' />
                        <button className='p-2 mb-4 bg-slate-600 rounded-lg '>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className=' items-center text-center mt-4'>
                <p>Copyright © Develop by BH 2022.</p>
                <div className="flex items-center gap-2 justify-center text-center">
                    <AiOutlineFacebook size={25} />
                    <AiOutlineInstagram size={25} />
                    <AiOutlineLinkedin size={25} />
                    <AiOutlineTwitter size={25} />
                </div>
            </div>
        </div>
    )
}

export default Footer