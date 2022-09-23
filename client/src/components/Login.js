import React from 'react';

function Login() {
    return (
    <>
              {/* <!--Main Navigation--> */}
        <header>

     {/* <!-- Background image --> */}
    <div id="login-intro" class="bg-image shadow-2-strong">
      <div class="mask d-flex align-items-center h-100" style={{"background-color": "rgba(0, 0, 0, 0.8)"}}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <form class="bg-white  rounded-5 shadow-5-strong p-5">
                <h4>Welcome Back...</h4>
                {/* <!-- Username input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form1Example1" class="form-control" />
                  <label class="form-label" for="form1Example1">Username</label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example2" class="form-control" />
                  <label class="form-label" for="form1Example2">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                {/* <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                  </div>
                </div> */}

                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                <hr/>
                <div class="col text-center">
                  {/* <!-- Simple link --> */}
                  <a href="/signup">...or sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* <!-- Background image --> */}
  </header>
  {/* <!--Main Navigation--> */}
    </>
    )
};

export default Login;