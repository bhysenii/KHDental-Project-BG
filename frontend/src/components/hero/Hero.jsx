import React from 'react'
import { about } from '../../data/aboutUs'
import { BsArrowRight } from 'react-icons/bs'
import './hero.scss'

const Hero = () => {

    const { aboutUs } = about;

    const { header, title, subtitle, btnLink, Icon, image } = aboutUs

    return (
        <section className='hero'>
            <div className="container">
                <div className="left">

                    <div className='top'>{header}</div>
                    <h1 >{title}</h1>
                    <p >{subtitle}</p>
                    <button>{btnLink} <BsArrowRight />  </button>
                </div>
                <div className="right" >
                    <img src={image} alt="img" />
                </div>
            </div>

        </section >
    )
}

export default Hero