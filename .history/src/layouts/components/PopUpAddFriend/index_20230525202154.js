import React from "react";
import classNames from "classnames/bind";
import styles from "./PopUpAddFriend.module.scss";

const cx = classNames.bind(styles);

function PopUpAddFriend() {
    return (
        <div className={cx('bg-layout')}>
            <div className={cx("popup-add-friend")}>
                <div className={cx("popup-add-friend__content")}>
                    <div className={cx("popup-add-friend__content__title")}>
                        Add Friend
                    </div>
                    <div className={cx("popup-add-friend__content__text")}>
                        Add a friend to your friends list
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpAddFriend;