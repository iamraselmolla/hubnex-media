import React from 'react';

const Letsbuild = () => {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h2 style={{fontSize: "60px"}} className="fw-bolder mb-3">
                            let us build it for you.
                            
                        </h2>
                        <p className="fw-bold"> 
                        providing you industry level solutions to cater your needs and help you become the next big thing.
                            get started</p>
                            <button className=" px-3 bg-transparent py-2 rounded-5" style={{border: "solid 1px #000"}}>
                        get started
                    </button>
                    </div>
                    <div className="col-md-6 text-end offset-md-2">
                        <img src="d1/mobile.png" className='img-fluid' alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Letsbuild;