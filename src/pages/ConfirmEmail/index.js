import React from 'react'
import Header from '../../components/Header'
import './index.scss';
import { Link } from 'react-router-dom'; 

const ConfirmEmail = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <h1>Подтвердите ваш e-mail</h1>
                <p>Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.</p>
                <div className='buttons'>
                    <button className='email-btn'>Перейти к почте </button>
                    <Link to='/notreceiveemail'>
                        <button className='get-email-btn'>Мне не пришло письмо</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ConfirmEmail
