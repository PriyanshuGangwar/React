import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from "../features/messagingSlice";

function MessagingApp() {
    const dispatch = useDispatch();
    const {list: messages, status } = useSelector((state) => state.messages)

    useEffect(() => {
        if(status == "idle"){
            dispatch(fetchMessages());
        }
    }, [status, dispatch]);

    console.log("messages", messages);
    return(
        <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
            <h2>📨 Messaging App</h2>
            <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10, height: 200, overflowY: 'auto' }}>
                {messages.map(msg => (
                <div key={msg.id} style={{ marginBottom: 10 }}>
                    <strong>{msg.sender}</strong>: {msg.content}
                </div>
                ))}
            </div>
        </div>
    )
}

export default MessagingApp;