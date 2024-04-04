import React from 'react'
import './Baner.css'
import heroimg from '../../images/IMAGE.svg'

function Baner() {
    return (
        <>
            <div className='hero'></div>
            <div className="hero__content container">
                <div className="content__left">
                    <h3>Understand how food affects your body</h3>
                    <button>Get started</button>
                </div>
                <img src={heroimg} alt="feaf" />
            </div>
        </>
    )
}

export default Baner