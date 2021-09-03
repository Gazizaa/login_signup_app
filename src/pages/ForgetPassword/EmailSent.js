import React from 'react';
import EmailLogo from '../../assets/EmailLogo.svg';
import { Link } from 'react-router-dom'; 


const EmailSent = () => {
    return (
        <>
            <div className='main-section'>
               <img src={EmailLogo} alt="email-logo" />
                <h2>Письмо отправлено</h2>
                <p>На указанный вами e-mail было отправлено письмо для смены пароля</p>
                <div className='buttons'>
                    <Link to='/'>
                        <button type='submit'>Вернуться на главную</button>
                    </Link>
                    
                </div>   
            </div>
        </>
    )
}

export default EmailSent
