import React from 'react';

        // <img src='https://images.pexels.com/photos/5935219/pexels-photo-5935219.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='goodbye toast'/>


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
                  <h3 id="time-counter" className="border border-light my-4 p-4"></h3>
      
                  <p>We're working hard to finish the development of this site.</p>
      
                  <p>Until then have a look at our Free Bootstrap 5 tutorials</p>
      
                  <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button"
                    rel="nofollow" target="_blank">Start tutorial</a>
                  <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank"
                    role="button">Download MDB UI KIT</a>
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
                    <h4><strong>Didn't mean to logout..<br/>Log back in---> </strong></h4>
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