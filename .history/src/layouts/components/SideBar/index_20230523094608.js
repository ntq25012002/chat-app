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
        <div className={cx('content')}>
            <h2></h2>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
     );
}

export default Sidebar;