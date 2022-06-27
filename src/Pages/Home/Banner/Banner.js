import React from 'react';
import './Banner.css'
import rocket from '../../../Images/PicsArt_04-14-04.42 1.svg'
const Banner = () => {
    return (
        <div className='bg-color'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-8">
                        <div className='d-flex p-5 '>
                            <div className='side-bar me-5'>

                            </div>
                            <div>
                                <h1 className='header-text'>Accelerate Innovation with Global AI Challenges</h1>
                                <p>
                                AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                                </p>
                                <button className='btn btn-primary'>create challenge</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src={rocket} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;