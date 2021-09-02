import React, { useState } from 'react';
import Header from '../../components/Header';
import './index.scss';

const NotReceiveEmail = () => {
    const [input, setInput] = useState('')
    return (
        <>
            <Header />
            <div className='main-text'>
                <h1>Мне не пришло письмо</h1>
                <p>Письмо может прийти с задержкой в 5-10 минут.Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку support@livedune.ru и мы активируем ваш аккаунт.</p>
                <div className='buttons'>
                    <input type='email' placeholder='Email' value={input} onChange={(e) =>setInput(e.target.value)}  />
                    <button>Отправить  заново</button>
                    <h6>Отменить</h6>
                </div>
            </div>
        </>
    )
}

export default NotReceiveEmail
