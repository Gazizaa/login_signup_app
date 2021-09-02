import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.scss'

const Header = (props) => {
    return (
        
        <div className='header-row'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='registration'>
                 {props.location.pathname === '/registration' 
                ? <p>Уже есть аккаунт?</p>
                : <p>У вас нет аккаунта?</p>
            }
                {props.location.pathname === '/registration' 
                ? <Link to='/'><button>Войти</button></Link>
                : <Link to='/registration'><button>Регистрация</button></Link>
            }
                
               
                
            </div>
        </div>
    )
}

export default withRouter(Header)
