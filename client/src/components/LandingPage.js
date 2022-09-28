import React, { useState } from 'react';


function LandingPage( {errors, setErrors} ) {
  const [subscriberFirstname, setSubscriberFirstName] = useState('')
  const [subscriberLastname, setSubscriberLastName] = useState('')
  const [subscriberEmail, setSubscriberEmail] = useState('')


  function newsletterSubmit(e){
    e.preventDefault()

      let subscriber = {
        first_name: subscriberFirstname,
        last_name: subscriberLastname,
        email: subscriberEmail
      }
     
      fetch(`/newsletters`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(subscriber)
      })
      .then(res => res.json())
      .then(userEnteredJson => {
        console.log(userEnteredJson)
        // setUser(userEnteredJson)
        if(userEnteredJson.errors) setErrors(Object.entries(userEnteredJson.errors))
      })
      console.log(errors)
      
      setSubscriberFirstName('');
      setSubscriberLastName('');
      setSubscriberEmail('')
  }

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
      <h4 className="mb-5"><strong>Popular MS Breweries</strong></h4>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="http://www.natchezbrew.com/uploads/2/8/0/5/28052945/published/two-tone-roughlogo-round.png?1575504924" className="img-fluid" alt=''/>
              <a href="http://www.natchezbrew.com/home.html">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Natchez Brewing Co.</h5>
              <p className="card-text">
              Natchez Brewing Company is located at 207 High Street, in historic downtown Natchez, Mississippi. Natchez is known as the oldest established city on the Mississippi River, and the hub of the steamboat era. We are proud of our city, proud of our mighty river, and proud to be brewing the first "Natchez" beer that will be for distribution. 
              </p>
              <a href="/breweries/12" className="btn btn-primary">See More...</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://static.wixstatic.com/media/56d62e_b4fe66bd59f94057a09dae04addb72c6~mv2.jpg/v1/crop/x_211,y_0,w_5041,h_8192/fill/w_240,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9K7A1449.jpg" className="img-fluid" alt=''/>
              <a href="http://www.soprobrewing.com">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Southern Prohibition</h5>
              <p className="card-text">
              We’re thrilled to bring our customers the best of the best, and continually try different approaches to keep our brews fresh and unique. To learn more, keep browsing through our site or stop by for a visit.              </p>
              <a href="/breweries/14" className="btn btn-primary">See more...</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://images.squarespace-cdn.com/content/v1/62c45e3a53800b2476927a98/1658369792517-LAVTKG06ZWOA2QOTT0KX/IMG_5004.JPG?format=750w" className="img-fluid" alt=''/>
              <a href="http://www.lazymagnolia.com">
                <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Lazy Magnolia</h5>
              <p className="card-text">
              Our first brews were crafted under the shade of ‘lazy’ magnolia trees in the backyard. In 2005 we opened Mississippi’s first packaging brewery since prohibition. Our flagship ‘Southern Pecan’ Brown Ale has been enjoyed by tens of thousands, allowing us to grow Mississippi's craft beer culture, one beer at a time.   
              </p>
              <a href="/breweries/8" className="btn btn-primary">See More...</a>
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
                  <input type="text" id="form3Example1" className="form-control" value={subscriberFirstname} onChange={(e) => setSubscriberFirstName(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example1">First name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" value={subscriberLastname} onChange={(e) => setSubscriberLastName(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example2">Last name</label>
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" value={subscriberEmail} onChange={(e) => setSubscriberEmail(e.target.value)}/>
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={newsletterSubmit}>
              Subscribe
            </button>
            {<p style={{ color: "red" }}>{errors.map(error=> <li>{error}</li>)}</p>}
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
