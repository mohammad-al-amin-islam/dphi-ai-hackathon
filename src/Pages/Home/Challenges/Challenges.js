import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Challenges.css'

const Challenges = () => {
    return (
        <div style={{ backgroundColor: '#002A3B' }}>
            <div className='container pb-5'>
                <div className='mt-5 py-5 text-center'>
                    <h1 style={{ fontSize: '32px', color: 'white' }}>Explore Challenges</h1>
                </div>
                <div className='dc'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Text input with dropdown button"
                            placeholder="Search"
                            className='me-3'
                        />

                        <DropdownButton
                            // variant="outline-secondary"
                            title="Filter"
                            id="input-group-dropdown-2"
                            align="end"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Challenges;