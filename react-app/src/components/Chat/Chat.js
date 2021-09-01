import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
import './Chat.css'
let socket;

const Chat = ({artist}) => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [room, setRoom] = useState('')
    const [search, setSearch] = useState('')
    const [selectedUser, setSelectedUser] = useState('')
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.userReducer.users)
    const searchUsers = users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
    const receiver = users.find(user => user?.username === artist?.username)

    useEffect(() => {
        socket = io();

        // socket.on('join', (join) => {
        //     setRoom()
        // })

        socket.on("chat", (chat) => {
            setMessages(messages => [...messages, chat])
        })

        socket.emit('join', { sender: user.username, receiver, room})

        return (() => {
            socket.disconnect()
        })
    }, [])

    const sendChat = (e) => {
        e.preventDefault()
        setRoom(`${user?.id}${receiver?.id}room`)
        // socket.emit calls 'chat' in backend
        socket.emit("chat", { sender: user.username, msg: chatInput, receiver: artist});
        setChatInput("")
    }

    return (user && (
        <div>
            <form onSubmit={sendChat}>
            <div className='chat-messages'>
                {messages.map((message, idx) => (
                    <div className='chat-single-message' key={idx}>{`${message.sender}: ${message.msg}`}</div>
                ))}
            </div>
                {/* <div className='chat-send-to-input'>
                    <label>Send to: </label>
                    <input
                    placeholder='Username'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className='chat-search-results-div'>
                    {(search && search !== selectedUser) &&
                    <select
                    className='chat-search-results'
                    size={searchUsers + 1}
                    onChange={(e) => {
                    setSearch(e.target.value)
                    setSelectedUser(e.target.value)}}>
                        <option>---Select a User---</option>
                        {searchUsers.map(user => (
                            <option key={user.id}>{user.username}</option>
                        ))}
                    </select>
                    }
                </div> */}
                <input
                className='chat-textarea'
                type='text'
                placeholder='Write a message...'
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                />
                <button className='chat-submit-btn' type="submit">Send</button>
            </form>
        </div>
    )
    )
};


export default Chat;
