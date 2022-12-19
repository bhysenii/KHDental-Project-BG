import React from 'react'
import './contact.scss'


const ContactCard = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="left">
                    <h1>Do you have questions?</h1>
                    <p>We'll help you to grow your career!</p>
                </div>
                <div className="right">
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard