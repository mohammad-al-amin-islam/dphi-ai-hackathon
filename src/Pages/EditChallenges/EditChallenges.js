import { ArrowRightIcon, PhotographIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../../Images/cardimage/Group 1000002466.png'

const EditChallenges = () => {
    return (
        <div className='mb-5'>
            <div className='bg-light py-4'>
                <h2 className='container'>Challenge Details</h2>
            </div>
            <div className='container'>
                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Challeges Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" value='Data Sprint 72 - Butterfly Identification' />
                </div>
                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Start Date</label>
                    <input type="text" class="form-control fw-bold" id="exampleFormControlInput1" placeholder='Add start date' value="17th Jun'22 09:00 PM" />
                </div>
                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">End Date</label>
                    <input type="text" class="form-control fw-bold" id="exampleFormControlInput1" placeholder='Add end date' value="21st Jun'22 11:00 PM" />
                </div>
                <div class="my-3 w-75">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value="Identify the class to which each butterfly belongs to"></textarea>
                </div>

                <div class="my-3 w-25">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Image</label>
                    <div className='bg-light p-5 imgs'>
                        <img style={{borderRadius:'20px'}} className='img-fluid' src={img1} alt="" />
                        <p className='text-danger pt-3'> <PhotographIcon className='me-2' style={{ width: '20px', height: '20px' }}></PhotographIcon> Change Images <ArrowRightIcon className='ms-2' style={{ width: '20px', height: '20px' }}></ArrowRightIcon></p>
                    </div>

                </div>
                <div class="my-3 w-25">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Level Type</label>
                    <select class="form-select mb-5" aria-label="Default select example">
                        <option selected>Easy</option>
                        <option value="1">One</option>
                    </select>
                </div>

                <Link to='/' className='challenges' >Save Changes</Link>
            </div>
        </div>
    );
};

export default EditChallenges;