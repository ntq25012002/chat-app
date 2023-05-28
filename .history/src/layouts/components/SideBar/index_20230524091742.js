import React from "react";
import { useDispatch } from "react-redux";
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightFromBracket, faComment, faUsers, faUser} from "@fortawesome/free-solid-svg-icons"

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
                    <div className={cx('tooltip')}>
                        <span className={cx('tooltiptext')}>Logo</span>
                        <img src={images.logo} alt="logo" className={cx('logo')} />
                    </div>
                    <div className={cx('avatar', 'tooltip')}>
                        <span className={cx('tooltiptext')}>Ảnh đại diện</span>
                        <img src="" alt="avatar" />
                    </div>
                    <div className={cx('chat','tooltip', 'active')}>
                        {/* <img src="" alt="chat" /> */}
                        <span className={cx('tooltiptext')}>Chat</span>
                        <FontAwesomeIcon icon={faComment} />

                    </div>
                    <div className={cx('friend', 'tooltip')}>
                        <span className={cx('tooltiptext')}>Bạn bè</span>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={cx('group', 'tooltip')}>
                        <span className={cx('tooltiptext')}>Nhóm chat</span>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                </div>
                <div className={cx('content-bottom')}>
                    <button className={cx('btn-logout', 'tooltip')} onClick={handleLogout}>
                        <span className={cx('tooltiptext')}>Đăng xuất</span>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                    <div className={cx('setting', 'tooltip')}>
                        <span className={cx('tooltiptext')}>Cài đặt</span>
                        <img src="" alt="setting" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;