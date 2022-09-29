import React from 'react';
// import { BreweryConsumer } from './context/BreweryContext';

function BreweryCard( {brewery} ) {
  const { id, name, city, image_url } = brewery;


  return(
<div className="card text-center">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img src={image_url} className="img-fluid" alt='brewery'/>
    <a href="#!">
      <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>

  <div className="card-body">
    <h5 className="card-title">{name} - {city}</h5>
    <a href={`/breweries/${id}`}>
    <button type="button" className="btn btn-primary">More</button>
    </a>
  </div>
</div>
  )
};

export default BreweryCard;