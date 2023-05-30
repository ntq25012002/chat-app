import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import AuthForm from '~/components/AuthForm';
import { register as registerUser } from '~/api';
import {loginSuccess} from '~/reducer/AuthReducer';

function Register () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialFormData = {
        email: '',
        phone: '',
        password: '',
        name: '',
    }

    const register = async (data) => {

        try {
            const {name, password, email, phone} = data;
            const response = await registerUser({ name, password, email, phone });
            // Lưu token vào localStorage hoặc sessionStorage
            sessionStorage.setItem('token', response.data.token);
            dispatch(loginSuccess(response.data.user))
            // dispatch(setLogin(response.data.user));
            navigate('/');
         
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