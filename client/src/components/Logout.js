import React from 'react';


function Logout() {


    return(
        <>
        <header>
          {/* <!-- Background image --> */}
          <div id="logout-intro" className="p-5 text-center bg-image shadow-1-strong" >
            <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.7)"}}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white px-4">
      
                  {/* <!-- Bye Message --> */}
                  <h3 className="border border-light my-4 p-4">...Come back Soon</h3>
      
                  <p>We're working hard to keep the site updated.</p>
      
                  <p>If you would like to submit other breweries, let the staff know!</p>
    
                  <a className="btn btn-outline-light btn-lg m-2" href="/" role="button">Home</a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Background image --> */}
        </header>
        {/* <!--Main Navigation--> */}
      
        {/* <!--Main layout--> */}
        <main className="mt-5">
          <div className="container">

          </div>
        </main>
        {/* <!--Main layout--> */}
      
        </>
    );
};

export default Logout;