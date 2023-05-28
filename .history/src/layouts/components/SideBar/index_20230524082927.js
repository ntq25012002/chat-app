import React from "react";
import { useDispatch } from "react-redux";
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightFromBracket, faComment, faUserGroup, faUser} from "@fortawesome/free-solid-svg-icons"

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
                    <div>
                        <img src={images.logo} alt="logo" className={cx('logo')} />
                    </div>
                    <div className={cx('avatar')}>
                        <img src="" alt="avatar" />
                    </div>
                    <div className={cx('chat', 'active')}>
                        {/* <img src="" alt="chat" /> */}
                        <FontAwesomeIcon icon={faComment} />

                    </div>
                    <div className={cx('friend')}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={cx('group')}>
                        <FontAwesomeIcon icon={faUserGroup} />
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