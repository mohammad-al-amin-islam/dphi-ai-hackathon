import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../../../Images/cardimage/Group 1000002466.png';
import img2 from '../../../Images/cardimage/Group 1000002766.png';
import img3 from '../../../Images/cardimage/Group 1000002767.png';
import img4 from '../../../Images/cardimage/Group 1000002771.png';
import img5 from '../../../Images/cardimage/Group 1000002772.png';
import img6 from '../../../Images/cardimage/Group 1000002773.png';
import './Event.css'


const Event = () => {
    return (
        <div style={{ backgroundColor: '#003145' }} className="py-5">
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">

                    <div class="col">
                        <div style={{borderRadius:'15px'}} class="card h-100 border-0">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <div className='d-flex justify-content-center rounded'>
                                    <p className='status'>Upcoming</p>
                                </div>
                                <h5 class="card-title">Data Science Bootcamp - Graded Datathon</h5>
                                <p class="card-text">Starts In</p>
                                <div className='d-flex justify-content-center fs-5 '>
                                    <div className='me-2'>
                                        <p className='fw-bold'>00</p>
                                        <p className='fs-6'>Days</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>15</p>
                                        <p className='fs-6'>Hours</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div>
                                        <p className='fw-bold'>22</p>
                                        <p className='fs-6'>Min</p>
                                    </div>
                                </div>
                                <Link className='s-button' to='/event-participate'>Participate Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{borderRadius:'15px'}} class="card h-100 border-0">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <div className='d-flex justify-content-center rounded'>
                                    <p className='status'>Upcoming</p>
                                </div>
                                <h5 class="card-title">Data Sprint 72 - Butterfly Identification</h5>
                                <p class="card-text">Starts In</p>
                                <div className='d-flex justify-content-center fs-5 '>
                                    <div className='me-2'>
                                        <p className='fw-bold'>00</p>
                                        <p className='fs-6'>Days</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>12</p>
                                        <p className='fs-6'>Hours</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div>
                                        <p className='fw-bold'>34</p>
                                        <p className='fs-6'>Min</p>
                                    </div>
                                </div>
                                <Link className='s-button' to='/event-participate'>Participate Now</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div style={{borderRadius:'15px'}} class="card h-100 border-0">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <div className='d-flex justify-content-center rounded'>
                                    <p className='status2'>Active</p>
                                </div>
                                <h5 class="card-title">Data Science Bootcamp - Graded Datathon</h5>
                                <p class="card-text">Ends In</p>
                                <div className='d-flex justify-content-center fs-5 '>
                                    <div className='me-2'>
                                        <p className='fw-bold'>01</p>
                                        <p className='fs-6'>Days</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>17</p>
                                        <p className='fs-6'>Hours</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div>
                                        <p className='fw-bold'>10</p>
                                        <p className='fs-6'>Min</p>
                                    </div>
                                </div>
                                <Link className='s-button' to='/event-participate'>Participate Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{borderRadius:'15px'}} class="card h-100 border-0">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <div className='d-flex justify-content-center rounded'>
                                    <p className='status2'>Active</p>
                                </div>
                                <h5 class="card-title">Data Sprint 70-Airline Passenger Satisfaction</h5>
                                <p class="card-text">Ends in</p>
                                <div className='d-flex justify-content-center fs-5 '>
                                    <div className='me-2'>
                                        <p className='fw-bold'>00</p>
                                        <p className='fs-6'>Days</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>11</p>
                                        <p className='fs-6'>Hours</p>
                                    </div>
                                    <div className='me-2'>
                                        <p className='fw-bold'>:</p>
                                    </div>
                                    <div>
                                        <p className='fw-bold'>27</p>
                                        <p className='fs-6'>Min</p>
                                    </div>
                                </div>
                                <Link className='s-button' to='/event-participate'>Participate Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div style={{borderRadius:'15px'}} class="card h-100 border-0">
                            <img src={img6} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <div className='d-flex justify-content-center rounded'>
                                    <p className='status3'>Past</p>
                                </div>
                                <h5 class="card-title">Engineering Graduates Employment Outcomes</h5>
                                <p class="card-text">Ended On</p>
                                <div className='d-flex justify-content-center'>
                                   <h5 className='mb-5'>16th May'22 09:00 PM</h5>
                                </div>
                                <Link className='s-button' to='/event-participate'>Participate Now</Link>
                            </div>
                        </div>
                    </div>



                    <div class="col">
                        <div style={{borderRadius:'15px'}} class="card h-100 border-0">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <div className='d-flex justify-content-center rounded'>
                                    <p className='status3'>Past</p>
                                </div>
                                <h5 class="card-title">Travel Insurance Claim <br /> Prediction</h5>
                                <p class="card-text">Ended On</p>
                                <div className='d-flex justify-content-center'>
                                   <h5 className='mb-5'>16th May'22 09:00 PM</h5>
                                </div>
                                <Link className='s-button' to='/event-participate'>Participate Now</Link>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Event;