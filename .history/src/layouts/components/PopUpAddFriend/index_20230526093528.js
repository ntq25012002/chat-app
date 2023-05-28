import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./PopUpAddFriend.module.scss";

const cx = classNames.bind(styles);

function PopUpAddFriend({showModal, closeModal, children}) {
  
    return (
        <>
            { (showModal) && (
                <div className={cx('backdrop')}>
                    <div className={cx("popup-add-friend")}>
                        <div className={cx("popup-add-friend__content")}>
                            <div className={cx("popup-add-friend__content__title")}>
                                <span>Thêm bạn bè</span>
                                <div className={cx('icon-close')} onClick={closeModal}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div>
                            <div className={cx('popup-add-friend__form__search')}>
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
                            </div>
                            <ul className={cx("popup-add-friend__content-list-friend")}>
                                <li className={cx("popup-add-friend__content-friend-item")}>
                                    <div className={cx('popup-add-friend__content-friend-item-avatar')}>
                                        <img src="https://via.placeholder.com/40" alt="avatar" className={cx('friend-item-avatar')} />
                                        <span className={cx('friend-item-status', 'on')}></span>
                                    </div>
                                    <div className={cx("popup-add-friend__content-friend-item-name")}>
                                        <div className={cx('friend-item-name')}>
                                            Tên bạn bè nè !!!
                                        </div>
                                        <div className={cx('friend-item-status--text')}>
                                            Online
                                        </div>
                                    </div>
                                </li>

                                <li className={cx("popup-add-friend__content-friend-item")}>
                                    <div className={cx('popup-add-friend__content-friend-item-avatar')}>
                                        <img src="https://via.placeholder.com/40" alt="avatar" className={cx('friend-item-avatar')} />
                                        <span className={cx('friend-item-status', 'on')}></span>
                                    </div>
                                    <div className={cx("popup-add-friend__content-friend-item-name")}>
                                        <div className={cx('friend-item-name')}>
                                            Tên bạn bè nè !!!
                                        </div>
                                        <div className={cx('friend-item-status--text')}>
                                            Online
                                        </div>
                                    </div>
                                </li>

                                <li className={cx("popup-add-friend__content-friend-item")}>
                                    <div className={cx('popup-add-friend__content-friend-item-avatar')}>
                                        <img src="https://via.placeholder.com/40" alt="avatar" className={cx('friend-item-avatar')} />
                                        <span className={cx('friend-item-status')}></span>
                                    </div>
                                    <div className={cx("popup-add-friend__content-friend-item-name")}>
                                        <div className={cx('friend-item-name')}>
                                            Tên bạn bè nè !!!
                                        </div>
                                        <div className={cx('friend-item-status--text')}>
                                            Online
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            ) }
                
        </>
    );
}

export default PopUpAddFriend;