import React from 'react';
import { Link } from "react-router-dom";
import './CreateChallenges.css'
const CreateChallenges = () => {
    return (
        <div className='mb-5'>
            <div className='bg-light py-4'>
                <h2 className='container'>Challenge Details</h2>
            </div>
            <div className='container'>
                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Challeges Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Start Date</label>
                    <input type="text" class="form-control fw-bold" id="exampleFormControlInput1" placeholder='Add start date' />
                </div>
                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">End Date</label>
                    <input type="text" class="form-control fw-bold" id="exampleFormControlInput1" placeholder='Add end date' />
                </div>
                <div class="my-3 w-75">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>

                <div class="my-3 w-50">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Image</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                </div>
                <div class="my-3 w-25">
                    <label for="exampleFormControlInput1" class="form-label fw-bold fs-5 mb-4">Level Type</label>
                    <select class="form-select mb-5" aria-label="Default select example">
                        <option selected>Easy</option>
                        <option value="1">One</option>
                    </select>
                </div>

                <Link to='/' className='challenges' >Create Challenge</Link>
            </div>
        </div>
    );
};

export default CreateChallenges;