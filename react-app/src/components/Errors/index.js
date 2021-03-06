import {useSelector} from 'react-redux'

const Errors = () =>{
    const errors = useSelector((state) => state.errorReducer);

    return(
        <div className='form-errors' id='form-errors'>
            { errors?.map((errors,idx) => (
                <div className="error" key={idx}>
                    {errors}
                </div>
            ))}
        </div>
    )
}

export default Errors
