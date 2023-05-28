import React from 'react';
import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from'react-toastify';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const infoUser = useSelector((state) => state.user.user);

    // const showToastMessage = () => {
    //     toast.success('Successfully logged in', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //     })
    // }
   
    return (
        <div className={cx('content')}>
            <div className={cx('avatar')}>
                <img src="https://via.placeholder.com/80" alt="avatar" />
            </div>
            <h2 className={cx('title')}>Chào,  {infoUser.name} ! </h2>
            <p>Vui lòng chọn một cuộc trò chuyện để Bắt đầu nhắn tin.</p>
            <button className={cx('btn-select-chat-user')}>
                Bắt đầu cuộc trò chuyện
            </button>
        </div>
    );
}

export default Home;