import React from 'react'
import Header from '../../components/Header'
import './index.scss'
import KeyLogo from '../../assets/KeyLogo.svg'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const ForgetPassword = () => {

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
                    .matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+.com$", 'Возможно вы ошиблись в указании почтового сервиса')
                    .required('Введите email')            
    });

    return (
        <>
          <Header />  
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
                            /*     settoNextPage(true); */
                                console.log(values);
                                setSubmitting(false);
                                resetForm(); 
                            }}
                    >
                        <Form className='auth-form'>
                            <MyTextInput
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        <div className='buttons'>
                            <button type='submit'>Отправить</button>
                            <h6>Отменить</h6>
                        </div>
                        </Form>
                    </Formik>
            </div>
        </>
    )
}

export default ForgetPassword
