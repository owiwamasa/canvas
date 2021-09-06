import { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from "react-datepicker";
import { editJob } from '../../store/job';
import './EditJobForm.css'
import "react-datepicker/dist/react-datepicker.css";

function EditJobForm({setShowModal, job}){
    const [title, setTitle] = useState(job?.title)
    const [description, setDescription] = useState(job?.description)
    const [dueDate, setDueDate] = useState(new Date())
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const editOneJob = async (e) => {
        e.preventDefault()
        const errs = []

        if (!title) errs.push('Title is required')
        if (title.length > 200) errs.push('Title must be less than 200 characters')
        if (!description) errs.push('Description is required')
        if (description.length > 500) errs.push('Description must be less than 500 characters')
        if (!dueDate) errs.push('Deadline is required')
        setErrors(errs)

        if (errs.length === 0) {
        const editedJob = {title, description, dueDate: dueDate?.toString() , userId: job.userId, artistId: job.artistId}
        const success = await dispatch(editJob(editedJob, job.id))
        if (success) {
            setShowModal(false)
        }
      }
    }
    return(
        <form onSubmit={editOneJob}>
            <div className='form-header'>Edit Work Request</div>
            {/* <Errors /> */}
            <div className='form-errors'>
                {errors && errors.map(err => (
                    <div className='error' key={err}>{err}</div>
                    ))}
            </div>
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
            <label className='datepicker-deadline'>Deadline: </label>
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
