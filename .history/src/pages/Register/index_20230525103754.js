import React from 'react';
import AuthForm from '~/layouts/components/AuthForm';

function Register () {

    const initialFormData = {
        email: '',
        phone: '',
        password: '',
        name: '',
        avatar: '',
    }

    const register = (data) => {
        console.log(data)
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