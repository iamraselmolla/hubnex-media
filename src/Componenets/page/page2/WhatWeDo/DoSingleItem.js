import React from 'react';

const DoSingleItem = ({ icon, title, des }) => {
    return (
        <div className="col-md-3 text-center">

            <div style={{ background: "rgba(255, 255, 255, 0.1)", minHeight:"290px" }} className="py-3 px-2 bg-opacity-25 rounded">
                <div style={{ background: "#7B7DB7", width: "70px", height: "70px", lineHeight: "70px" }} className="icon mb-4 mx-auto rounded-circle">
                    <img src={`${icon}`} alt="" />
                </div>
                <h3 className="fw-bolder">
                    {title}
                </h3>
                <p className="mb-0">
                    {des}
                </p>
            </div>
        </div>
    );
};

export default DoSingleItem;