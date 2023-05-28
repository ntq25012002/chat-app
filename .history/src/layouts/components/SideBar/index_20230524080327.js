import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons"

import { logout } from "~/reducer/userReducer";
import styles from './SideBar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Sidebar() {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return ( 
        <div className={cx('sidebar-container')}>
            <div className={cx('content-fixed')} >
                <div className={cx('content-top')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </div>
                    <div className={cx('avatar')}>
                        <img src="" alt="avatar" />
                    </div>
                    <div className={cx('chat')}>
                        <img src="" alt="chat" />
                    </div>
                    <div className={cx('friend')}>
                        <img src="" alt="friend" />
                    </div>
                    <div className={cx('group')}>
                        <img src="" alt="group" />
                    </div>
                </div>
                <div className={cx('content-bottom')}>
                    <button className={cx('btn-logout')} onClick={handleLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                    <div className={cx('setting')}>
                        <img src="" alt="setting" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;