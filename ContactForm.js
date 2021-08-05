import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const ContactForm = () => {
    return (
        <div className="container">
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius suscipit elit ac iaculis. Vestibulum sed vehicula enim. Mauris ac auctor ante. Mauris dolor enim, bibendum commodo ultricies et, consequat eu ipsum. Nulla quis augue tincidunt, mollis ipsum a, ultricies quam.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" />
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-contact btn-primary">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <FontAwesomeIcon icon={faMapMarker} />
                                <p>Hospitalet de Llobregat, C.P 08901, España</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <p>+34 631 314 597</p>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>shebiraaja@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default ContactForm
