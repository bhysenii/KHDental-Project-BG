import React from 'react'
import ContactCard from '../components/contact/ContactCard'
import Customer from '../components/customers/Customer'
import Featured from '../components/featured/Featured'
import Herohome from '../components/hero-home/Herohome'
import Hero from '../components/hero/Hero'

const Home = () => {
    return (
        <div>
            <Herohome />
            <Featured />
            <Hero />
            <Customer />
            <ContactCard />
        </div>
    )
}

export default Home