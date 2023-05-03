import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LetsTalk = () => {
    return (
        <section className='bg-dark text-white'>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="fw-bolder">
                                    let’s talk
                                </h1>
                                <p className="fw-lighter fs-2">
                                    have some great idea or brand to develop?
                                    Let’s build it together!
                                </p>
                                <p className="mb-0">
                                    Our team will reach out to you as soon as possible
                                </p>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3 no_bg_no_border" controlId="exampleForm.ControlInput1">
                               
                                <Form.Control type="email" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 no_bg_no_border" controlId="exampleForm.ControlInput2">
                                
                                <Form.Control type="email" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 no_bg_no_border" controlId="exampleForm.ControlInput3">
                                
                                <Form.Control type="email" placeholder="Email*" />
                            </Form.Group>
                            <Form.Group className="mb-3 no_bg_no_border" controlId="exampleForm.ControlInput4">
                                
                                <Form.Control type="email" placeholder="Phone" />
                            </Form.Group>
                            <Form.Group className="mb-3 no_bg_no_border" controlId="exampleForm.ControlTextarea5">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className='bg-transparent px-4 py-2 rounded-5 border border-1 w-100'> Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsTalk;