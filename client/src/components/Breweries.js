import React from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard';


function Breweries( {user} ) {

    return (
      <>
      {/* <!------- SEARCH BAR ---------> */}

      <br/>
            <div class="container-fluid">
              <form class="d-flex input-group w-auto">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text text-white border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </form>
            </div>

      <hr/>
        
      {user ? 
            <>
            <div id="intro" className="p-5 text-center bg-light">
              <h1 className="mb-3 h2">Local Breweries in Mississippi</h1>
              <p className="mb-3">Discover your next great southern brew</p>
            </div>
            <BreweryConsumer>
             {BreweryContext => 
                 <>
                     {BreweryContext.map(brewery=> (
                         <BreweryCard brewery={brewery}/> )
                     )}
                 </>
                }
            </BreweryConsumer>
            </>
            :
            <div className="unauth-view-brew">Please Login or Sign up...</div>}
          
        
  </>
// -------------------------------------------------------

// {/* <>
//       {user ? 
//     <>
//         {/* <!-- Jumbotron --> */}
//         <div id="intro" classNameName="p-5 text-center bg-light">
//           <h1 classNameName="mb-3 h2">Local Breweries in Mississippi</h1>
//           <p classNameName="mb-3">Discover your next great southern brew</p>
//         </div>
//         {/* <!-- Jumbotron --> */}
   
//        {/* <!--Main Navigation-->
    
//        <!--Main layout--> */}
//       <main classNameName="my-5">
//         <div classNameName="container">
//           {/* <!--Section: Content--> */}
//           <section classNameName="text-center">
//             <h4 classNameName="mb-5"><strong>Latest Breweries</strong></h4>
//     {/* Add search function here  */}
//             <div classNameName="row">
//               <div classNameName="col-lg-4 col-md-12 mb-4">
//                 <div classNameName="card">
//                   <div classNameName="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" classNameName="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div classNameName="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div classNameName="card-body">
//                     <h5 classNameName="card-title">Post title</h5>
//                     <p classNameName="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="/breweries/:id" classNameName="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div>
    
//               {/* <div classNameName="col-lg-4 col-md-6 mb-4">
//                 <div classNameName="card">
//                   <div classNameName="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" classNameName="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div classNameName="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div classNameName="card-body">
//                     <h5 classNameName="card-title">Post title</h5>
//                     <p classNameName="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" classNameName="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
    
//               {/* <div classNameName="col-lg-4 col-md-6 mb-4">
//                 <div classNameName="card">
//                   <div classNameName="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" classNameName="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div classNameName="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div classNameName="card-body">
//                     <h5 classNameName="card-title">Post title</h5>
//                     <p classNameName="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" classNameName="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
    
//             {/* <div classNameName="row">
//               <div classNameName="col-lg-4 col-md-12 mb-4">
//                 <div classNameName="card">
//                   <div classNameName="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" classNameName="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div classNameName="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div classNameName="card-body">
//                     <h5 classNameName="card-title">Post title</h5>
//                     <p classNameName="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" classNameName="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
    
//               {/* <div classNameName="col-lg-4 col-md-6 mb-4">
//                 <div classNameName="card">
//                   <div classNameName="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" classNameName="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div classNameName="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div classNameName="card-body">
//                     <h5 classNameName="card-title">Post title</h5>
//                     <p classNameName="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" classNameName="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
    
//               {/* <div classNameName="col-lg-4 col-md-6 mb-4">
//                 <div classNameName="card">
//                   <div classNameName="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" classNameName="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div classNameName="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div classNameName="card-body">
//                     <h5 classNameName="card-title">Post title</h5>
//                     <p classNameName="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" classNameName="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </section>
//           {/* <!--Section: Content--> */}
    
//           {/* <!-- Pagination --> */}
//           <nav classNameName="my-4" aria-label="...">
//             <ul classNameName="pagination pagination-circle justify-content-center">
//               <li classNameName="page-item">
//                 <a classNameName="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
//               </li>
//               <li classNameName="page-item"><a classNameName="page-link" href="#">1</a></li>
//               <li classNameName="page-item active" aria-current="page">
//                 <a classNameName="page-link" href="#">2 <span classNameName="sr-only">(current)</span></a>
//               </li>
//               <li classNameName="page-item"><a classNameName="page-link" href="#">3</a></li>
//               <li classNameName="page-item">
//                 <a classNameName="page-link" href="#">Next</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </main>
//        {/* <!--Main layout--> */}
// {/* --------VERY BOTTOM ---------------*/}
// </>
// :

//   <div>Please Login or Sign up...</div>}

// </> */}

    )
};

export default Breweries;