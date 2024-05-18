import React, { useState } from 'react';
import './qualifications.css';

const Qualifications = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="quali section">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My Personal Journey</span>

        <div className="quali-container container">
            <div className="quali-tabs">
                <div className={toggleState === 1 ? "quali-button quali-active button-flex" : "quali-button button-flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap quali-icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "quali-button quali-active button-flex" : "quali-button button-flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt quali-icon"></i> Experience
                </div>
            </div>

            <div className="quali-sections">


                <div className={toggleState === 1 ? "quali-content quali-content-active" : "quali-content"}>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">High School</h3>
                            <span className="quali-subtitle">Bishop George School - PrayagRaj</span>
                            <div className="quali-calendar">
                                <i className="uil uil--calendar-alt"></i>
                            </div>
                        </div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>



                    <div className="quali-data">
                        <div></div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>

                        <div>
                            <h3 className="quali-title">Intermediate</h3>
                            <span className="quali-subtitle">Mary Lucas College - Prayagraj</span>
                            <div className="quali-calendar">
                                <i className="uil uil--calendar-alt"></i>
                            </div>
                        </div>
                    </div>

                    
                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Under Graduation /BCA</h3>
                            <span className="quali-subtitle">D Y Patil International University - Pune</span>
                            <div className="quali-calendar">
                                <i className="uil uil--calendar-alt"></i>2021 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>


                </div>




                <div className={toggleState === 2 ? "quali-content quali-content-active" : "quali-content"}>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Web Developer</h3>
                            <span className="quali-subtitle">Weboin-company</span>
                            <div className="quali-calendar">
                                <i className="uil uil--calendar-alt"></i>8/2023 - 9/2023
                            </div>
                        </div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>



                    <div className="quali-data">
                        <div></div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>

                        <div>
                            <h3 className="quali-title">AWS</h3>
                            <span className="quali-subtitle">DYPIU-Pune</span>
                            <div className="quali-calendar">
                                <i className="uil uil--calendar-alt"></i>2020 - 2021
                            </div>
                        </div>
                    </div>

                    
                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Web Designer</h3>
                            <span className="quali-subtitle">Technook-india</span>
                            <div className="quali-calendar">
                                <i className="uil uil--calendar-alt"></i>8/2023 - 9/2023
                            </div>
                        </div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>



                    {/* ==== */}


                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications