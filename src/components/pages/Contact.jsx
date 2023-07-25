import React, { useRef } from 'react'
import ContactData from '../data/Contactdata'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fb6re7v', 'template_ssxrwrs', form.current, 'nruYWEBcVl-jmEOFt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <>
            <div className="container mt-5" id='contact'>
                <div className="contact row gap-5 ms-3 mt-3 d-flex justify-content-center align-items-start">
                    <h1 className='text-center' style={{ color: "#0BBBA0" }}>Contact Me</h1>
                    {ContactData.map((contactdata, i) => {
                        return (
                            <div key={i} className="card" style={{ width: '20rem', height: '15rem' }}>
                                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                    <div className="icons"><h5 className="card-title">{contactdata.icon}</h5></div>
                                    <h6 className="mt-3 card-subtitle mb-2 text-body-secondary">{contactdata.name}</h6>
                                    <p className="card-text">{contactdata.text}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className="row mt-5 contact-us">
                    <div className="col-md-6 col-md-offset-3 ">
                        <div className="well well-sm">
                            <form ref={form}  onSubmit={sendEmail} className="form-horizontal" action="true" method="post">
                                <fieldset>
                                    {/* Name input*/}
                                    <div className="form-group mb-4">
                                        <div className="col-md-9">
                                            <input id="name" name="user_name" type="text" placeholder="Your name" className="form-control" />
                                        </div>
                                    </div>
                                    {/* Email input*/}
                                    <div className="form-group mb-4">
                                        <div className="col-md-9">
                                            <input id="email" name="user_email" type="text" placeholder="Your email" className="form-control" />
                                        </div>
                                    </div>
                                    {/* Message body */}
                                    <div className="form-group mb-4">
                                        <div className="col-md-9">
                                            <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows={5} defaultValue={""} />
                                        </div>
                                    </div>
                                    {/* Form actions */}
                                    <div className="form-group">
                                        <div className="col-md-12 text-right">
                                            <button type="submit" className="btn btn-lg">Send Message</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact