import React, { useState } from 'react';
import { MDBInput, MDBModal } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

function EditUserProfile( {user, setUser, navigate} ) {
    const [formData, setFormData] = useState({user});

    const [errors, setErrors] = useState([])

console.log(user)

   function handleUpdateUser(e){
    e.preventDefault()

      let user = {
        email: formData.email,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
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
                  <MDBInput label="Email" type="email" value={user.email || ''} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                {/* <!-- First name input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="First Name" type="text" value={user.first_name || ''} onChange={(e) => setFormData({...formData, first_name: e.target.value})}/>
                </div>
                {/* <!-- Last name input -->  */}
                <div className="form-outline mb-4">
                  <MDBInput label="Last Name" type="text" value={user.last_name || ''} onChange={(e) => setFormData({...formData, last_name: e.target.value})}/>
                </div>
                {/* <!-- Username input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Username" type="text" value={user.username || ''} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                </div>
                {/* <!-- Avatar input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Avatar" type="text" value={user.avatar || ''} onChange={(e) => setFormData({...formData, avatar: e.target.value})}/>
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <MDBInput label="Password" type="current-password" value={user.password || ''} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                </div>

                {/* <hr/> */}
                <input type="submit" value="Update" />
                <span><Link to={`/users/${user.id}`}>cancel</Link></span>
                <br/>
                <hr/>
                <br/>
                <button 
                  type="button" 
                  className="btn btn-outline-danger" 
                  data-mdb-ripple-color="dark" 
                  onClick={handleDeleteUserAcct}
                  >Delete Account</button>
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