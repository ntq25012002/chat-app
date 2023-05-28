import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarListChat.module.scss';

const cx = classNames.bind(styles);

function SideBarListChat() {
    return (
        <div className={cx('side-bar-list-chat')}>
            <div className={cx('side-bar-list-chat__item')}>
                <div className={cx('side-bar-list-chat__item-avatar')}>
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
                <div className={cx('side-bar-list-chat__item-content')}>
                    <div className={cx('side-bar-list-chat__item-content-text')}>
                        <div className={cx('side-bar-list-chat__item-content-text-title')}>
                            <div className={cx('side-bar-list-chat__item-content-text-title-icon')}>
                                <img src="https://via.placeholder.com/150" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}