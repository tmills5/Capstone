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
    <div id="login-intro" className="bg-image shadow-2-strong">
      <div className="mask d-flex align-items-center h-100" style={{"backgroundColor": "rgba(0, 0, 0, 0.8)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <form className="bg-white  rounded-5 shadow-5-strong p-5">
                <h4>Welcome Back...</h4>
                {/* <!-- Username input --> */}
                <div className="form-outline mb-4">
                  <input type="text" id="form1Example1" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label className="form-label" htmlFor="form1Example1">Username</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="form1Example2" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                {/* <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                  </div>
                </div> */}

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block" onClick={onLoginSubmit}>Sign in</button>
                <hr/>
                <div className="col text-center">
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