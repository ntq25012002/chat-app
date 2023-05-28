import React from "react";
import Header from '~/layouts/components/Header';

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