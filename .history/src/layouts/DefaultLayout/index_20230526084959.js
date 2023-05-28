import React from "react";
// import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/SideBar";
import PopUpAddFriend from "~/layouts/components/PopUpAddFriend";

function DefaultLayout({ children }) {

    return ( 
        <div className="wrapper">
            {/* <Header/> */}
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
               
            </div>

        </div>
     );
}

export default DefaultLayout;