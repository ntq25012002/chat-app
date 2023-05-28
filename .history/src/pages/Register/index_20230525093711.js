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

    return (
       <>
        <AuthForm  />
       </>
    )
}

export default Register;