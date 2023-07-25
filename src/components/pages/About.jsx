import React from 'react'
import abimg from '../assets/img/ab-img.png'
import cv from '../assets/img/ElcinCV.pdf'
const About = () => {
  return (
    <>
      <div className="mh-about" id="about">
  <div className="container">
    <div className="row section-separator">
      <div className="col-sm-12 col-md-6">
        <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" style={{visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
          <img src={abimg} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="mh-about-inner">
          <h2 className="text-center wow fadeInUp mb-4" data-wow-duration="0.8s" data-wow-delay="0.1s" style={{visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.1s', animationName: 'fadeInUp', color:'#0BBBA0'}}>About Me</h2>
          <p className="wow fadeInUp mb-4" data-wow-duration="0.8s" data-wow-delay="0.2s" style={{visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.2s', animationName: 'fadeInUp'}}>Hello, I’m a Elchin, web-developer based on Baku.
            I am good at</p>
          <div className="mh-about-tag wow fadeInUp mb-5" data-wow-duration="0.8s" data-wow-delay="0.3s" style={{visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
            <ul>
              <li className='me-1'><span>HTML</span></li>
              <li className='me-1'><span>Scss</span></li>
              <li className='me-1'><span>Bootstrap</span></li>
              <li className='me-1'><span>React</span></li>
              <li className='me-1'><span>JQuery</span></li>
              <li><span>JavaScript</span></li>
            </ul>
          </div>
          <div className="my-cv">
          <a className='cv' href={cv} download="CV">
            Download CV <span className='ms-2'><i className="fa-solid fa-download fa-bounce"></i></span>
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default About