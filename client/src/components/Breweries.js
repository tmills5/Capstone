import React from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

function Breweries( {user} ) {

  return (
    <div className="h-100 gradient-custom-2">
      <br/>
      {/* {user ?  */}
        <div>
              <div id="intro" className="p-5 text-center ">
                <h1 className="mb-3 h2">Local Breweries in Mississippi</h1>
                <p className="mb-3">Discover your next great southern brew</p>
              </div>

              <hr/>
  
              <MDBContainer>
                    <BreweryConsumer >
                      {BreweryContext => 
                        <MDBRow >
                          {BreweryContext.map(brewery=> (
                          <MDBCol className="col-xl-3 col-md-12 mb-4" key={brewery.id}>
                            <BreweryCard brewery={brewery} /> 
                          </MDBCol>)
                          )}
                        </MDBRow>
                      }
                    </BreweryConsumer>
              </MDBContainer>
       </div>
            {/* : */}
            {/* <div className="unauth-view-brew">Please Login or Sign up...</div>} */}
    </div>
  )
};

export default Breweries;