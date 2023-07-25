import React from 'react'
import myPhoto from '../assets/img/myphoto.jpeg'
import Typewriter from 'typewriter-effect'

const Home = () => {
 
  return (
    <>
      <div id="home" className="hero d-flex align-items-center section-bg">
  <div className="container">
    <div className="row justify-content-between gy-5">
      <div className="left col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
        
        <span className='hello'><p data-aos="fade-up" className="aos-init aos-animate">Hello I'm</p></span>
        <div className='name mt-3'>
          <Typewriter 
          options={{
            autoStart: true,
            loop:true,
            delay:100,
            
            strings:[
              "Elchin Hasanzade",
              "Web Developer"
            ]
          }}
          />
        </div>
        <div className=" mt-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
          <div className="d-flex"><span className='me-2'><i className="fa-sharp fa-solid fa-envelope fa-beat-fade"></i></span><p>elchinhsnzada@gmail.com</p></div>
          <div className="d-flex"><span className='me-2'><i className="fa-sharp fa-solid fa-phone fa-beat-fade"></i></span><p>+994 50 669 92 88</p></div>
          <div className="d-flex"><span className='me-2'><i className="fa-brands fa-github fa-beat-fade"></i></span><a href='https://github.com/elcinhasanzada13'>elcinhasanzada13</a></div>
        </div>
      </div>
      <div className="photo col-lg-5 order-1 order-lg-2 text-center text-lg-start">
        <img src={myPhoto} className="img-fluid aos-init aos-animate" alt="" data-aos="zoom-out" data-aos-delay={300} />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home