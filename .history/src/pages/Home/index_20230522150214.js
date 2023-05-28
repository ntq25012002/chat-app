import React from 'react';
import { useSelector } from 'react-redux';
function Home() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    console.log('isLoggedIn: ', isLoggedIn);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;