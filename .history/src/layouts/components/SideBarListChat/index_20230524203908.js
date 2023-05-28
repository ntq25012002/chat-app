import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faThumbtack} from "@fortawesome/free-regular-svg-icons";

import styles from './SideBarListChat.module.scss';

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
                        <i className={cx('icon-thumb-tack')}>
                            <FontAwesomeIcon icon={faThumbtack} />
                        </i>
                        <i className={cx('icon-trash')}>
                            <FontAwesomeIcon icon={faTrash} />
                        </i>
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