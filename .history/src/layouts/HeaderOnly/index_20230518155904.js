import React from "react";
import Header from '~/layouts/components/Header';

function HeaderOnly({children}) {
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

export default HeaderOnly;