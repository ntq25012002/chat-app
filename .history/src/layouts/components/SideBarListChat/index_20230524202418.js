import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarListChat.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SideBarListChat() {
    return (
        <div className={cx('side-bar-list-chat')}>
            <div className={cx('side-bar-list-chat__item')}>
                <div className={cx('side-bar-list-chat__item-avatar')}>
                    <img src="https://via.placeholder.com/40" alt="avatar" />
                </div>
                <div className={cx('side-bar-list-chat__item-content')}>
                    <span className={cx('list-action')}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <div className={cx('side-bar-list-chat__item-user-name')}>
                        Ten ban be
                    </div>
                    <div className={cx('side-bar-list-chat__item-content-text')}>
                        Noi dung chat dai dai dai dai dai dai dai dai dai daidj aod ia  dia 
                    </div>
                </div>
            </div>
            <div className={cx('side-bar-list-chat__item')}>
                <div className={cx('side-bar-list-chat__item-avatar')}>
                    <img src="https://via.placeholder.com/40" alt="avatar" />
                </div>
                <div className={cx('side-bar-list-chat__item-content')}>
                    <div className={cx('side-bar-list-chat__item-user-name')}>
                        Ten ban be
                    </div>
                    <div className={cx('side-bar-list-chat__item-content-text')}>
                        Noi dung chat dai dai dai dai dai dai dai dai dai daidj aod ia  dia 
                    </div>
                </div>
            </div>
            <div className={cx('side-bar-list-chat__item')}>
                <div className={cx('side-bar-list-chat__item-avatar')}>
                    <img src="https://via.placeholder.com/40" alt="avatar" />
                </div>
                <div className={cx('side-bar-list-chat__item-content')}>
                    <div className={cx('side-bar-list-chat__item-user-name')}>
                        Ten ban be
                    </div>
                    <div className={cx('side-bar-list-chat__item-content-text')}>
                        Noi dung chat dai dai dai dai dai dai dai dai dai daidj aod ia  dia 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SideBarListChat;