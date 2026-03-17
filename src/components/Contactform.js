import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/ContactForm.scss";

const Contactform = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_3g2dtjj",
                "template_tx58loh",
                form.current,
                {
                    publicKey: "cS3VzNoZexZY_QDmB",
                }
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <section>
            <div className="form-wrapper" id="Contact">
                <div className="container">
                    <div className="form-heading">
                        <h3 className="section-title body-heading mb-0">
                            Let's Work Together
            </h3>
                    </div>

                    <form
                        ref={form}
                        className="contact-form"
                        onSubmit={sendEmail}
                    >
                        <div className="row">
                            <div className="col-md-6 mb-2 mb-md-4">
                                <div className="form-group">
                                    <label htmlFor="first_name" className="label">
                                        First Name
                  </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6 mb-2 mb-md-4">
                                <div className="form-group">
                                    <label htmlFor="last_name" className="label">
                                        Last Name
                  </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-2 mb-md-4">
                                <div className="form-group">
                                    <label htmlFor="email" className="label">
                                        Email
                  </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6 mb-2 mb-md-4">
                                <div className="form-group">
                                    <label htmlFor="subject" className="label">
                                        Subject
                  </label>
                                    <div className="select-wrap">
                                        <select
                                            id="subject"
                                            name="subject"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Subject
                      </option>
                                            <option value="Web Design Project">
                                                Web Design 
                      </option>
                                            <option value="UI/UX Design Project">
                                                UI/UX Design
                      </option>
                                            <option value="Frontend Development">
                                                Frontend Development
                      </option>
                                            <option value="Collaboration">
                                                Collaboration
                      </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="text-area">
                                <div className="form-group">
                                    <label htmlFor="message" className="label">
                                        Message
                  </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-btn text-center mt-3 mt-md-5">
                                <button type="submit">Hire Me</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactform;