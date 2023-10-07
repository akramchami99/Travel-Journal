import location from '../assets/location.svg'

export default function Journal(props){

    return(
        <section className="journal">
            <img src={props.imageUrl} className="jrnl--img"/>
            <div className="jrnl--location">
                <img src={location} className="loc-icon"/>
                {props.location}
                <a href={props.googleMapsUrl} className="jrnl--link"> View on Google Maps </a>
            </div>
            <div className="jrnl--title">{props.title}</div>
            <div className="jrnl--dates">{props.startDate} - {props.endDate}</div>
            <div className="jrnl--desc">{props.description}</div>
        </section>
    )
}