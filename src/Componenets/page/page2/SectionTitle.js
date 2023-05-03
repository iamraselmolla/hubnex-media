import React from 'react';

const SectionTitle = ({ title, des }) => {
    return (
        <>
            <h1 style={{ fontSize: "50px" }} className="fw-bolder">
               {title}
            </h1>
            {des && <p>
                    {des}
            </p>}
        </>
    );
};

export default SectionTitle;