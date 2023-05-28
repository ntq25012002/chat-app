import React from "react";
import { useDispatch } from "react-redux";
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightFromBracket, faComment, faUsers, faUser, faGear, faMagnifyingGlass, faUserPlus, faUsersRays } from "@fortawesome/free-solid-svg-icons"
import {faObjectGroup} from "@fortawesome/free-regular-svg-icons";

import SideBarListChat from '~/layouts/components/SideBarListChat';
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
                        {/* <span className={cx('tooltiptext')}>Logo</span> */}
                        <img src={images.logo} alt="logo" className={cx('logo')} />
                    </div>
                    <div className={cx('avatar', 'tooltip')}>
                        <span className={cx('tooltiptext')}>Ảnh đại diện</span>
                        <img src="https://via.placeholder.com/30" alt="" />
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
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                </div>
            </div>
            <div className={cx('content-scroll', 'list-chat')}>
                <div className={cx('title')}>
                    <h2 className={cx('title-text')}>Chat</h2>

                    <div className={cx('add-friend')}>
                        <div className={cx('icon-add-friend')}>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </div>
                        <div className={cx('icon-add-group')}>
                            <FontAwesomeIcon icon={faObjectGroup} />
                        </div>
                    </div>
                </div>
                <div>
                    <form className={cx('form-search')}>
                        <div className={cx('form-group')}>
                            <div className={cx('icon-search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <div className={cx('input')}>
                                <input type="text" className={cx('input-control')} placeholder="Tìm kiếm ..." />
                            </div>
                        </div>
                    </form>

                    <SideBarListChat />

                </div>
            </div>
        </div>
     );
}

export default Sidebar;