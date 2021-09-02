import { useState } from "react"
import { useDispatch } from "react-redux"
import { createMessage } from "../../store/message"
import Errors from "../Errors"

function InboxMessageForm({conversation, user}){
    const [replyMessage, setReplyMessage] = useState('')
    const dispatch = useDispatch()

    const onSubmit = async (e, conversationId) => {
        e.preventDefault()
        const payload = {message: replyMessage, conversationId, userId: user?.id}
        const success = await dispatch(createMessage(payload))
        if (success) {
            setReplyMessage('')
        }
    }
    return(
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
    )
}


export default InboxMessageForm
