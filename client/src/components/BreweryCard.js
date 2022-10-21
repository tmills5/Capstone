import React from 'react';
// import { BreweryConsumer } from './context/BreweryContext';
import {  MDBCard } from 'mdb-react-ui-kit';

function BreweryCard( {brewery} ) {
  const { id, name, city, image_url } = brewery;


  return(
<>

  <MDBCard className="card text-center">

  <div className="bg-image hover-overlay ripple rounded-circle" data-mdb-ripple-color="light">
    <img src={image_url} className="img-fluid" alt='brewery' style={{"height": "150px", "margin": "10px"}} />
      <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
  </div>

  <div className="card-body">
    <h5 className="card-title">{name} - {city}</h5>
    <a href={`/breweries/${id}`}>
    <button type="button" className="btn btn-primary">More</button>
    </a>
  </div>
  
  </MDBCard>
  
</>
  )
};

export default BreweryCard;