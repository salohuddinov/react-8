import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="login__bg">
                <div className="loging__top container">
                    <h2>Lohin</h2>
                    <Link to={"/"}>
                        <h2 className='back'>Home-Login</h2>
                    </Link>
                </div>
            </div>
            <div className="login__card">
                <form className='login__form' action="">
                    <label>Username</label>
                    <input className='inp' type="text" placeholder='Email or Phone Number' required />
                    <label>Password</label>
                    <input className='inp' type="password" placeholder='password' required />
                </form>

                <Link to={'/admin'}>
                    <button className='login'>Login</button>
                </Link>
            </div>
        </>
    )
}

export default Login