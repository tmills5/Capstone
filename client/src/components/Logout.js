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
      
                  <a className="btn btn-outline-light btn-lg m-2" href="/" role="button"
                    rel="nofollow">Mention a new brewery</a>
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
            {/* <!--Section: Content--> */}
            <section>
              <div className="row">
                <div className="col-md-6 gx-5 mb-4 d-lg-flex align-items-center">
                  <div>
                    <h4><strong>Didn't mean to logout..<br/>Log back in ➡️ </strong></h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                      eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                      sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                    </p>
                  </div>
                </div>
      
                <div className="col-md-6 gx-5 mb-4">
                  <form>
                    {/* <!-- Name input --> */}
                    <div className="form-outline mb-4">
                      <input type="text" id="form5Example1" className="form-control" />
                      <label className="form-label" htmlFor="form5Example1">Name</label>
                    </div>
      
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form5Example2" className="form-control" />
                      <label className="form-label" htmlFor="form5Example2">Email address</label>
                    </div>
      
                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </section>
            {/* <!--Section: Content--> */}
          </div>
        </main>
        {/* <!--Main layout--> */}
      
        </>
    );
};

export default Logout;