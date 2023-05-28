import React, {useState} from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images'
import {Link} from 'react-router-dom'
import axios from 'axios';
const cx = classNames.bind(styles);

function Login() {
    const [res, setRes] = useState('');

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8080/api/login', { username, password });
            // Lưu token vào localStorage hoặc sessionStorage
            setRes(response);  
            localStorage.setItem('token', response);
            // Chuyển hướng đến trang sau khi đăng nhập thành công
            window.location.href = '/profile';
          } catch (error) {
            console.error(error);
          }
        
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        login(username, password);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')} >
                {res}
                <img src={images.bg_login} alt="" />
                <div className={cx('form-container')}>
                    <div className={cx('title')}>
                        <h2>Đăng nhập</h2>
                    </div>
                    <form className={cx('form form-register')} onSubmit={handleLogin}>
                        <div className={cx('form-group')}>
                            <label className={cx('form-label')}>Email hoặc số điện thoại</label>
                            <input type="text" name='username' className={cx('form-control')} placeholder='Nhập email hoặc số điện thoại'/>
                        </div>
                        <div className={cx('form-group')}>
                            <label className={cx('form-label')}>Mật khẩu</label>
                            <input type="password" name='password' className={cx('form-control')} placeholder='Nhập mật khẩu'/>
                        </div>
                        <div className='d-flex'>
                            <div className={cx('form-control')}>
                                <input type="checkbox" className={cx('check_remember')} />
                                <label className={cx('remember_login')}>Ghi nhớ đăng nhập</label>
                            </div>
                        </div>
                        <button className={cx('btn-submit')}>Đăng nhập</button>

                        <div>
                            <span>Bạn chưa có tài khoản? </span> <Link to="/profile" className={cx('register_link')}>Đăng ký ngay</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;