import React, {useState} from "react";
// import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/SideBar";
import PopUpAddFriend from "~/layouts/components/PopUpAddFriend";

function DefaultLayout({ children }) {
    const [showModal, setShowModal] = useState(false);
    

    return ( 
        <div className="wrapper">
            {/* <Header/> */}
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
                <div className="modal">
                    {showModal && <PopUpAddFriend />}
                    
                </div>
            </div>

        </div>
     );
}

export default DefaultLayout;