import React from "react";
import Header from '~/layouts/components/Header';
import { SideBar } from '~/layouts/components/SideBar';

function SideBarOnly({children}) {
    return (
        <div className="wapper">
            <div className="container">
                <div className="content">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default SideBarOnly;