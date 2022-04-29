import React from 'react';

function Card(props) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={props.item.imageUrl} alt='mount fuji, japan' className='image'/>
      </div>
      <div className='info-container'>
        <p id='location-items'>
          <img className='icon-location' src='./location-icon.png' alt='location-icon' />
          <span className='location'>{props.item.location}</span>
          <span className='view-location'><a href={props.item.googleMapsUrl} target="_blank" rel='noreferrer'>View on Google Maps</a></span>
        </p>
        <h1 className='title'>{props.item.title}</h1>
        <p className='date'>{props.item.startDate} - {props.item.endDate}</p>
        <p className='description'>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card