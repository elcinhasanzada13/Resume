import React from 'react'

const Skills = () => {
  return (
  <>
  <div className="resume-section p-3 p-lg-5 mt-5" id="skills">
  <h2 className="mb-4 blue">Technologies and Skills</h2>
  <div className="my-auto">
    <ul className="list-inline list-icons mb-4">
      <li className="list-inline-item">
      <i className="fa-brands fa-html5 fa-xl me-3"></i>
      </li>
      <li className="list-inline-item">
      <i className="fa-brands fa-css3-alt fa-xl me-3"></i>
      </li>
      <li className="list-inline-item">
      <i className="fa-brands fa-square-js fa-xl me-3"></i>
      </li>
      <li className="list-inline-item">
      <i className="fa-brands fa-bootstrap fa-xl me-3"></i>
      </li>
      <li className="list-inline-item">
      <i className="fa-brands fa-react fa-xl"></i>
      </li>
    </ul>
    <div id="skill-bars">
      <p className="text-left">HTML5 - 95%</p>
      <div className="progress mb-2" style={{height: '1.5rem'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}} />
      </div>
      <p className="text-left">CSS3 - 92%</p>
      <div className="progress mb-2" style={{height: '1.5rem'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{width: '92%'}} />
      </div>
      <p className="text-left">JavaScript - 70%</p>
      <div className="progress mb-2" style={{height: '1.5rem'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}} />
      </div>
      <p className="text-left">Bootstrap - 84%</p>
      <div className="progress mb-2" style={{height: '1.5rem'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow={84} aria-valuemin={0} aria-valuemax={100} style={{width: '84%'}} />
      </div>
      <p className="text-left">ReactJS - 80%</p>
      <div className="progress mb-5" style={{height: '1.5rem'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Skills