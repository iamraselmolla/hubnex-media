import React from 'react';

const SingleInfo = ({number, title}) => {
    return (
        <div className='py-1'>
            <h1 style={{fontSize: "80px"}} className="fw-bolder">
                {number}
            </h1>
            <p className="mb-0">
                {title}
            </p>
        </div>
    );
};

export default SingleInfo;