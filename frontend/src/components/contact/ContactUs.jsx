import React from 'react'
import './contact.scss'

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <div className="text">
                <h1>Contact Us</h1>
                <p>Get in touch with us</p>
            </div>
            <hr />
            <div className="container">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugiat iste harum laudantium vero exercitationem
                    totam ipsa sed rerum, accusamus aspernatur
                    voluptate obcaecati temporibus. Quis, dignissimos
                    dolores. Corrupti ipsum iusto qui!
                </p>

            </div>

            <div className="left">
                <form action="">
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Email address' />
                    <input type="text" placeholder='Phone Number' />
                    <input type="text" placeholder='Country' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type your message' />

                </form>
                <button>SEND US MESSAGE</button>
            </div>

            <div className="right">
                <div className="item">
                    <span>Call US</span>
                    <p>USA:

                        + 021-5432-145

                        NON- USA:

                        + 021-5432-145</p>
                </div>
                <div className="item">
                    <span>EMAIL</span>
                    <p>product@comapny.com</p>
                </div>
            </div>





        </div>
    )
}

export default ContactUs