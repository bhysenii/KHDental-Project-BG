import React, { useEffect } from 'react'
import { featured } from '../../data/aboutUs'
import { BsArrowRight } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './featured.scss'

const Featured = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    const { aboutUs } = featured;

    const { header, title, subtitle, btnLink, Icon, image } = aboutUs

    return (
        <section className='featured' >
            <div className="container">


                <div className="left" >
                    <img src={image} alt="img" />
                </div>
                <div className="right" >
                    <div className='top'>{header}</div>
                    <h1 className=''>{title}</h1>
                    <p className=''>{subtitle}</p>
                    <button className='border-solid border-b-2 	 border-red-500  text-accent text-xl lg:text-1xl flex items-center gap-x-4 transition-all text-red-600'>{btnLink} <BsArrowRight />  </button>
                </div>

            </div>
        </section>
    )
}

export default Featured