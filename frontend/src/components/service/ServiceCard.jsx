import React from 'react'
import './service.scss'
import bars from '../../img/bars.jpg'
import bite from '../../img/bite.jpg'
import coping from '../../img/coping.jpg'
import inlay from '../../img/inlay.png'
import offset from '../../img/offset.jpg'
import primary from '../../img/primary.jpg'




const ServiceCard = () => {
    return (
        <div className='service'>
            <div className="text">
                <h1>Our services</h1>
                <p>know more about us</p>
            </div>
            <hr />
            <div className="container">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugiat iste harum laudantium vero exercitationem
                    totam ipsa sed rerum, accusamus aspernatur
                    voluptate obcaecati temporibus. Quis, dignissimos
                    dolores. Corrupti ipsum iusto qui!
                </p>

                <div className="box">
                    <div className="item">
                        <img src={bars} alt="" />
                        <span>Graphic Design</span>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Unde, praesentium.
                        </p>
                    </div>

                    <div className="item">
                        <img src={bite} alt="" />
                        <span>Graphic Design</span>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Unde, praesentium.
                        </p>
                    </div>

                    <div className="item">
                        <img src={coping} alt="" />
                        <span>Graphic Design</span>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Unde, praesentium.
                        </p>
                    </div>

                    <div className="item">
                        <img src={coping} alt="" />
                        <span>Graphic Design</span>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Unde, praesentium.
                        </p>
                    </div>

                    <div className="item">
                        <img src={coping} alt="" />
                        <span>Graphic Design</span>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Unde, praesentium.
                        </p>
                    </div>

                    <div className="item">
                        <img src={coping} alt="" />
                        <span>Graphic Design</span>
                        <p>Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Unde, praesentium.
                        </p>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default ServiceCard