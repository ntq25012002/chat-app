import React from 'react';
import { useSelector } from 'react-redux';
function Home() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const infoUser = useSelector((state) => state.user.user);
    console.log('isLoggedIn: ', isLoggedIn);
    console.log('user: ', user);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;