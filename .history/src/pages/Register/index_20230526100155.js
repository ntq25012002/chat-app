import React from 'react';
import AuthForm from '~/components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {loginSuccess} from '~/reducer/authReducer';
import axios from 'axios';

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
        console.log(data)

        try {
            const {name, password, email, phone} = data;
            const response = await axios.post('http://127.0.0.1:8080/api/register', { name, password, email, phone });
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