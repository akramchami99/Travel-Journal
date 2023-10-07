import globe from '../assets/globe.svg'

export default function navbar(){
    return(
        <div className='nav--main'>
            <img src={globe} className="nav--globeicon"/>
            <h1 className="nav--title">my travel journal.</h1>
        </div>
    )

}