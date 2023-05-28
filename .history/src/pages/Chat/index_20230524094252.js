
import React from 'react';
import { useParams } from 'react-router-dom';

function Chat () {
    const { user, id } = useParams('user');
    return (
        <div>
            <h1>Chat</h1>
            <p>Chat with user: {user} - {id}</p>
        </div>
    )
}

export default Chat;