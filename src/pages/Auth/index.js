import React from 'react'
import './index.scss'
import Header from '../../components/Header'
import FacebookLogo from '../../assets/FacebookLogo.svg'
import GoogleLogo from '../../assets/GoogleLogo.svg'
import { Formik, Form, useField } from 'formik';
 import * as Yup from 'yup';
 import { Link } from 'react-router-dom'

const AuthForm = () => {

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
        email: Yup.string('')
                    .email('Неверный еmail')
                    .matches('example@example.com', 'Неверный еmail')
                    .required('Введите email'),
        password: Yup.string('')
                    .matches('password2021', 'Неверный пароль')
                    .required('Введите пароль')
                  
    });

    return (
        <>
           <Header />
           <div className='auth-main'>
               <h2>Войти</h2>
               <h3>Добро пожаловать, рады видеть вас снова 👋</h3>
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
                    email: '',
                    password: '',
                    }}
                    validationSchema={authSchema}
                    onSubmit={(values, { setSubmitting, resetForm}) => {
                            console.log(values);
                            setSubmitting(false);
                            resetForm(); 
                }}
                >
                    <Form className='auth-form' autoComplete="off">
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
                       {/*  {error ? (
                            <div className="error">Неверный еmail или пароль</div>
                            ) : ''} */}
                        <button type="submit" className='submit-btn'>Войти в аккаунт</button>
                        <Link to='/forgetpassword'>
                            <button className='forgot-password-btn'>Забыли пароль?</button>
                        </Link>
                         
                    </Form>
                </Formik>
            </div> 
        </>
    )
}

export default AuthForm
