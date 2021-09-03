import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.scss'

const Header = (props) => {
    return (
        <div className='header-row'>
             <Link to='/'>
                 <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
             </Link>
            
            <div className='registration'>
            {
                (props.location.pathname === '/registration' && <p>Уже есть аккаунт?</p>) 
                || (props.location.pathname === '/' && <p>У вас нет аккаунта?</p>)
                || (props.location.pathname === '/confirmemail' && <p style={{display: "block"}}>Выйти</p>)
                || (props.location.pathname === '/notreceiveemail' && <p style={{display: "block"}}>Выйти</p>)
            }
            {
                (props.location.pathname === '/registration' && <Link to='/'><button>Войти</button></Link>) 
                || (props.location.pathname === '/' && <Link to='/registration'><button>Регистрация</button></Link>)
                || (props.location.pathname === '/confirmemail' && <button style={{display: "none"}}>Войти</button>)
            } 
            </div>
        </div>
    )
}

export default withRouter(Header)
