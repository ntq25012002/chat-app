import React, {useState} from 'react';
import {Link} from 'react-dom'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

function AuthForm( {...props} ) {

    const [formData, setFormData] = useState(props.initialFormData);
    const [errors, setErrors] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formData);
    }

    const handleInputChange = (e) => {

        setFormData({
          ...formData,
            [e.target.name]: e.target.value
        });

    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')} >
                <img src={images.bg_login} alt="" />
                <div className={cx('form-container')}>
                    <div className={cx('title')}>
                        <h2>{props.title}</h2>
                    </div>
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        {
                            props.loginForm && (
                                <>
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
                                </>
                            )
                        }
                        
                        <button className={cx('btn-submit')}>{props.buttonText}</button>

                        <div>
                            <span>Bạn đã có tài khoản? </span> <Link to={props.link} className={cx('register_link')}>{props.linkText}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default AuthForm;