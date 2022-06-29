import React from 'react';
import './EventParticipate.css'
import { Link } from "react-router-dom";

const EventParticipate = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#003145' }}>
                <div className='container py-5'>
                    <button className='p-button mb-3'>Starts on 17th Jun'22 09:00 PM (India Standard Time)</button>
                    <h1 className='text-white mb-5'>Data Sprint 72 - Butterfly Identification</h1>
                    <p className='text-white'>Identify the class to which each butterfly belongs to</p>
                    <button className='c-button'>Easy</button>
                </div>
            </div>
            <div className='shadow'>
                <div className='container d-flex justify-content-between' >
                    <div className=''>
                        <h4 className='py-4 ps-3'>Overview</h4>
                        <div className='design'></div>
                    </div>
                    <div className='py-4'>
                        
                        <Link to='/edit-participate' className='me-3 style-b'>Edit</Link>
                        <button className='style-b2'>Delete</button>
                    </div>
                </div>
            </div>
            <div className='container my-5 py-2'>
                <p style={{color: '#64607D'}}>Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. <br />
                <br />
                    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. <br />
                    <br />
                    Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.</p>
            </div>
        </div>
    );
};

export default EventParticipate;