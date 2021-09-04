import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import Errors from "../Errors"
import { createJob } from '../../store/job';
import "react-datepicker/dist/react-datepicker.css";
import './CreateJobForm.css'

function CreateJobForm({setShowModal, artistId}){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);


    const createOneJob = async (e) => {
        e.preventDefault()
        const job = {title, description, dueDate: dueDate.toString(), userId: user.id, artistId}

        const success = await dispatch(createJob(job))
        if (success) {
            setShowModal(false)
            setTitle('')
            setDescription('')
            setDueDate(null)
        }
    }

    return(
        <form onSubmit={createOneJob}>
            <div className='form-header'>Send Work Request</div>
            <Errors />
            <div className='form-input work-form-input'>
                <input
                type='text'
                value={title}
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='form-input'>
                <textarea
                type='text'
                value={description}
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-input datepicker-wrapper'>
                <DatePicker className='work-datepicker'
                calendarClassName='datepicker-calendar'
                selected={dueDate}
                minDate={new Date()}
                onChange={(date) => setDueDate(date)} />
            </div>
            <button className='form-submit'>Submit</button>
        </form>
    )
}


export default CreateJobForm
