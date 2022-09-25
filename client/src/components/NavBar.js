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
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  {/* <!-- Container wrapper --> */}
  <div class="container">
    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand me-2" href="/">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MBH Logo"
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
          <a href="/login">
          Login
          </a>
        </button>
        <button type="button" class="btn btn-primary me-3" onClick={navigate("/signup")}>
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

 {/* --------------------NEWER NAVBAR-------------------------- */}
{/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-white">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div class="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <a class="link-secondary me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      {/* <!-- Notifications --> */}
      <div class="dropdown">
        <a
          class="link-secondary me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      {/* <!-- Avatar --> */}
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
</>
    )
};

export default NavBar;