import React, { useState } from 'react';

function SignUp( {setUser} ) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault()

      let user = {
        email: email,
        username: username,
        first_name: userFirstName,
        last_name: userLastName,
        avatar: avatar,
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
      setUserFirstName('');
      setUserLastName('');
      setAvatar('');
      setPassword('');
  }

  return (
  <>
    <div id="signup-intro" className="bg-image shadow-2-strong">
      <div className="mask d-flex align-items-center h-100" style={{"backgroundColor": "rgba(0, 0, 0, 0.8)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <form className="bg-white  rounded-5 shadow-5-strong p-5">
                <h4>Sign up to start exploring!</h4>
              {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="form1Example" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example1">Email address</label>
                </div>
                {/* <!-- First name input --> */}
                <div className="form-outline mb-4">
                  <input type="text" id="form1ExampleFirst" className="form-control" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example1">First Name</label>
                </div>
                {/* <!-- Last name input -->  */}
                <div className="form-outline mb-4">
                  <input type="text" id="form1ExampleLast" className="form-control" value={userLastName} onChange={(e) => setUserLastName(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example1">Last Name</label>
                </div>
                {/* <!-- Username input --> */}
                <div className="form-outline mb-4">
                  <input type="text" id="form1ExampleUser" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example1">Username</label>
                </div>
                {/* <!-- Avatar input --> */}
                <div className="form-outline mb-4">
                  <input type="text" id="form1ExampleUser" className="form-control" value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example1">Avatar</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="form1ExamplePW" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>
                <hr/>
                <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    )
};

export default SignUp;





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
//     <div classNameName="container is-fluid">
//       <div classNameName="notification is-primary">
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