import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allConversations } from '../../store/conversation'
import { allMessages, createMessage } from '../../store/message'
import { allUsers } from '../../store/user'
import './Inbox.css'
import Errors from '../Errors'

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
            {conversations.length ? conversations.map(conversation => {
                let convoMessages = messages.filter(message => message.conversationId === conversation?.id).reverse()
                let sender = users.find(user => user?.id === conversation?.userId)
                let receiver = users.find(user => user?.id === conversation?.artistId)
                console.log(sender)
                return(
                    <div className='conversation' key={conversation?.id}>
                        {conversation?.userId === user?.id ?
                        <div className='message-header'>To: {receiver?.username}
                            <div className='message-header-img'>
                                <img src={receiver?.profilePic} alt='profile'/>
                            </div>
                        </div>
                        :
                        <div className='message-header'>From: {sender?.username}
                            <div className='message-header-img'>
                                <img src={sender?.profilePic} alt='profile'/>
                            </div>
                        </div>
                        }
                        <div className='messages-div'>
                        {convoMessages.map(message => (
                            (message?.userId !== user?.id ?
                            <div className='message' key={message.id}>
                                <div className='message-user'>
                                    <div className='message-user-img'>
                                        <img src={message?.profilePic} alt='profile'/>
                                    </div>
                                    <div className='message-username'>{message?.username}</div>
                                </div>
                                <div className='message-message'>{message?.message}</div>
                            </div>
                            :
                            <div className='message-from-user' key={message.id}>
                                <div className='message-message'>{message?.message}</div>
                                <div className='message-user-sent'>
                                    <div className='message-user-img'>
                                        <img src={message?.profilePic} alt='profile'/>
                                    </div>
                                    <div className='message-username'>{message?.username}</div>
                                </div>
                            </div>
                            )
                        ))}
                        </div>
                        <form onSubmit={(e) => onSubmit(e, conversation?.id)} className='reply-form'>
                            <Errors />
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
            }):
            <div className='no-messages'>No Messages :(</div>
            }

        </div>
    )
}


export default Inbox
