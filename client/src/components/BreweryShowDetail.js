import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function BreweryShowDetail( {user} ) {
  const [brewery, setBrewery] = useState({})
  const [commentsArray, setCommentsArray] = useState([] || '')
  const [newComment, setNewComment] = useState('');

  const params = useParams();
  const { id, name, brewery_type, description, street, city, state, phone, website_url, image_url } = brewery;

  console.log(user.id)
  console.log("Comments Array: ", brewery.comments)


  useEffect(()=>{
    fetch(`/breweries/${params.id}`)
        .then(res => res.json())
        .then(data => {
    //  console.log(data)
    setBrewery(data)
    setCommentsArray(data.comments)
    })
  },[params.id])

  const postCommentSubmit = (e) => {
    e.preventDefault()

    let newBrewComment = {
      comment_body: newComment,
      user_id: user.id,
      brewery_id: id
    }

    fetch("/comments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
    body: JSON.stringify(newBrewComment)
    })
    .then(r=>r.json())
    .then(newBrewComment => {
      setCommentsArray([...commentsArray, newBrewComment ])
      console.log(newBrewComment)
      setNewComment("")

    })
  };

  const deleteComment = (commentId) => {
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
   }).then(()=> {
    let updatedCommentsArray = commentsArray.filter((comment) => comment.id !== commentId)
    setCommentsArray(updatedCommentsArray)
   })
  }

  return (
      <div className="h-100 gradient-custom-2">

    {/* <!--Main layout--> */}
    <main className="mt-4 mb-5">
      <div className="container">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!--Grid column--> */}
          <div className=" mb-4">
            {/* <!--Section: Post data-mdb--> */}
            <section className="border-bottom mb-4">
              <img src={image_url} className="thumbnail shadow-2-strong rounded-5 mb-4" alt={name} width="400px"/>
  
              <div className="row align-items-center mb-4">
                <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
    
                  <strong><h1><a href={website_url} className="text-dark">{name}</a></h1></strong>
                  <p className="address-line">{brewery_type}</p>
                  <p className="address-line">{street}</p>
                  <p className="address-line">{city}</p>
                  <p className="address-line">{state}</p>
                  <p className="address-line">{phone}</p>
                </div>
              </div>
            </section>
            {/* <!--Section: Post data-mdb--> */}
  
            {/* <!--Section: Text--> */}
      
            {/* <!--Section: About--> */}
            <section className="border-bottom mb-4 pb-4">
              <div className="row">
                <div className="col-3">
                  <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div className="col-9">
                  <p className="mb-2"><strong>About</strong></p>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </section>
  
            {/* <!--Section: Comments--> */}
            <section className="text-center border-top border-bottom py-4 mb-4">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6">
                <div className="card shadow-0 border" style={{"backgroundColor": "#f0f2f5"}}>
                  <div className="card-body p-4">
                  <div className="form-outline mb-4">
                  <form  onSubmit={postCommentSubmit}>
                    <input 
                      type="text" 
                      id="addANote" 
                      className="form-control" 
                      placeholder="Type comment..."
                      value={newComment}
                      onChange={(e)=> setNewComment(e.target.value)}
                    />
                    <label className="form-label" htmlFor="addANote">+ Add a note</label>
                  </form>
                </div>

                    {commentsArray.map(comment=> (
                      <div className="card mb-4" key={comment.id}>
                        <div className="card-body" >
                          <p>{comment.comment_body}</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <img src={comment.user.avatar || "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600" } alt="" width="25" height="25" />
                              <p className="small mb-0 ms-2">{comment.user.username}</p>
                            </div>
                            {user.id === comment.user_id
                            ?
                              <button type="button" className="btn btn-info btn-sm btn-floating" onClick={()=> deleteComment(comment.id)}>
                                <i className="far fa-trash-alt"></i>
                              </button>
                            :
                              ''
                            }
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              </div>
              </div>
              </div>
            </section>

          </div>
          {/* <!--Grid column--> */}
  
          {/* <!--Grid column--> */}
          <div className="col-md-4 mb-4">
            {/* <!--Section: Sidebar--> */}
            <section className="sticky-top" style={{"top": "80px"}}>
             

            </section>
            {/* <!--Section: Sidebar--> */}
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </div>
    </main>
    {/* <!--Main layout--> */}
    </div>
    )
} 

export default BreweryShowDetail;