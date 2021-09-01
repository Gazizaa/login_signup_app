import React from 'react'
import './index.scss'
import Header from '../../components/Header'

const AuthForm = () => {
    return (
        <>
           <Header />
           <div className='auth-form'>
               <h1>Войти</h1>
               <p>Добро пожаловать, рады видеть вас снова 👋</p>

            </div> 
        </>
    )
}

export default AuthForm
