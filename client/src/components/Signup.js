import React, { useState } from 'react';

function Signup( {setUser} ) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

   function onSubmit(e){
    e.preventDefault()

      let user = {
        email: email,
        username: username,
        password
      }
     
      fetch(`/users`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(userEnteredJson => {
        console.log(userEnteredJson)
        setUser(userEnteredJson)
        if(userEnteredJson.errors) setErrors(Object.entries(userEnteredJson.errors))
      })
      console.log(errors)
      setEmail('')
      setUsername('');
      setPassword('');
  }

    return (
    <>
              {/* <!--Main Navigation--> */}
        <header>

     {/* <!-- Background image --> */}
    <div id="intro" class="bg-image shadow-2-strong">
      <div class="mask d-flex align-items-center h-100" style={{"background-color": "rgba(0, 0, 0, 0.8)"}}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <form class="bg-white  rounded-5 shadow-5-strong p-5">
                <h4>Sign up to start exploring!</h4>
              {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form1Example" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label class="form-label" for="form1Example1">Email address</label>
                </div>
                {/* <!-- Username input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form1Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <label class="form-label" for="form1Example1">Username</label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input type="password" id="form1Example2" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <label class="form-label" for="form1Example2">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                {/* <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                  </div>
                </div> */}

                {/* <!-- Submit button --> */}
                
                <hr/>
                <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
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

export default Signup;





// import React, { useState } from "react";


// function Signup( {setUser} ) {
//   const [email, setEmail] = useState('')
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [errors, setErrors] = useState([])
  

//   function onSubmit(e){
//     e.preventDefault()

//       let user = {
//         email: email,
//         username: username,
//         password
//       }
     
//       fetch(`/users`,{
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(user)
//       })
//       .then(res => res.json())
//       .then(userEnteredJson => {
//         console.log(userEnteredJson)
//         setUser(userEnteredJson)
//         if(userEnteredJson.errors) setErrors(Object.entries(userEnteredJson.errors))
//       })
//       console.log(errors)
//       setEmail('')
//       setUsername('');
//       setPassword('');
//   }

//   return (
//     <div className="container is-fluid">
//       <div className="notification is-primary">
//         <h1>Sign Up!!</h1>
//         <form onSubmit={onSubmit} >
//           <input type="text" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input type="text" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
//           <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
//           <input type="submit" value="Sign up!" />
//         </form>
//         {errors.length > 0 && (
//           <ul style={{ color: "red" }}>
//             {errors.map((error) => (
//               <li key={error}>{error[1]}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <img src="https://images.pexels.com/photos/5055743/pexels-photo-5055743.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='cheers'/>
//     </div>
//   )
// }

// export default Signup;