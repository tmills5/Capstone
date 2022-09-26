import React, { useState } from 'react';

function Login( {setUser, navigate} ) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const onLoginSubmit = (e) =>{
      e.preventDefault()
      let user = {
          username,
          password
      }

      fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(user => {
        setUser(user);

        
        // need the values from the object. user.error is an object but i need
        // it in an array
        if(user.error) setErrors(Object.values(user.error))
        // console.log(user.error)
      })

      // console.log(user.error)
      setUsername('');
      setPassword('');
      setErrors([]);

  }
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
                  <input type="text" id="form1Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label class="form-label" for="form1Example1">Username</label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example2" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label class="form-label" for="form1Example2">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                {/* <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                  </div>
                </div> */}

                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-primary btn-block" onClick={onLoginSubmit}>Sign in</button>
                <hr/>
                <div class="col text-center">
                  {/* <!-- Simple link --> */}
                  <a href="/signup">...or sign up</a>
                </div>
                {<p style={{ color: "red" }}>{errors}</p>}
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