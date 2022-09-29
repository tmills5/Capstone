import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

function EditUserProfile( {user, setUser, navigate} ) {
    const [formData, setFormData] = useState('')
    const [errors, setErrors] = useState([])

console.log(user)

   function handleUpdateUser(e){
    e.preventDefault()

      let user = {
        email: formData.email,
        username: formData.username,
        first_name: formData.userFirstName,
        last_name: formData.userLastName,
        avatar: formData.avatar,
        password: formData.password
      }
     
      fetch(`/users/${user.id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(userUpdatedJson => {
        console.log(userUpdatedJson)
        setUser(userUpdatedJson)
        if(userUpdatedJson.errors) setErrors(Object.entries(userUpdatedJson.errors))
      })
      console.log(errors)
    }

    const handleDeleteUserAcct = (id) => {
        fetch(`/users/${id}`, {
            method: 'DELETE',
            headers: {'Accept' : 'application/json'}
          })
          .then(()=> {setUser()})
          navigate('/')
    }


    return (
    <>
              {/* <!--Main Navigation--> */}
        <header>

     {/* <!-- Background image --> */}
    <div id="edit-userprofile-intro">
      <div className="mask d-flex align-items-center h-100" style={{"backgroundColor": "rgba(0, 0, 0, 0.8)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <form className="bg-white rounded-5 shadow-5-strong p-5" onSubmit={handleUpdateUser}>
                <h4>Update Your Profile...</h4>
              {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Email" type="email" defaultValue={user.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                {/* <!-- First name input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="First Name" type="text" defaultValue={user.first_name} onChange={(e) => setFormData({...formData, first_name: e.target.value})}/>
                </div>
                {/* <!-- Last name input -->  */}
                <div className="form-outline mb-4">
                  <MDBInput label="Last Name" type="text" defaultValue={user.last_name} onChange={(e) => setFormData({...formData, last_name: e.target.value})}/>
                </div>
                {/* <!-- Username input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Username" type="text" defaultValue={user.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                </div>
                {/* <!-- Avatar input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Avatar" type="text" defaultValue={user.avatar} onChange={(e) => setFormData({...formData, avatar: e.target.value})}/>
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Password" type="current-password" defaultValue={user.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                </div>

                {/* <hr/> */}
                <a href={`/users/${user.id}`}><input type="submit" value="Update" />
                <span><Link to={`/users/${user.id}`}>cancel</Link></span></a>
                <br/>
                <hr/>
                <br/>
                <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark" onClick={handleDeleteUserAcct}>Delete Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </header>
  {/* <!--Main Navigation--> */}
    </>
    )
};

export default EditUserProfile;





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