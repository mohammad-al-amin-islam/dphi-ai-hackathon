import React from 'react';
import img1 from '../../../Images/IdentificationCard.svg'
import img2 from '../../../Images/Robot.svg'
import img3 from '../../../Images/carbon_notebook-reference.svg'
import img4 from '../../../Images/Vector.svg'
import './FaqArea.css'

const FaqArea = () => {
    return (
        <div className='container'>
            <div className='my-5 text-center'>
                <h1 style={{ fontSize: '32px' }}>Why Participate in <span style={{ color: '#44924C' }}>AI Challenges?</span></h1>
            </div>
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="bg-light faq-style mb-4">
                        <img className='mb-2' src={img3} alt="" />
                        <h3>Prove your skills</h3>
                        <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="bg-light faq-style mb-4">
                        <img className='mb-2' src={img4} alt="" />
                        <h3>Learn from community</h3>
                        <p>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="bg-light faq-style mb-4">
                        <img className='mb-2' src={img2} alt="" />
                        <h3>Challenge yourself</h3>
                        <p>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="bg-light faq-style mb-4">
                        <img className='mb-2' src={img1} alt="" />
                        <h3>Earn recognition</h3>
                        <p>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FaqArea;