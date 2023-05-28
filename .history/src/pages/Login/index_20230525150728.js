import React, {useReducer} from 'react';
import classNames from 'classnames/bind';
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import AuthForm from '~/layouts/components/AuthForm';

import styles from './Login.module.scss';
// import {userReducer, initialState, LOGIN_SUCCESS, LOGOUT, setLogin, setLogout} from '~/reducer';
import { loginSuccess } from '~/reducer/userReducer';

const cx = classNames.bind(styles);

function Login() {
    // const [state, dispatch] = useReducer(userReducer, initialState)
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const initialFormData = {
        username: '',
        password: ''
    }
    
    const login = async (data) => {
        try {
            const { username, password } = data;
            const response = await axios.post('http://127.0.0.1:8080/api/login', { username, password });
            // Lưu token vào localStorage hoặc sessionStorage
            sessionStorage.setItem('token', response.data.token);
            dispatch(loginSuccess(response.data.user))
            // dispatch(setLogin(response.data.user));
            navigate('/');
         
          } catch (error) {
            console.error(error);
          }
        
    }

    const handleLogin = (formData) => {
        // e.preventDefault();
        // const username = e.target.username.value;
        // const password = e.target.password.value;
        login(formData);
    }

    return (
        <>
            <AuthForm onSubmit={handleLogin} loginForm={true} initialFormData={initialFormData} buttonText='Đăng nhập' title='Đăng nhập' link="/register" linkText='Đăng ký ngay' />
        </>
    );
}

export default Login;