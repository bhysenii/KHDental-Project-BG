import React, { useState } from 'react'
import { navLinks } from '../../data/navbarData'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../img/logo-url.png'
import './navbar.scss'
import { CiLocationOn, CiClock2 } from 'react-icons/ci'
import { FcContacts } from 'react-icons/fc'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [active, setActive] = useState("Home");



    return (
        <>
            <div className="top">
                <div className="container">
                    <img src={logo} alt="" />
                    <div className="item">
                        <CiLocationOn color='orange' size={30} />
                        <span>24, Lane Street</span>
                        <span>New Yourk, USA</span>
                    </div>
                    <hr />
                    <div className="item">
                        <CiClock2 size={30} color='orange' />
                        <span>9am- 7pm</span>
                        <span>Mon - Sat</span>

                    </div>
                    <hr />
                    <div className="item-company">
                        <FcContacts color='orange' size={30} />
                        <span>info@company.com</span>
                        <span>+021-2465-543</span>
                    </div>
                    <div className="item">
                        <input type="text" placeholder='Search' />
                    </div>

                </div>
            </div>

            {/* <div className="sm:hidden flex flex-1 justify-end items-center">
                            <span onClick={() => setNav((prev) => !prev)} >{nav ? <AiOutlineClose color='white' size={29} /> : <HiOutlineMenuAlt1 color='white' size={29} />} </span>
                            <div className={`${nav ? 'flex' : 'hidden'} p-24 bg-black-gradient absolute top-60 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                                <nav>
                                    <ul className='list-none flex justify-end items-center flex-1 flex-col '>
                                        {navLinks.map((val, index) => (
                                            <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-6'} text-white mr-10 items-center`}>
                                                <Link to={val.path}>{val.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div> */}


            <div className="navbar ">
                <div className="container">
                    <nav>
                        <ul>
                            {navLinks.map((val, index) => (
                                <li key={index} onClick={() => setActive(val.text)}>
                                    <Link to={val.path}>{val.text}</Link>
                                </li>

                            ))}
                        </ul>

                    </nav>
                    <div className="container-responsive sm:hidden">
                        <span onClick={() => setNav((prev) => !prev)} >{nav ? <AiOutlineClose color='white' size={29} /> : <HiOutlineMenuAlt1 color='white' size={29} />} </span>
                        <ul className={nav ? 'ul' : 'hidden'} >
                            {navLinks.map((val, index) => (
                                <li key={index} onClick={() => setActive(val.text)}>
                                    <Link to={val.path}>{val.text}</Link>
                                    <hr />
                                </li>

                            ))}
                        </ul>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Navbar