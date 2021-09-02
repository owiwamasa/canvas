import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allConversations } from '../../store/conversation'
import { allMessages, createMessage } from '../../store/message'
import { allUsers } from '../../store/user'
import './Inbox.css'

function Inbox({user}){
    const dispatch = useDispatch()
    const conversations = useSelector(state => state.conversationReducer.conversations).reverse()
    const messages = useSelector(state => state.messageReducer.messages)
    const users = useSelector(state => state.userReducer.users)
    const [replyMessage, setReplyMessage] = useState('')

    useEffect(() => {
        dispatch(allConversations())
        dispatch(allMessages())
        dispatch(allUsers())
    }, [dispatch])

    const onSubmit = async (e, conversationId) => {
        e.preventDefault()
        const payload = {message: replyMessage, conversationId, userId: user?.id}
        const success = await dispatch(createMessage(payload))
        if (success) {
            setReplyMessage('')
        }
    }

    return(
        <div>
            {conversations && conversations.map(conversation => {
                let convoMessages = messages.filter(message => message.conversationId === conversation?.id)
                return(
                    <div className='conversation' key={conversation?.id}>
                        <div className='messages-div'>
                        {convoMessages.map(message => (
                            <div className='message' key={message.id}>
                                <div className='message-user'>
                                    <div className='message-user-img'>
                                        <img src={message?.profilePic}/>
                                    </div>
                                    <div className='message-username'>{message?.username}</div>
                                </div>
                                <div className='message-message'>{message?.message}</div>
                            </div>
                        ))}
                        </div>
                        <form onSubmit={(e) => onSubmit(e, conversation?.id)} className='reply-form'>
                            <textarea
                            className='message-reply'
                            type='text'
                            value={replyMessage}
                            onChange={(e) => setReplyMessage(e.target.value)}
                            />
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                )
            })}

        </div>
    )
}


export default Inbox
