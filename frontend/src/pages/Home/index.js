import React, {useCallback, useState} from 'react';
import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from'react-toastify';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import PopUpAddFriend from '~/layouts/components/PopUpAddFriend';

const cx = classNames.bind(styles);

function Home() {
    const infoUser = useSelector((state) => state.user.user);
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);
   
    return (
        <>
            <div className={cx('content')}>
                <div className={cx('avatar')}>
                    <img src="https://via.placeholder.com/80" alt="avatar" />
                </div>
                <h2 className={cx('title')}>Chào,  {infoUser.name} ! </h2>
                <p>Vui lòng chọn một cuộc trò chuyện để Bắt đầu nhắn tin.</p>
                <button className={cx('btn-select-chat-user')} onClick={handleOpenModal}>
                    Bắt đầu cuộc trò chuyện
                </button>
            </div>
            
            <PopUpAddFriend showModal={showModal} closeModal={handleCloseModal} />
            
              
        </>
    );
}

export default Home;