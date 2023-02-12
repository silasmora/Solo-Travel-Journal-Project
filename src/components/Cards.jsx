import React from "react"

export default function Cards(props) {
  return (
      <div className="card-container">
        <div>
          <img className="card-images" src={`./images/${props.data.imageUrl}`} />
        </div>
        <div className="info">
          <div className="first-layer">
            <img src="./images/Fill-219.png" />
            <h3 className="location-name">{props.data.location}</h3><a href={props.data.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="title-names">{props.data.title}</h1>
          <div className="second-layer">
            <h3>{props.data.startDate } -</h3>
            <h3> - {props.data.endDate}</h3>
          </div>
          <p className="description">{props.data.description}</p>
        </div>
      </div>
      
  )
}