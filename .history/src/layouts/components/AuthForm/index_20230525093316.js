import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

function AuthForm( {...props} ) {
    const formRef = useRef();
    const [formData, setFormData] = useState(props.initialFormData);
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phoneRegex = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(props.loginForm) {
            if(!formData.username ) {
                newErrors.username = 'Vui lòng nhập email hoặc số điện thoại';
                isValid = false;
            } else if( isNaN(formData.username) && !emailRegex.test(formData.username)) {
                newErrors.username = 'Email chưa đúng định dạng';
                isValid = false;
            }else if(!isNaN(formData.username) && phoneRegex.test(formData.username)) {
                newErrors.username = 'Số điện thoại chưa đúng định dạng';
                isValid = false;
            }
        }
    
        if (!formData.password) {
          newErrors.password = 'Vui lòng nhập mật khẩu';
          isValid = false;
        }
    
        // Xử lý validate các trường input đặc biệt trong form đăng ký
        if(props.registerForm) {
            if (!formData.name) {
                newErrors.name = 'Nhập họ tên';
                isValid = false;
              }
          
              if (!formData.phoneNumber) {
                newErrors.phoneNumber = 'Phone number is required';
                isValid = false;
              }
        }
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(formRef.current);
        console.log(data);
        return;
        if (validateForm()) {
            props.onSubmit(formData);
        } else {
          console.log('Form validation failed:', errors);
        }
      };

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
                    <form className={cx('form', 'form-data')} ref={formRef} onSubmit={handleSubmit}>

                        { // Login form
                            props.loginForm && (
                                <>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Email hoặc số điện thoại</label>
                                        <input type="text" onChange={handleInputChange} value={formData.username} name='username' className={cx('form-control')} placeholder='Nhập email hoặc số điện thoại'/>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Mật khẩu</label>
                                        <input type="password" onChange={handleInputChange} value={formData.password} name='password' className={cx('form-control')} placeholder='Nhập mật khẩu'/>
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

                        {
                            props.registerForm && (
                                <>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label-file')}>Ảnh đại diện</label>
                                        <input type="file" onChange={handleInputChange} name='avatar'/>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Họ tên</label>
                                        <input type="text"  onChange={handleInputChange} name='password' className={cx('form-control')} placeholder='Nhập mật khẩu'/>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Email</label>
                                        <input type="text" onChange={handleInputChange} name='email' className={cx('form-control')} placeholder='Nhập địa chỉ email'/>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Email</label>
                                        <input type="text" onChange={handleInputChange} name='phone' className={cx('form-control')} placeholder='Nhập địa chỉ email'/>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Mật khẩu</label>
                                        <input type="password"  onChange={handleInputChange} name='password' className={cx('form-control')} placeholder='Nhập mật khẩu'/>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label className={cx('form-label')}>Nhập lại mật khẩu</label>
                                        <input type="password"  onChange={handleInputChange} name='password' className={cx('form-control')} placeholder='Nhập mật khẩu'/>
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