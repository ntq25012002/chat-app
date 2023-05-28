import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import classNames from 'classnames/bind';

import { logout } from "~/reducer/userReducer";
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles);
function Sidebar() {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return ( 
        <div className={cx('sidebar-container')}>
            <div className={cx('content')} >
                <div className={cx('content-top')}>
                    <div className={cx('logo')}>
                        <img src="" alt="logo" />
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
                    <div className={cx('setting')}>
                        <img src="" alt="group" />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
     );
}

export default Sidebar;