import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <section className='vh-100 pt-5' style={{ backgroundImage: "url(../../d1/banner.png)", backgroundSize: 'cover' }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-8 pt-md-5">
                        <div className='pt-md-5'>
                            <h1 style={{fontSize: "70px"}} className='fw-bold'>
                                scale your business
                                lead the market.
                            </h1>
                            <p>
                                let our team, help you reach your dream.
                            </p>
                            <Button className='bg-light border-0 fw-bolder text-black rounded-5'>Get started</Button>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;