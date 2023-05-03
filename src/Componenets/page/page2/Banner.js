import React from 'react';

const Banner = () => {
    return (
        <section className='text-center'>
            <div className="container">
                <div className="row pt-md-5">
                    <div className="col-md-8 pt-md-5 offset-md-2">
                        <h1 style={{ fontSize: "70px" }} className="fw-bolder">
                            Helping business through technology
                        </h1>
                        <p className="mt-4">
                            Revolutionize Your Startup's IT Strategy with Our Consultancy Services
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <div className='pt-5 mt-4'><img src="d2/arrow.png" className='' alt="" /></div>
                            <div>
                                <button className="btn btn-secondary mt-5 rounded-5 text-white">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;