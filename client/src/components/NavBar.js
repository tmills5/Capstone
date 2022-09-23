import React from 'react';

function NavBar() {
    return(
        <>
          {/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{"zIndex": "2000"}}>
  <div className="container-fluid">
    {/* <!-- Navbar brand --> */}
    <a className="navbar-brand nav-link" href="/">
      <strong>MBH</strong>
    </a>
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarExample01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" aria-current="page" href="/breweries">Breweries</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/users/:id" rel="nofollow">User Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/logout">Logout</a>
        </li>
      </ul>

      <ul className="navbar-nav d-flex flex-row">
        {/* <!-- Icons --> */}
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="/">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav-item me-3 me-lg-0">
          <a className="nav-link" href="https://github.com/tmills5/Capstone" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
    </nav>
    </>
    )
};

export default NavBar;