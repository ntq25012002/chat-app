import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import styles from "./PopUpAddFriend.module.scss";

const cx = classNames.bind(styles);

function PopUpAddFriend() {
    return (
        <div className={cx('backdrop')}>
            <div className={cx("popup-add-friend")}>
                <div className={cx("popup-add-friend__content")}>
                    <div className={cx("popup-add-friend__content__title")}>
                        <span>Thêm bạn bè</span>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    {/* <div className={cx("popup-add-friend__content__text")}>
                        Add a friend to your friends list
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default PopUpAddFriend;