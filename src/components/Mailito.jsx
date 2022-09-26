import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Modal from "./Modal";
import { useModal } from "../hooks/useModal"


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

        openModalMail()
    };

    const[isOpenMail, openModalMail, closeModalMail] = useModal(false)

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
                    <button type="submit" className="btn btn-secondary btn-lg" style={{ height: "60px" }}  >Contact Me</button>
                </div>
            </form>







            <Modal isOpen={isOpenMail} closeModal={closeModalMail}  >
                <div className="card" style={{ width: " 18rem", backgroundColor: "black" }} >
                    <div className="card-body">
                        <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16" style={{ color: "blue" }}>
                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg></h5>
                        <h6 className="card-subtitle mb-3" style={{color:"white"}}  >Mensaje enviado</h6>
                        <p className="card-text">Nos estaremos comunicando a la brevedad.</p>
                        <button className="btn btn-secondary" onClick={()=>closeModalMail()}>aceptar</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Mailito;