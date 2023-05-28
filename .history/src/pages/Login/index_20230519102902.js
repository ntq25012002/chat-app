import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import images from '~/assets/images'

const cx = classNames.bind(styles);
function Login() {
    return (
            <div className={cx('wrapper')}>
                <div className={cx('content')} style={background: }>
                    <div className={cx('title')}>
                        <h2>Đăng nhập</h2>
                    </div>
                    <form className={cx('form form-register')}>
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
            </div>
        );
}

export default Login;