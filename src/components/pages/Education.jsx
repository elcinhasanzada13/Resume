import React from 'react'
import data from '../data/Edu'
import cer from '../data/Cer'


const Education = () => {
    return (
        <>
            <div className="container mt-5" id='education'>
                <div className="education row gap-5 ms-3 mt-3 d-flex justify-content-center align-items-start">
                    <h1 className='text-center'style={{color:"#0BBBA0"}}>Education</h1>
                    {data.map((data, i) => {
                        return (
                            <div key={i} className="card" style={{ width: '28rem',height:'12rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{data.specialty}</h6>
                                    <p className="card-text">{data.degree}</p>
                                    <p className="card-text">{data.year}</p>
                                    
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className="education row ms-3 mt-5 d-flex justify-content-center align-items-start">
                    <h1 className='text-center' style={{color:"#0BBBA0"}}>Certificate</h1>
                    {cer.map((cer, i) => {
                        return (
                            <div key={i} className="card" style={{ width: '28rem', height:'12rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{cer.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{cer.specialty}</h6>
                                    <p className="card-text">{cer.year}</p>
                                    
                                </div>
                            </div>

                        )
                    })}
                </div>
                
            </div>
        </>
    )
}

export default Education