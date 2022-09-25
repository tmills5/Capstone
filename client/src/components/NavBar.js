import React from 'react';

function NavBar({ user, setUser }) {
  
  const logout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(()=>{
        setUser()
      }
      );
  }

    return(


  //       <>
  //         {/* <!-- Navbar --> */}
  // <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{"zIndex": "2000"}}>
  // <div className="container-fluid">
  //   {/* <!-- Navbar brand --> */}
  //   <a className="navbar-brand nav-link" href="/">
  //     <strong>MBH</strong>
 
  //   </a>
  //   <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
  //     aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
  //     <i className="fas fa-bars"></i>
  //   </button>
  //   <div className="collapse navbar-collapse" id="navbarExample01">
  //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //       <li className="nav-item active">
  //         <a className="nav-link" aria-current="page" href="/breweries">Breweries</a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="/users/:id" rel="nofollow">User Profile</a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="/logout" onClick={logout}>Logout</a>
  //       </li>
  //     </ul>

  //     <ul className="navbar-nav d-flex flex-row">
  //       {/* <!-- Icons --> */}
  //       <li className="nav-item me-3 me-lg-0">
  //         <a className="nav-link" href="/">
  //           <i className="fab fa-youtube"></i>
  //         </a>
  //       </li>
  //       <li className="nav-item me-3 me-lg-0">
  //         <a className="nav-link" href="/">
  //           <i className="fab fa-facebook-f"></i>
  //         </a>
  //       </li>
  //       <li className="nav-item me-3 me-lg-0">
  //         <a className="nav-link" href="/">
  //           <i className="fab fa-twitter"></i>
  //         </a>
  //       </li>
  //       <li className="nav-item me-3 me-lg-0">
  //         <a className="nav-link" href="https://github.com/tmills5/Capstone" target="_blank" rel="noreferrer">
  //           <i className="fab fa-github"></i>
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  //   </nav>
  //   </>

  // -------------------------------new navbar-----------------
<>
  {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <!-- Container wrapper --> */}
  <div class="container">
    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand me-2" href="/landing_page">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style={{"margin-top": "-1px"}}
      />
    </a>

    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/breweries">Breweries</a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i></a>
      </div>
    </div>
    {/* <!-- Collapsible wrapper --> */}
  </div>
  {/* <!-- Container wrapper --> */}

</nav>
{/* <!-- Navbar --> */}
</>

    )
};

export default NavBar;