import React, { useState } from 'react'
import Header from '../../components/Header'
import './index.scss'
import KeyLogo from '../../assets/KeyLogo.svg'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import EmailSent from './EmailSent';

const ForgetPassword = () => {

    const [submitBtn, setSubmitBtn] = useState(false);
    const [showPage, setshowPage] = useState(false);

     const MyTextInput = ({...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
            <input className={`${(meta.touched && meta.error) || submitBtn ? "error-input text-input" : "text-input"}`} 
            {...field} {...props} onFocus={() => setSubmitBtn(false)} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
            </>
        );
    };

    const authSchema = Yup.object().shape({
        email: Yup.string('')
                    .email('Неверный еmail')
                    .required('Введите email')            
    });

    return (
        <> 
        <Header />  
        {showPage ? <EmailSent/> : 
          <div className='main-section'>
               <img src={KeyLogo} alt="key-logo" />
                <h2>Восстановить пароль</h2>
                <p>Введите e-mail, на который регистрировались ранее</p>
                    <Formik
                        initialValues={{
                        email: '',
                        }}
                        validationSchema={authSchema}
                        onSubmit={(values, { setSubmitting, resetForm}) => {
                            if(values.email === 'example@example.com') {
                                console.log(values);
                                setSubmitting(false);
                                resetForm(); 
                                setSubmitBtn(false);
                                setshowPage(true);
                            } else {
                                setSubmitBtn(true);
                                setshowPage(false);
                            }
                        }}
                    >
                        <Form className='auth-form' autoComplete="off">
                            <MyTextInput
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            { submitBtn && <div className="error">Неверный email</div> }
                        <div className='buttons'>
                            <button type='submit' className='submit'>Отправить</button>
                            <h6>Отменить</h6>
                        </div>
                        </Form>
                    </Formik>
            </div>
        }
        </>
    )
}

export default ForgetPassword
