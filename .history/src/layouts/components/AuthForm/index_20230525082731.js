import React, {useState} from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

function AuthForm( {...props} ) {

    const [formData, setFormData] = useState();

    const handleSubmit = () => {

    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')} >
                <img src={images.bg_login} alt="" />
                <div className={cx('form-container')}>
                    <div className={cx('title')}>
                        <h2>{props.title}</h2>
                    </div>
                    <form className={cx('form form-login')} onSubmit={handleSubmit}>
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
    )

}

export default AuthForm;