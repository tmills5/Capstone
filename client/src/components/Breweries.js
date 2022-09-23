import React from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard';

        // <>
        //     {user ? 
        //     <BreweryConsumer>
        //      {BreweryContext => 
        //          <>
        //              {BreweryContext.map(brewery=> (
        //                  <BreweryCard brewery={brewery}/> )
        //              )}
        //          </>
        //         }
        //     </BreweryConsumer>
        //     :
        //     <div>Please Login or Sign up...</div>}
        // </>



function Breweries( {user} ) {
    return (
        <>
        {/* <!-- Jumbotron --> */}
        <div id="intro" class="p-5 text-center bg-light">
          <h1 class="mb-3 h2">Local Breweries in Mississippi</h1>
          <p class="mb-3">Discover your next great southern brew</p>
        </div>
        {/* <!-- Jumbotron --> */}
      {/* </header> */}
       {/* <!--Main Navigation-->
    
       <!--Main layout--> */}
      <main class="my-5">
        <div class="container">
          {/* <!--Section: Content--> */}
          <section class="text-center">
            <h4 class="mb-5"><strong>Latest Breweries</strong></h4>
    {/* Add search function here  */}
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" alt=''/>
                    <a href="#!">
                      <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="/breweries/:id" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>
    
              {/* <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" alt=''/>
                    <a href="#!">
                      <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div> */}
    
              {/* <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" alt=''/>
                    <a href="#!">
                      <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div>
            </div> */}
    
            {/* <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" class="img-fluid" alt=''/>
                    <a href="#!">
                      <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div> */}
    
              {/* <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" class="img-fluid" alt=''/>
                    <a href="#!">
                      <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div> */}
    
              {/* <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" class="img-fluid" alt=''/>
                    <a href="#!">
                      <div class="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Post title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                    </p>
                    <a href="#!" class="btn btn-primary">Read</a>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
          {/* <!--Section: Content--> */}
    
          {/* <!-- Pagination --> */}
          <nav class="my-4" aria-label="...">
            <ul class="pagination pagination-circle justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
       {/* <!--Main layout--> */}
      </>
    )
}

export default Breweries;