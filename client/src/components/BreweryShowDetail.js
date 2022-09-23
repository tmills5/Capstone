import React, { useState, useEffect } from 'react';
// import { useParams} from 'react-router-dom';

function BreweryShowDetail() {


    return (
      <>
      {/* <!-- Jumbotron --> */}
      <div id="intro" class="p-5 text-center bg-light">
        <h1 class="mb-0 h4">This will be the name of the brewery</h1>
      </div>
      {/* <!-- Jumbotron --> */}
  
    {/* <!--Main Navigation--> */}
  {/* 
    <!--Main layout--> */}
    <main class="mt-4 mb-5">
      <div class="container">
        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!--Grid column--> */}
          <div class=" mb-4">
            {/* <!--Section: Post data-mdb--> */}
            <section class="border-bottom mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
                class="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />
  
              <div class="row align-items-center mb-4">
                <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" class="rounded-5 shadow-1-strong me-2"
                    height="35" alt="" loading="lazy" />
                  <span> Published <u>15.07.2020</u> by</span>
                  <a href="" class="text-dark">Anna</a>
                </div>
  
                <div class="col-lg-6 text-center text-lg-end">
                  <button type="button" class="btn btn-primary px-3 me-1" style={{"background-color": "#3b5998"}}>
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" class="btn btn-primary px-3 me-1" style={{"background-color": "#55acee"}}>
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button type="button" class="btn btn-primary px-3 me-1" style={{"background-color": "#0082ca"}}>
                    <i class="fab fa-linkedin"></i>
                  </button>
                  <button type="button" class="btn btn-primary px-3 me-1">
                    <i class="fas fa-comments"></i>
                  </button>
                </div>
              </div>
            </section>
            {/* <!--Section: Post data-mdb--> */}
  
            {/* <!--Section: Text--> */}
            <section>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente molestias
                consectetur. Fuga nulla officia error placeat veniam, officiis rerum laboriosam
                ullam molestiae magni velit laborum itaque minima doloribus eligendi! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Optio sapiente molestias consectetur.
                Fuga nulla officia error placeat veniam, officiis rerum laboriosam ullam molestiae
                magni velit laborum itaque minima doloribus eligendi!
              </p>
  
              <p><strong>Optio sapiente molestias consectetur?</strong></p>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto ex ab aut
                tempora officia libero praesentium, sint id magnam eius natus unde blanditiis. Autem
                adipisci totam sit consequuntur eligendi.
              </p>
  
              <p class="note note-light">
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Optio odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint,
                adipisci ad veritatis laborum eaque illum saepe mollitia ut voluptatum.
              </p>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero repellat
                molestiae aperiam laborum aliquid atque magni nostrum, inventore perspiciatis
                possimus quia incidunt maiores molestias eaque nam commodi! Magnam, labore.
              </p>
  
              <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="img-fluid shadow-1-strong rounded-5 mb-4"
                alt="" />
  
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Amet</li>
              </ul>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla
                voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab
                officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?
              </p>
            </section>
            {/* <!--Section: Text--> */}
  
            {/* <!--Section: Share buttons--> */}
            <section class="text-center border-top border-bottom py-4 mb-4">
              <p><strong>Share with your friends:</strong></p>
  
              <button type="button" class="btn btn-primary me-1" style={{"background-color": "#3b5998"}}>
                <i class="fab fa-facebook-f"></i>
              </button>
              <button type="button" class="btn btn-primary me-1" style={{"background-color": "#55acee"}}>
                <i class="fab fa-twitter"></i>
              </button>
              <button type="button" class="btn btn-primary me-1" style={{"background-color": "#0082ca"}}>
                <i class="fab fa-linkedin"></i>
              </button>
              <button type="button" class="btn btn-primary me-1">
                <i class="fas fa-comments me-2"></i>Add comment
              </button>
            </section>
            {/* <!--Section: Share buttons--> */}
  
            {/* <!--Section: Author--> */}
            <section class="border-bottom mb-4 pb-4">
              <div class="row">
                <div class="col-3">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                    class="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div class="col-9">
                  <p class="mb-2"><strong>Anna Maria Doe</strong></p>
                  <a href="" class="text-dark"><i class="fab fa-facebook-f me-1"></i></a>
                  <a href="" class="text-dark"><i class="fab fa-twitter me-1"></i></a>
                  <a href="" class="text-dark"><i class="fab fa-linkedin me-1"></i></a>
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
            <section class="border-bottom mb-3">
              <p class="text-center"><strong>Comments: 3</strong></p>
  
              {/* <!-- Comment --> */}
              <div class="row mb-4">
                <div class="col-2">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                    class="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div class="col-10">
                  <p class="mb-2"><strong>Marta Dolores</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
  
              {/* <!-- Comment --> */}
              <div class="row mb-4">
                <div class="col-2">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                    class="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div class="col-10">
                  <p class="mb-2"><strong>Valeria Groove</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>
  
              {/* <!-- Comment --> */}
              <div class="row mb-4">
                <div class="col-2">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                    class="img-fluid shadow-1-strong rounded-5" alt="" />
                </div>
  
                <div class="col-10">
                  <p class="mb-2"><strong>Antonia Velez</strong></p>
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
              <p class="text-center"><strong>Leave a reply</strong></p>
  
              <form>
                {/* <!-- Name input --> */}
                <div class="form-outline mb-4">
                  <input type="text" id="form4Example1" class="form-control" />
                  <label class="form-label" for="form4Example1">Name</label>
                </div>
  
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form4Example2" class="form-control" />
                  <label class="form-label" for="form4Example2">Email address</label>
                </div>
  
                {/* <!-- Message input --> */}
                <div class="form-outline mb-4">
                  <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                  <label class="form-label" for="form4Example3">Text</label>
                </div>
  
                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Publish
                </button>
              </form>
            </section>
            {/* <!--Section: Reply--> */}
          </div>
          {/* <!--Grid column--> */}
  
          {/* <!--Grid column--> */}
          <div class="col-md-4 mb-4">
            {/* <!--Section: Sidebar--> */}
            <section class="sticky-top" style={{"top": "80px"}}>
             

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
} export default BreweryShowDetail;


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


// <div className='section'>
// <div className='container'>
// <div class="card">
// <div class="card-image">
// <figure class="image is-4by3">
// <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
// </figure>
// </div>
// <div class="card-content">
// <div class="media">
// <div class="media-left">
//   <figure class="image is-48x48">
//     <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
//   </figure>
// </div>
// <div class="media-content">
//   <p class="title is-4">{name}</p>
//   <p class="subtitle is-6">{street}
//   <br/>
//   {city}, {state}
//   </p>
//   <p>{phone}</p>        
//   <p>Brewery Type: {brewery_type}</p>
// </div>
// </div>

// <div class="content">
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Phasellus nec iaculis mauris.
// <br/>
// <a href={website_url}>{website_url}</a>
// </div>
// </div>
// <article class="message">
// <div class="message-body">
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