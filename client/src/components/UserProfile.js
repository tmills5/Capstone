import React from 'react';
import Login from "./Login"

function UserProfile( {user} ) {
console.log(user)
    return (
      
<section className="h-100 gradient-custom-2">
  {user ? 
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{"backgroundColor": "#000", "height": "200px"}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{"width": "150px"}}>
              <img src={user.avatar || "https://img.freepik.com/premium-photo/funny-gorilla-drinking-beer-bar-illustration_691560-326.jpg?size=338&ext=jpg&ga=GA1.2.2004300630.1664376118"}
                alt="Generic placeholder" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{"width": "150px", "zIndex": "1"}}/>
              <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{"zIndex": "1"}} >
                <a href={`/users/${user.id}/edit`}>Edit profile</a>
              </button>
            </div>
            <div className="ms-3" style={{"marginTop": "130px"}}>
              <h5>{user.username}</h5>
              <h6>{user.email}</h6>
            </div>
          </div>

          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">{user.first_name} {user.last_name}</p>
              <div className="p-4" style={{"backgroundColor": "#f8f9fa"}}>
                <p className="font-italic mb-1"><strong>Visited Breweries:</strong></p>
                {user.comments.map(comment=> (
                  <li key={comment.id}>{comment.brewery_name}</li>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">

            </div>
            <div className="row g-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  : <div className="unauth-view-brew">Please Login or Sign up...</div>}
</section>
    )
};

export default UserProfile;