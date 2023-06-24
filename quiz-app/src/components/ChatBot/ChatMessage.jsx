import React from 'react';

export default function ChatMessage(props) {
    return (
        <div className={`response-content ${props.user && 'user-color'}`}>
        {
            props.user ? (
                <p>{props.message}</p>
            ) : (
                <p>{props.message}</p>
            )
        }
        </div>
    );
}