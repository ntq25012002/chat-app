import React from 'react';
import AuthForm from '~/layouts/components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {loginSuccess} from '~/reducer/userReducer.js';

function Register () {

    const dispatch = useDispatch();

    const initialFormData = {
        email: '',
        phone: '',
        password: '',
        name: '',
    }

    const register = (data) => {
        console.log(data)

        try {
            const {name, password, email, phone} = data;

            dispatch(loginSuccess(name, password, email, phone));
        }
        catch (error) {
            console.log(error)
        }

    }

    const handleRegister = (formData) => {
        register(formData)
    }

    return (
       <>
            <AuthForm onSubmit={handleRegister} registerForm={true} initialFormData={initialFormData} buttonText='Đăng ký' title='Đăng ký' link="/login" linkText='Đăng nhập ngay' />
       </>
    )
}

export default Register;