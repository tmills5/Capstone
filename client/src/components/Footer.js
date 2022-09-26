import React from 'react';

function Footer( { user } ) {
    return (
        <>
        {/* <!--Footer--> */}
<footer className="bg-light text-lg-start">
  <hr className="m-0" />

  <div className="text-center py-4 align-items-center">
    <p>Follow MississippiBrewHouse on social media</p>
    <a href="/" className="btn btn-primary m-1" role="button"
      rel="nofollow" target="_blank">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="/" className="btn btn-primary m-1" role="button" rel="nofollow">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="/" className="btn btn-primary m-1" role="button" rel="nofollow">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://github.com/tmills5/Capstone" className="btn btn-primary m-1" role="button" rel="noreferrer"
      target="_blank">
      <i className="fab fa-github"></i>
    </a>
  </div>

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a className="text-dark" href="https://tmillsdev.ghost.io" target="_blank" rel="noreferrer"> TmillsDev</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!--Footer--> */}
        </>
    )
};

export default Footer;