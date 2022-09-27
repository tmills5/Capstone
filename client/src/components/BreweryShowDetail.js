import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function BreweryShowDetail() {
  const [brewery, setBrewery] = useState({})
  const params = useParams();
  const { name, brewery_type, street, city, state, phone, website_url, image_url } = brewery 

  useEffect(()=>{
    fetch(`/breweries/${params.id}`)
        .then(res => res.json())
        .then(data => {
   console.log(data)
    setBrewery(data)
    })
},[params.id])

    return (
      <>
      {/* <!-- Jumbotron --> */}
      <div id="intro" className="p-5 text-center bg-light">
        <h1 className="mb-0 h4">{name}</h1>
      </div>
      {/* <!-- Jumbotron --> */}
  
    {/* <!--Main Navigation--> */}
  {/* 
    <!--Main layout--> */}
    <main className="mt-4 mb-5">
      <div className="container">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!--Grid column--> */}
          <div className=" mb-4">
            {/* <!--Section: Post data-mdb--> */}
            <section className="border-bottom mb-4">
              <img src={image_url}
                className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />
  
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
{/*   
                <div className="col-lg-6 text-center text-lg-end">
                  <button type="button" className="btn btn-primary px-3 me-1" style={{"backgroundColor-color": "#3b5998"}}>
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" className="btn btn-primary px-3 me-1" style={{"backgroundColor-color": "#55acee"}}>
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-primary px-3 me-1" style={{"backgroundColor-color": "#0082ca"}}>
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button type="button" className="btn btn-primary px-3 me-1">
                    <i className="fas fa-comments"></i>
                  </button>
                </div> */}
              </div>
            </section>
            {/* <!--Section: Post data-mdb--> */}
  
            {/* <!--Section: Text--> */}
            <section>

            </section>
            {/* <!--Section: Text--> */}
  
            {/* <!--Section: Share buttons--> */}
            <section className="text-center border-top border-bottom py-4 mb-4">
              <p><strong>Share with your friends:</strong></p>
  
              <button type="button" className="btn btn-primary me-1">
                <i className="fas fa-comments me-2"></i>Add comment
              </button>
            </section>
            {/* <!--Section: Share buttons--> */}
  
            {/* <!--Section: Author--> */}
            <section className="border-bottom mb-4 pb-4">
              <div className="row">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                    className="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div className="col-9">
                  <p className="mb-2"><strong>Anna Maria Doe</strong></p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
            </section>
            {/* <!--Section: Author--> */}
  
            {/* <!--Section: Comments--> */}
            <section className="border-bottom mb-3">
              <p className="text-center"><strong>Comments: 3</strong></p>
  
              {/* <!-- Comment --> */}
              <div className="row mb-4">
                <div className="col-2">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                    className="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div className="col-10">
                  <p className="mb-2"><strong>Marta Dolores</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
  
              {/* <!-- Comment --> */}
              <div className="row mb-4">
                <div className="col-2">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                    className="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div className="col-10">
                  <p className="mb-2"><strong>Valeria Groove</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
  
              {/* <!-- Comment --> */}
              <div className="row mb-4">
                <div className="col-2">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                    className="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div className="col-10">
                  <p className="mb-2"><strong>Antonia Velez</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
            </section>
            {/* <!--Section: Comments--> */}
  
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
    </>
    )
} 

export default BreweryShowDetail;


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