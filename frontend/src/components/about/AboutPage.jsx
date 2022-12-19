import React from 'react'
import { about } from '../../data/aboutUs'
import { BsArrowRight } from 'react-icons/bs'
import bite from '../../img/bite.jpg'
import './about.scss'

const AboutPage = () => {


    return (
        <>
            <div className="about">
                <div className="text">
                    <h1>About Us</h1>
                    <p>learn more about us</p>

                </div>
                <hr />
                <div className="container">


                    <div className="left">
                        <img src={bite} alt="" />
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Temporibus in libero excepturi maiores reprehenderit illum magnam veniam quae,
                            amet sapiente ipsa cupiditate atque dolorum facilis accusamus id debitis aliquid iure. Illum,
                            fuga ea? Animi perspiciatis necessitatibus doloremque itaque blanditiis! Magnam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Temporibus in libero excepturi maiores reprehenderit illum magnam veniam quae,
                            amet sapiente ipsa cupiditate atque dolorum facilis accusamus id debitis aliquid iure. Illum,
                            fuga ea? Animi perspiciatis necessitatibus doloremque itaque blanditiis! Magnam.
                        </p>
                    </div>
                </div>

                <section className='services'>
                    <div className="container">
                        <div className="box">
                            <div className="item">
                                <h1>What we do</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Aliquam deserunt beatae reprehenderit corporis voluptatem
                                    harum ab quae voluptates vero ea.
                                </p>
                            </div>


                            <div className="item">
                                <h1>Our Mission</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Aliquam deserunt beatae reprehenderit corporis voluptatem
                                    harum ab quae voluptates vero ea.
                                </p>
                            </div>

                            <div className="item">
                                <h1>Our Goal</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Aliquam deserunt beatae reprehenderit corporis voluptatem
                                    harum ab quae voluptates vero ea.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >



        </>
    )
}

export default AboutPage;