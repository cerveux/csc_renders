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
                openModalMail();
            }, (error) => {
                console.log(error.text);
                openModalError();
            });

        setMailito({
            name: "",
            email: "",
            subject: "",
            message: ""
        })


    };

    const [isOpenMail, openModalMail, closeModalMail] = useModal(false);
    const [isOpenError, openModalError, closeModalError] = useModal(false);

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

            <form onSubmit={sendEmail}  autoComplete="off" >

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

                <div className="form-floating mb-3 pruebaemail">
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
                        <h5 className="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16" style={{ color: "blue" }}>
                                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                        </h5>
                        <h6 className="card-subtitle mb-3" style={{ color: "white" }}  >Mensaje enviado</h6>
                        <p className="card-text">Nos estaremos comunicando a la brevedad.</p>
                        <button className="btn btn-secondary" onClick={() => closeModalMail()}>aceptar</button>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={isOpenError} closeModal={closeModalError}  >
                <div className="card" style={{ width: " 18rem", backgroundColor: "black" }} >
                    <div className="card-body">
                        <h5 className="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-wrench-adjustable" viewBox="0 0 16 16" style={{ color: "red" }}>
                                <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z" />
                                <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                        </h5>
                        <h6 className="card-subtitle mb-3" style={{ color: "white" }}  >Tuvimos un error</h6>
                        <p className="card-text">Por favor, vuelva a intentarlo más tarde o envienos un mensaje via whatsapp</p>
                        <button className="btn btn-secondary" onClick={() => closeModalError()}>aceptar</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Mailito;