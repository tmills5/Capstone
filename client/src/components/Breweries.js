import React from 'react';
import { BreweryConsumer } from './context/BreweryContext';
import BreweryCard from './BreweryCard';





function Breweries( {user} ) {
    return (

        <>
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
            <div>Please Login or Sign up...</div>}
            
        </>
// -------------------------------------------------------

// {/* <>
//       {user ? 
//     <>
//         {/* <!-- Jumbotron --> */}
//         <div id="intro" className="p-5 text-center bg-light">
//           <h1 className="mb-3 h2">Local Breweries in Mississippi</h1>
//           <p className="mb-3">Discover your next great southern brew</p>
//         </div>
//         {/* <!-- Jumbotron --> */}
   
//        {/* <!--Main Navigation-->
    
//        <!--Main layout--> */}
//       <main className="my-5">
//         <div className="container">
//           {/* <!--Section: Content--> */}
//           <section className="text-center">
//             <h4 className="mb-5"><strong>Latest Breweries</strong></h4>
//     {/* Add search function here  */}
//             <div className="row">
//               <div className="col-lg-4 col-md-12 mb-4">
//                 <div className="card">
//                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">Post title</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="/breweries/:id" className="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div>
    
//               {/* <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="card">
//                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">Post title</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" className="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
    
//               {/* <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="card">
//                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">Post title</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" className="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
    
//             {/* <div className="row">
//               <div className="col-lg-4 col-md-12 mb-4">
//                 <div className="card">
//                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">Post title</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" className="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
    
//               {/* <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="card">
//                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">Post title</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" className="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
    
//               {/* <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="card">
//                   <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                     <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" alt=''/>
//                     <a href="#!">
//                       <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
//                     </a>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">Post title</h5>
//                     <p className="card-text">
//                       Some quick example text to build on the card title and make up the bulk of the
//                       card's content.
//                     </p>
//                     <a href="#!" className="btn btn-primary">Read</a>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </section>
//           {/* <!--Section: Content--> */}
    
//           {/* <!-- Pagination --> */}
//           <nav className="my-4" aria-label="...">
//             <ul className="pagination pagination-circle justify-content-center">
//               <li className="page-item">
//                 <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
//               </li>
//               <li className="page-item"><a className="page-link" href="#">1</a></li>
//               <li className="page-item active" aria-current="page">
//                 <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="page-item"><a className="page-link" href="#">3</a></li>
//               <li className="page-item">
//                 <a className="page-link" href="#">Next</a>
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