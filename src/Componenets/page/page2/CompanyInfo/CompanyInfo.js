import React from 'react';
import SingleInfo from './SingleInfo';

const CompanyInfo = () => {
    return (
        <section>
            <div className="container py-md-5 text-center">
                <div className="row">
                    <div className="col-md-4 border-end border-2">
                        <SingleInfo number={"75000+"} title={"Startups & Service Providers"}></SingleInfo>
                    </div>
                    <div className="col-md-4 border-end border-2">
                        <SingleInfo number={"1000+"} title={"Institutional Investors"}></SingleInfo>

                    </div>
                    <div className="col-md-4">
                        <SingleInfo number={"9000+"} title={"Angel Investors"}></SingleInfo>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;