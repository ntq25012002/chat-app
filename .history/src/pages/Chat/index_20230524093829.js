
import React from 'react';
import { useParams } from 'react-router-dom';

function Chat () {
    const { username } = useParams('user');
    return (
        <div>
            <h1>Chat</h1>
            <p>Chat with user: {username}</p>
        </div>
    )
}

export default Chat;