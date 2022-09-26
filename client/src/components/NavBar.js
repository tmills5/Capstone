import React from 'react';

function NavBar({ user, setUser, navigate }) {
  
  const logout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(()=>{
        setUser()
      }
      );
  }

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">MBH</a>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <i className="fas fa-bars"></i>
              </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/breweries">Breweries</a>
                <a className="nav-link" href="/users/:id">Profile</a>
                <a className="nav-link" href="/logout" onClick={logout}>Logout</a>
              </div>
              <p>{user ? user.username : ''}</p>
            </div>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2" onClick={()=>navigate('/login')}>Login</button>
              <button type="button" className="btn btn-primary me-3" onClick={()=>navigate('/signup')}>Sign up for free</button>
              <a
                className="btn btn-dark px-3"
                href="https://github.com/tmills5/Capstone"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i></a>
            </div>
          </div>
        </nav>
      </>
    )
};

export default NavBar;