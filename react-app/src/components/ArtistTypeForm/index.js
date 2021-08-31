import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from 'react'
import { allArtistTypes } from "../../store/artistType"
import { createArtistTypeList, deleteArtistTypeList, allArtistTypeLists } from "../../store/artistTypeList"
import './ArtistTypeForm.css'

function ArtistTypeForm({setArtistTypeButtonClicked, artistPageId}){
    const artistTypes = useSelector(state => state.artistTypeReducer.artistTypes)
    const typeList = useSelector(state => state.artistTypeListReducer.artistTypeLists)
    const myLists = typeList.filter(list => list.artistPageId === +artistPageId)

    const listFinder = (lists, id) => {
        if (lists.find(list => list?.artistTypeId === id)) {
            return true
        } else {
            return false
        }
    }

    const dispatch = useDispatch()
    const [checked0, setChecked0] = useState(listFinder(myLists, 1))
    const [checked1, setChecked1] = useState(listFinder(myLists, 2))
    const [checked2, setChecked2] = useState(listFinder(myLists, 3))
    const [checked3, setChecked3] = useState(listFinder(myLists, 4))
    const [checked4, setChecked4] = useState(listFinder(myLists, 5))
    const [checked5, setChecked5] = useState(listFinder(myLists, 6))
    const [checked6, setChecked6] = useState(listFinder(myLists, 7))
    const [checked7, setChecked7] = useState(listFinder(myLists, 8))
    const [checked8, setChecked8] = useState(listFinder(myLists, 9))
    const [checked9, setChecked9] = useState(listFinder(myLists, 10))

    const onSubmit = (e) => {
        e.preventDefault()
        const checks = [checked0, checked1, checked2, checked3, checked4, checked5, checked6, checked7, checked8, checked9]
        checks.forEach((check, idx) => {
            let payload = {'artistTypeId': idx + 1, artistPageId}
            let list = myLists.find(list => list['artistTypeId'] === idx + 1)
            if (check && !list) {
                dispatch(createArtistTypeList(payload))
            } else if (!check && list){
                dispatch(deleteArtistTypeList(list.id))
            }
        })
        setArtistTypeButtonClicked(false)
    }

    useEffect(() => {
        dispatch(allArtistTypes())
        dispatch(allArtistTypeLists())
    }, [dispatch])

    return (
        <form id='tag-form' onSubmit={onSubmit}>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked0}
                onChange={() => setChecked0(!checked0)}
                />
                <label key={artistTypes[0]?.id}> {artistTypes[0]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
                />
                <label key={artistTypes[1]?.id}> {artistTypes[1]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                />
                <label key={artistTypes[2]?.id}> {artistTypes[2]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked3}
                onChange={() => setChecked3(!checked3)}
                />
                <label key={artistTypes[3]?.id}> {artistTypes[3]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked4}
                onChange={() => setChecked4(!checked4)}
                />
                <label key={artistTypes[4]?.id}> {artistTypes[4]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked5}
                onChange={() => setChecked5(!checked5)}
                />
                <label key={artistTypes[5]?.id}> {artistTypes[5]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked6}
                onChange={() => setChecked6(!checked6)}
                />
                <label key={artistTypes[6]?.id}> {artistTypes[6]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked7}
                onChange={() => setChecked7(!checked7)}
                />
                <label key={artistTypes[7]?.id}> {artistTypes[7]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked8}
                onChange={() => setChecked8(!checked8)}
                />
                <label key={artistTypes[8]?.id}> {artistTypes[8]?.title}</label>
            </div>
            <div className='tag-form-div'>
                <input
                type='checkbox'
                checked={checked9}
                onChange={() => setChecked9(!checked9)}
                />
                <label key={artistTypes[9]?.id}> {artistTypes[9]?.title}</label>
            </div>
            <button className='tag-form-submit' type='submit'><i className="fas fa-plus"></i> Artist Tags</button>
        </form>
    )
}


export default ArtistTypeForm
