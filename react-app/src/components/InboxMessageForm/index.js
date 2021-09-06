import { useState } from "react"
import { useDispatch } from "react-redux"
import { createMessage } from "../../store/message"

function InboxMessageForm({conversation, user}){
    const [replyMessage, setReplyMessage] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = async (e, conversationId) => {
        e.preventDefault()
        const errs = []
        if (!replyMessage) errs.push('Message is required')
        if (replyMessage.length > 500) errs.push('Message must be less than 500 characters')
        setErrors(errs)
        if (errs.length === 0){
        const payload = {message: replyMessage, conversationId, userId: user?.id}
        const success = await dispatch(createMessage(payload))
        if (success) {
            setReplyMessage('')
        }
      }
    }
    return(
        <div>
            <form onSubmit={(e) => onSubmit(e, conversation?.id)} className='reply-form'>
                <textarea
                className='message-reply'
                type='text'
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                />
                <button type='submit'>Send</button>
            </form>
            {errors && errors.map(err => (
                <div key={err} className='reply-errors'>
                    <div className='error'>{err}</div>
                </div>
            ))}
        </div>
    )
}


export default InboxMessageForm
