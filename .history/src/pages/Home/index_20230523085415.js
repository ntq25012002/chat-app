import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from'react-toastify';

function Home() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const infoUser = useSelector((state) => state.user.user);

    const showToastMessage = () => {
        toast.success('Successfully logged in', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
   
    return (
        <div>
            <h1>Home</h1>
            <button onClick={showToastMessage()}>Show Toast</button>
            <ToastContainer />
        </div>
    );
}

export default Home;