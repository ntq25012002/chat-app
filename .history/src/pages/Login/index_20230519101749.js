import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss'

const cx = classNames.bind(styles);
function Login() {
    return (
            <div >
                <form className={cx(form form-register)}>
                    <div className={cx('form-group')}>
                        <label className={cx('form-label')}>Email hoặc số điện thoại</label>
                        <input type="text" className={cx('form-control')} placeholder='Nhập email hoặc số điện thoại'/>
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('form-label')}>Mật khẩu</label>
                        <input type="password" className={cx('form-control')} placeholder='Nhập mật khẩu'/>
                    </div>
                    <div className='btn-submit'>
                        <button>Đăng nhập</button>
                    </div>
                </form>
            </div>
        );
}

export default Login;