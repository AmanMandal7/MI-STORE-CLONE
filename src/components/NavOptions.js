import React, { useEffect, useState } from 'react'
import NavCard from './NavCard'
import '../styles/NavOptions.css'

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {

    const [miPhonesToggle, setMiPhonesToggle] = useState(false)
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false)
    const [tvToggle, setTvToggle] = useState(false)
    const [laptopToggle, setLaptopToggle] = useState(false)
    const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false)
    const [homeToggle, setHomeToggle] = useState(false)
    const [audioToggle, setAudioToggle] = useState(false)
    const [accessoriesToggle, setAccessoriesToggle] = useState(false)

    useEffect(() => {
        if (window.location.pathname === "/miphones") {
            return setMiPhonesToggle(true)
        }

        if (window.location.pathname === "/redmiphones") {
            return setRedmiPhonesToggle(true)
        }

        if (window.location.pathname === "/tv") {
            return setTvToggle(true)
        }

        if (window.location.pathname === "/laptop") {
            return setLaptopToggle(true)
        }

        if (window.location.pathname === "/lifestyle") {
            return setFitnessAndLifeStyleToggle(true)
        }

        if (window.location.pathname === "/home") {
            return setHomeToggle(true)
        }

        if (window.location.pathname === "/audio") {
            return setAudioToggle(true)
        }

        if (window.location.pathname === "/accessories") {
            return setAccessoriesToggle(true)
        }
    }, [])

    return (
        < div className='NavOptions' >
            {
                miPhonesToggle ? miPhones.map((item, index) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null}

            {
                redmiPhonesToggle ? redmiPhones.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

            {
                tvToggle ? tv.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

            {
                laptopToggle ? laptop.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

            {
                fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

            {
                homeToggle ? home.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

            {
                audioToggle ? audio.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

            {
                accessoriesToggle ? accessories.map((item) => (
                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null
            }

        </div>
    )
}

export default NavOptions
