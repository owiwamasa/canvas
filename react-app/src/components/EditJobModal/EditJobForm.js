import { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from "react-datepicker";
import Errors from "../Errors"
import { editJob } from '../../store/job';
import './EditJobForm.css'
import "react-datepicker/dist/react-datepicker.css";

function EditJobForm({setShowModal, job}){
    const [title, setTitle] = useState(job?.title)
    const [description, setDescription] = useState(job?.description)
    const [dueDate, setDueDate] = useState(new Date())
    const dispatch = useDispatch()

    const editOneJob = async (e) => {
        e.preventDefault()
        const editedJob = {title, description, dueDate: dueDate.toString() , userId: job.userId, artistId: job.artistId}
        const success = await dispatch(editJob(editedJob, job.id))
        if (success) {
            setShowModal(false)
        }
    }
    return(
        <form onSubmit={editOneJob}>
            <div className='form-header'>Edit Work Request</div>
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
            <div className='form-input'>
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


export default EditJobForm
