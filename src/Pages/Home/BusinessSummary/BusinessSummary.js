import React from 'react';
import img1 from '../../../Images/Group 1000002515.svg'
import img2 from '../../../Images/Group 1000002516.svg'
import img3 from '../../../Images/Group 1000002518.svg'
import './BusinessSummary.css'
const BusinessSummary = () => {
    return (
        <div style={{ backgroundColor: "#002A3B", padding: "60px" }}>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-4 d-flex justify-content-between align-items-center">
                        <div className='d-flex justify-content-center '>
                            <div className='me-3'>
                                <img src={img1} alt="" />
                            </div>
                            <div style={{ color: 'white' }} className='d-flex flex-column justify-content-center'>
                                <h3>100K+</h3>
                                <p>AI model submissions</p>
                            </div>
                        </div>
                        <div className='side-bar-b'>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='d-flex justify-content-center'>
                            <div className='me-3'>
                                <img src={img2} alt="" />
                            </div>
                            <div style={{ color: 'white' }} className='d-flex flex-column justify-content-center'>
                                <h3>50K+</h3>
                                <p>Data Scientists</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-between align-items-center">
                        <div className='side-bar-b'>

                        </div>
                        <div className='d-flex justify-content-center '>
                            <div className='me-3'>
                                <img src={img3} alt="" />
                            </div>
                            <div style={{ color: 'white' }} className='d-flex flex-column justify-content-center'>
                                <h3>100+</h3>
                                <p>AI Challenges hosted</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;