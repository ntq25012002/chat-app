import React from 'react';
// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from'react-toastify';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    // const infoUser = useSelector((state) => state.user.user);

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
        <div>
            <div className={cx('avatar')}>
                <img src="https://via.placeholder.com/40" alt="avatar" />
            </div>
            <h2>Chào mừng bạn  </h2>
            Welcome, Christina!
Please select a chat to Start messaging.


        </div>
    );
}

export default Home;