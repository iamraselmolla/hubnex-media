import React from 'react';

const Testimonial = () => {
    return (
        <section style={{ background: "url(../../d1/baloon.png)", backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ color: "#144CC7" }}>
                        <div className="ps-5">
                            <div className="icon_box">
                                <h1 style={{ fontSize: "160px" }} className="fw-bolder">
                                    200
                                </h1>
                                <h3 style={{ fontSize: "40px" }} className="mb-0">
                                    Leading Business
                                </h3>
                            </div>
                            <div className="icon_box mt-4">
                                <h1 style={{ fontSize: "160px" }} className="fw-bolder">
                                    200
                                </h1>
                                <h3 style={{ fontSize: "40px" }} className="mb-0">
                                    Leading Business
                                </h3>
                            </div>
                        </div>
                        <p className="fs-4 mt-5 pt-5">
                            Not only do we help businesses reach their goals, but help build the empire. <br />
                            -Satya Nadela
                        </p>

                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;