import React, { useState } from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard';


function Breweries( {user} ) {
  const [breweryQuery, setBreweryQuery] = useState('');
  // const filteredBreweryArray = !breweryQuery ? breweries : [...breweries].filter(brewery=>
  //   brewery.name.toLowerCase().includes(breweryQuery.toLocaleLowerCase()))

  const brewerySearchObj = {
    breweryQuery: breweryQuery
  }

  function onSearchClick() {
    // console.log(newObj)
    fetch('/brewery_search',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(brewerySearchObj)
      })
      .then(res => res.json())
      .then(res => {console.log(res)})
}

    return (
      <div className="h-100 gradient-custom-2">
      {/* <!------- SEARCH BAR ---------> */}
      <br/>
        <div className="input-group" style={{"width": "25rem"}}>
          <input 
            type="search" 
            className="form-control rounded" 
            placeholder="Search Breweries" 
            value={breweryQuery}
            onChange={(e) => setBreweryQuery(e.target.value)}
            aria-label="Search" 
            aria-describedby="search-addon" 
            />
          <button type="button" className="btn btn-outline-primary" onClick={onSearchClick}>Search</button>
        </div>

      <hr/>
        
      {user ? 
            <div>
            <div id="intro" className="p-5 text-center ">
              <h1 className="mb-3 h2">Local Breweries in Mississippi</h1>
              <p className="mb-3">Discover your next great southern brew</p>
            </div>
            <BreweryConsumer>
             {BreweryContext => 
                 <div>
                     {BreweryContext.map(brewery=> (
                         <BreweryCard brewery={brewery} key={brewery.id} /> )
                     )}
                 </div>
                }
            </BreweryConsumer>
            </div>
            :
            <div className="unauth-view-brew">Please Login or Sign up...</div>}
    </div>
  )
};

export default Breweries;