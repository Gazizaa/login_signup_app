import React, { useState } from 'react'
import './index.scss'
import Header from '../../components/Header'
import FacebookLogo from '../../assets/FacebookLogo.svg'
import GoogleLogo from '../../assets/GoogleLogo.svg'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom'

const RegistrationForm = () => {

    const [toNextPage, settoNextPage] = useState(false);
    const [input, setInput] = useState(false);

    const MyTextInput = ({...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
            <input className={`${meta.touched && meta.error ? "error-input text-input" : "text-input"}`} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            </>
        );
    };

    const authSchema = Yup.object().shape({
        name: Yup.string('')
                    .required('Введите имя'),
        email: Yup.string('')
                    .email('Неверный еmail')
                    .matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+.com$", 'Возможно вы ошиблись в указании почтового сервиса')
                    .required('Введите email'),
        password: Yup.string('')
                    .required('Введите пароль')              
    });

    const showInput = () => {
        setInput(true);
    }

    return (
        <>
          <Header />  
          <div className='auth-main'>
               <h2>Регистрация</h2>
               <h3>Зарегистрируйся и получи доступ к аналитике аккаунтов.</h3>
               <div className='auth-buttons'>
                   <button className='facebook-btn'>
                       <img src={FacebookLogo} alt="facebook logo" />
                       Войти через Facebook
                    </button>
                   <button className='google-btn'>
                        <img src={GoogleLogo} alt="google logo" />
                        Войти через Google
                    </button>
               </div>
               <p>или</p>
                <Formik
                    initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    promocode: '',
                    }}
                    validationSchema={authSchema}
                    onSubmit={(values, { setSubmitting, resetForm}) => {
                            settoNextPage(true);
                            console.log(values);
                            setSubmitting(false);
                            resetForm(); 
                }}
                >
                    <Form className='auth-form' autoComplete="off">
                        <MyTextInput
                            name="name"
                            type="name"
                            placeholder="Имя"
                        />
                        <br/>
                        <MyTextInput
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                        <br/>
                        <MyTextInput
                            name="password"
                            type="password"
                            placeholder="Пароль"
                        />
                        <br/>
                        {input ? 
                        <MyTextInput
                            name="promocode"
                            type="promocode"
                            placeholder="Промокод"
                        />
                        : <button className='forgot-password-btn' onClick={showInput}>У меня есть промокод</button>
                        }
                        {toNextPage ?
                        <Redirect to='/confirmemail'>
                            <button type="submit" className='submit-btn' >Создать аккаунт</button>
                        </Redirect> 
                        : <button type="submit" className='submit-btn' >Создать аккаунт</button>
                        }
                        <h5>Создавая аккаунт, я согласен<button className='forgot-password-btn'>с условиями оферты</button></h5>
                    </Form>
                </Formik>
            </div> 
        </>
    )
}

export default RegistrationForm
