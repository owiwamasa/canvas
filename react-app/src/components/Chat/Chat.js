import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createConversation } from "../../store/conversation";
import { createMessage } from "../../store/message";
import './Chat.css'
// import { io } from 'socket.io-client';
// let socket;

const Chat = ({artist, setShowModal}) => {
    const [chatInput, setChatInput] = useState("");
    // const [messages, setMessages] = useState([]);
    // const [room, setRoom] = useState('')
    // const [search, setSearch] = useState('')
    // const [selectedUser, setSelectedUser] = useState('')
    const user = useSelector(state => state.session.user)
    const users = useSelector(state => state.userReducer.users)
    const receiver = users.find(user => user?.username === artist?.username)
    const dispatch = useDispatch()


    // const searchUsers = users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
    // useEffect(() => {
    //     socket = io();

    //     socket.on('join', (join) => {
    //         setRoom()
    //     })

    //     socket.on("chat", (chat) => {
    //         setMessages(messages => [...messages, chat])
    //     })

    //     socket.emit('join', { sender: user.username, receiver, room})

    //     return (() => {
    //         socket.disconnect()
    //     })
    // }, [])

    const sendChat = async (e) => {
        e.preventDefault()

        const conversationPayload = {userId: user?.id, artistId: receiver?.id}
        const success = await dispatch(createConversation(conversationPayload))
        if (success) {
            const messagePayload = {message: chatInput, conversationId: success?.id, userId: user?.id}
            const messageSuccess = await dispatch(createMessage(messagePayload))
            if (messageSuccess){
                setShowModal(false)
                setChatInput('')
            }
        }
        // setRoom(`${user?.id}${receiver?.id}room`)
        // socket.emit calls 'chat' in backend
        // socket.emit("chat", { sender: user.username, msg: chatInput, receiver: artist});
        // setChatInput("")
    }

    return (user && (
        <div>
            <form onSubmit={sendChat}>
                <div className='form-header'>Send Message to {artist?.username}</div>
            {/* <div className='chat-messages'>
                {messages.map((message, idx) => (
                    <div className='chat-single-message' key={idx}>{`${message.sender}: ${message.msg}`}</div>
                ))}
            </div> */}
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
                <textarea
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
