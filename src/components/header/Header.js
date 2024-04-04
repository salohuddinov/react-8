import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Header() {
    return (
        <div className='header'>
            <div className="header__top container">
                <RxHamburgerMenu className='header__left' />
                <div className="header__crntr">
                    <Link to={"/"}>
                        <h3>Home</h3>
                    </Link>
                    <Link to={"/login"}>
                        <h3>log in<FaChevronDown className='centr__svg' /></h3>
                    </Link>
                    <h3>Products<FaChevronDown className='centr__svg' /></h3>
                    <h3>Pages<FaChevronDown className='centr__svg' /></h3>
                    <h3>Blog<FaChevronDown className='centr__svg' /></h3>
                    <h3>Elements<FaChevronDown className='centr__svg' /></h3>
                </div>
                <h2 className='header__right'><FaPhoneAlt /> +123 ( 456 ) ( 7890 )</h2>
            </div>
        </div>
    )
}

export default Header