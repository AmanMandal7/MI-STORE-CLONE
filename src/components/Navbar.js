import React from 'react'
import '../styles/Navbar.css'
import packageInfo from '../data/data.json'

const logo = packageInfo.logo;
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.475 21.025-6.25-6.25q-.725.575-1.687.9Q10.575 16 9.5 16q-2.725 0-4.6-1.887-1.875-1.888-1.875-4.588T4.9 4.937Q6.775 3.05 9.5 3.05q2.7 0 4.575 1.887 1.875 1.888 1.875 4.588 0 1.075-.325 2.037-.325.963-.875 1.688l6.225 6.25Zm-9.975-7.2q1.8 0 3.05-1.25 1.25-1.25 1.25-3.05 0-1.8-1.25-3.05-1.25-1.25-3.05-1.25-1.825 0-3.075 1.25-1.25 1.25-1.25 3.05 0 1.8 1.25 3.05 1.25 1.25 3.075 1.25Z" /></svg>

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <a href="/"><img id="logoImage" src={logo} alt="Not" /></a>
            </div>

            <div className='links'>
                <a className="navlinks" href="/miphones">Mi Phones</a>
                <a className="navlinks" href="/redmiphones">Redmi Phones</a>
                <a className="navlinks" href="/tv">TV</a>
                <a className="navlinks" href="/laptop">Laptops</a>
                <a className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
                <a className="navlinks" href="home">Home</a>
                <a className="navlinks" href="audio">Audio</a>
                <a className="navlinks" href="accessories">Accessories</a>
            </div>


            <div className="searchbox">
                <input type="text" name='search' placeholder='Search Products' />{searchIcon}
            </div>


        </div>
    )
}

export default Navbar
