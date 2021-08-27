import './CompletedArt.css'

function CompletedArt({completedArtwork}){
    return (
        <div className='job-card-artwork'>
                    <img src={completedArtwork} alt='completed artwork'/>
        </div>
    )
}


export default CompletedArt
