import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function BreweryShowDetail( {user} ) {
  const [brewery, setBrewery] = useState({})
  const [commentsArray, setCommentsArray] = useState([])
  const [newComment, setNewComment] = useState('');

  const params = useParams();
  const { id, name, brewery_type, street, city, state, phone, website_url, image_url } = brewery 
console.log(commentsArray)



  useEffect(()=>{
    fetch(`/breweries/${params.id}`)
        .then(res => res.json())
        .then(data => {
   console.log(data)
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





   const adminDeleteComment = (commentId) => {
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
   }).then(()=> {
    let updatedCommentsArray = commentsArray.filter((comment) => comment.id !== commentId)
    setCommentsArray(updatedCommentsArray)
   })
   }

    return (
      <div className="h-100 gradient-custom-2">
      {/* <!-- Jumbotron --> */}
      <div id="intro" className="p-5 text-center bg-light">
        <h1 className="mb-0 h4">{name}</h1>
      </div>
      {/* <!-- Jumbotron --> */}

   
    {/* <!--Main layout--> */}
    <main className="mt-4 mb-5">
      <div className="container">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!--Grid column--> */}
          <div className=" mb-4">
            {/* <!--Section: Post data-mdb--> */}
            <section className="border-bottom mb-4">
              <img 
                src={image_url} 
                className="thumbnail shadow-2-strong rounded-5 mb-4" alt="" />
  
              <div className="row align-items-center mb-4">
                <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                  <img src={image_url} className="rounded-5 shadow-1-strong me-2"
                    height="35" alt="" loading="lazy" />
    
                  <a href={website_url} className="text-dark">{name}</a>
                  <p>{brewery_type}</p>
                  <p>{street}</p>
                  <p>{city}</p>
                  <p>{state}</p>
                  <p>{phone}</p>
                </div>
              </div>
            </section>
            {/* <!--Section: Post data-mdb--> */}
  
            {/* <!--Section: Text--> */}
      
            {/* <!--Section: About--> */}
            <section className="border-bottom mb-4 pb-4">
              <div className="row">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                    className="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div className="col-9">
                  <p className="mb-2"><strong>About</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
            </section>
  
            {/* <!--Section: Comments--> */}
            <section className="text-center border-top border-bottom py-4 mb-4">
            <div class="row d-flex justify-content-center">
  <div class="col-md-8 col-lg-6">
    <div class="card shadow-0 border" style={{"backgroundColor": "#f0f2f5"}}>
      <div class="card-body p-4">
        <div class="form-outline mb-4">
          <form  onSubmit={postCommentSubmit}>
          <input 
            type="text" 
            id="addANote" 
            class="form-control" 
            placeholder="Type comment..."
            
            value={newComment}
            onChange={(e)=> setNewComment(e.target.value)}
            />
          <label class="form-label" for="addANote">+ Add a note</label>
          </form>
        </div>

        
          {commentsArray.map(comment=> (

            <div class="card mb-4">
                      <div class="card-body" key={comment.id}>
            <p>{comment.comment_body}</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <img src={comment.commenter_avatar || "https://img.freepik.com/premium-photo/funny-gorilla-drinking-beer-bar-illustration_691560-326.jpg?size=338&ext=jpg&ga=GA1.2.2004300630.1664376118"} alt="avatar" width="25"
                  height="25" />
                <p class="small mb-0 ms-2">{comment.commenter_name}</p>
              </div>
              {user.is_admin ? 
                <button type="button" class="btn btn-info btn-sm btn-floating" onClick={()=> adminDeleteComment(comment.id)}>
                  <i class="far fa-trash-alt"></i>
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
  

  


            {/* <!--Section: Reply--> */}
            <section>

            
            </section>
            {/* <!--Section: Reply--> */}
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




// <>
// {/* <!--Section: Comments--> */}
// <section className="border-bottom mb-3">
// {/* <p className="text-center"><strong>Comments: </strong></p> */}
  
 

//   {/* <!-- Comment --> */}
//   <div className="row mb-4">
// {commentsArray.map(comment=> (
// <>               
//     <div className="col-2">

//       <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
//         className="img-fluid shadow-1-strong rounded-5" alt="" />
//     </div>

//     <div className="col-10">
      
//       <p>
//         {comment.comment_body}
//         <p className="mb-2"><strong>-name</strong></p>
//       </p> 
//     </div>  
// </>              
// ))}                  
    
//   </div>


// </section>
// {/* <!--Section: Comments--> */}
// </>


// const [brewery, setBrewery] = useState({})
// const params = useParams();
// const { id, name, brewery_type, street, city, state, phone, website_url } = brewery 

// useEffect(()=>{
//     fetch(`/breweries/${params.id}`)
//         .then(res => res.json())
//         .then(data => {
//    console.log(data)
//     setBrewery(data)
//     })
// },[params.id])


// <div classNameName='section'>
// <div classNameName='container'>
// <div className="card">
// <div className="card-image">
// <figure className="image is-4by3">
// <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
// </figure>
// </div>
// <div className="card-content">
// <div className="media">
// <div className="media-left">
//   <figure className="image is-48x48">
//     <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
//   </figure>
// </div>
// <div className="media-content">
//   <p className="title is-4">{name}</p>
//   <p className="subtitle is-6">{street}
//   <br/>
//   {city}, {state}
//   </p>
//   <p>{phone}</p>        
//   <p>Brewery Type: {brewery_type}</p>
// </div>
// </div>

// <div className="content">
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Phasellus nec iaculis mauris.
// <br/>
// <a href={website_url}>{website_url}</a>
// </div>
// </div>
// <article className="message">
// <div className="message-body">
// {/* Comments: {brewery.comments.map(comment => (
//     <>
//       <li key={comment.id}>{comment.comment_body}<button>Edit</button></li>
//     </>
//       ))} */}
// </div>
// </article>
// </div>
// </div>
// </div>




              
  
              // {/* <!-- Comment --> */}
              // <div className="row mb-4">
              //   <div className="col-2">
              //     <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
              //       className="img-fluid shadow-1-strong rounded-5" alt="" />
              //   </div>
  
              //   <div className="col-10">
              //     <p className="mb-2"><strong>Valeria Groove</strong></p>
              //     <p>
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
              //       inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
              //       Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
              //     </p>
              //   </div>
              // </div>
  
              // {/* <!-- Comment --> */}
              // <div className="row mb-4">
              //   <div className="col-2">
              //     <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
              //       className="img-fluid shadow-1-strong rounded-5" alt="" />
              //   </div>
  
              //   <div className="col-10">
              //     <p className="mb-2"><strong>Antonia Velez</strong></p>
              //     <p>
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
              //       inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
              //       Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
              //     </p>
              //   </div>
              // </div> 