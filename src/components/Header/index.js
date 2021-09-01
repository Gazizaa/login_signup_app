import React from 'react'
import logo from '../../assets/logo.png'
import './index.scss'

const Header = () => {
    return (
        <div className='header-row'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='registration'>
                <p>У вас нет аккаунта?</p>
                <button>Регистрация</button>
            </div>
        </div>
    )
}

export default Header
