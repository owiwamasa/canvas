import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allArtistPages } from '../../store/artistPage'
import { allConversations } from '../../store/conversation'
import { allMessages } from '../../store/message'
import { allUsers } from '../../store/user'
import InboxMessageForm from '../InboxMessageForm'
import './Inbox.css'

function Inbox({user}){
    const dispatch = useDispatch()
    const conversations = useSelector(state => state.conversationReducer.conversations)
    const conversationsByTime = conversations.slice(0).reverse()
    const messages = useSelector(state => state.messageReducer.messages)
    const users = useSelector(state => state.userReducer.users)
    const artistPages = useSelector(state => state.artistPageReducer.artistPages)

    useEffect(() => {
        dispatch(allConversations())
        dispatch(allMessages())
        dispatch(allUsers())
        dispatch(allArtistPages())
    }, [dispatch])

    return(
        <div>
            {conversationsByTime.length ? conversationsByTime.map(conversation => {
                let convoMessages = messages.filter(message => message.conversationId === conversation?.id).reverse()
                let sender = users.find(user => user?.id === conversation?.userId)
                let receiver = users.find(user => user?.id === conversation?.artistId)
                let senderPageId = artistPages.find(artist => artist.userId === sender?.id)?.id
                let receiverPageId = artistPages.find(artist => artist.userId === receiver?.id)?.id
                return(
                    <div className='conversation' key={conversation?.id}>
                        {conversation?.userId === user?.id ?
                        <div className='message-header'>To: {receiver?.username}
                            <Link to={`/artist-pages/${receiverPageId}`}>
                                <div className='message-header-img'>
                                    <img src={receiver?.profilePic} alt='profile'/>
                                </div>
                            </Link>
                        </div>
                        :
                        <div className='message-header'>From: {sender?.username}
                            <Link to={`/artist-pages/${senderPageId}`}>
                                <div className='message-header-img'>
                                    <img src={sender?.profilePic} alt='profile'/>
                                </div>
                            </Link>
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
                                </div>
                            </div>
                            )
                        ))}
                        </div>
                        <InboxMessageForm user={user} conversation={conversation}/>
                    </div>
                )
            }):
            <div className='no-messages'>No Messages :(</div>
            }

        </div>
    )
}


export default Inbox
