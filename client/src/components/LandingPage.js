import React from 'react';


function LandingPage() {
    return (
        <>
    <header>

  {/* <!-- Background image --> */}
  <div id="landing-intro" className="bg-image shadow-2-strong">
    <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.8)"}}>
      <div className="container d-flex align-items-center justify-content-center text-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Mississippi BrewHouse</h1>
          <h5 className="mb-4">Explore and Learn about Mississippi's Local Breweries</h5>
          <a className="btn btn-outline-light btn-lg m-2" href="/login" role="button">Login</a>
          <a className="btn btn-outline-light btn-lg m-2" href="#newsletter-form" role="button">Join our newsletter!</a>
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
        <div className="col-md-6 gx-5 mb-4">
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
            <img src="https://images.unsplash.com/photo-1606608281523-1e5c227cd068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzc2lzc2lwcGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt=''/>
            <a href="#!">
              <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
            </a>
          </div>
        </div>

        <div className="col-md-6 gx-5 mb-4">
          <h4><strong>What we do here</strong></h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
          </p>
          <p><strong>Who doesn't like good beer?</strong></p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
            nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
            alias, unde optio accusantium soluta, iusto molestiae adipisci et?
          </p>
        </div>
      </div>
    </section>
    {/* <!--Section: Content--> */}

    <hr className="my-5" />

    {/* <!--Section: Content--> */}
    <section className="text-center">
      <h4 className="mb-5"><strong>Most Popular Breweries</strong></h4>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" alt=''/>
              <a href="#!">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="/breweries/:id" className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" alt=''/>
              <a href="#!">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="/breweries/:id" className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" alt=''/>
              <a href="#!">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="/breweries/:id" className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--Section: Content--> */}

    <hr className="my-5" />
{/* 
    <!--Section: Content--> */}
    <section className="mb-5">
      <h4 className="mb-5 text-center"><strong>Subscribe to our Newsletter!</strong></h4>

      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form id="newsletter-form">
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example1" className="form-control" />
                  <label className="form-label" htmlFor="form3Example1">First name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" />
                  <label className="form-label" htmlFor="form3Example2">Last name</label>
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Subscribe
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
    )
};

export default LandingPage;
