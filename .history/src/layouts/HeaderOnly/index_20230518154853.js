import React from "react";
import Header from '~/layouts/components/header/index';
import SideBar from "~/layouts/components/SideBar";


function DefaultLayout({children}) {
    return (
        <div className="wapper">
            <Header />
            <div className="container">
                <div className="content">

                </div>
            </div>
        </div>
    )
}