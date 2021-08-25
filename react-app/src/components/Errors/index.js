import {useSelector} from 'react-redux'

const Errors = () =>{
    const errors = useSelector((state) => state.errorsReducer);

    return(
        <div className='form-errors'>
            { errors?.map((errors,idx) => (
                <div className="error" key={idx}>
                    {errors}
                </div>
            ))}
        </div>
    )
}

export default Errors
