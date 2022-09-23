import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Mailito() {

    function sendEmail(e) {
        e.preventDefault();


        emailjs.sendForm('service_mmmhvqv', 'template_2ir5xdq', e.target, '3QYdxORYCSZdMVVqX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


        setMailito({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    };



    const [mailito, setMailito] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function updateMessage(event) {
        const { name, value } = event.target;
        setMailito({
            ...mailito,
            [name]: value
        })

    }


    return (
        <div>


            <form onSubmit={sendEmail} >


                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" id="floatingName" 
                    placeholder="Name" 
                    style={{ backgroundColor: "rgba(0,0,0,0)", color: "#b6b6b6" }} 
                    onChange={updateMessage} 
                    value={mailito.name} 
                    required
                    />
                    <label htmlFor="floatingName">Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email"
                        className="form-control"
                        name="email" id="floatingEmail"
                        placeholder="name@example.com"
                        style={{ backgroundColor: "rgba(0,0,0,0)", color: "#b6b6b6" }}
                        onChange={updateMessage}
                        value={mailito.email}
                        required />
                    <label htmlFor="floatingEmail">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        name="subject" id="floatingSubject"
                        placeholder="Subject"
                        style={{ backgroundColor: "rgba(0,0,0,0)", color: "#b6b6b6" }}
                        onChange={updateMessage}
                        value={mailito.subject} />
                    <label htmlFor="floatingSubject">Subject</label>
                </div>

                <div className="form-floating mb-3">

                    <textarea
                        className="form-control"
                        id="floatingMessage"
                        rows="3"
                        placeholder="Message"
                        name="message"
                        style={{ height: '150px', resize: "none", backgroundColor: "rgba(0,0,0,0)", color: "#b6b6b6" }}
                        onChange={updateMessage}
                        value={mailito.message}
                    />
                    <label htmlFor="floatingMessage">Message</label>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-secondary btn-lg" style={{ height: "60px" }} >Contact Me</button>

                </div>



            </form>



        </div>
    );
}

export default Mailito;