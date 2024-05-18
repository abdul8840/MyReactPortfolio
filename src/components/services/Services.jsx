import React, { useState } from 'react';
import './services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What I Offer</span>

        <div className="services-container container grid">

            <div className="services-content">
                <div>
                    <i className="uil uil-web-grid services-icon"></i>
                    <h3 className="services-title">Web <br /> Development</h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>

                <div className={toggleState === 1 ? "services-model active-modal" : "services-model"}>
                    <div className="services-modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

                        <h3 className="services-modal-title">Web Development</h3>
                        <p className="services-modal-description">Service with more than 2 years of experience.
                        Providing quality work to clients and companies.</p>

                        <ul className="services-modal-services">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I create UX element intraction.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I position your company brands.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-arrow services-icon"></i>
                    <h3 className="services-title">UI / UX <br /> Designer</h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>

                <div className={toggleState === 2 ? "services-model active-modal" : "services-model"}>
                    <div className="services-modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

                        <h3 className="services-modal-title">UI / UX Designer</h3>
                        <p className="services-modal-description">Service with more than 2 years of experience.
                        Providing quality work to clients and companies.</p>

                        <ul className="services-modal-services">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I create UX element intraction.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I position your company brands.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-edit services-icon"></i>
                    <h3 className="services-title">App <br /> Development</h3>
                </div>

                <span className="services-button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>

                <div className={toggleState === 3 ? "services-model active-modal" : "services-model"}>
                    <div className="services-modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

                        <h3 className="services-modal-title">App Development</h3>
                        <p className="services-modal-description">Service with more than 2 years of experience.
                        Providing quality work to clients and companies.</p>

                        <ul className="services-modal-services">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I create UX element intraction.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I position your company brands.
                                </p>
                            </li>

                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services