import React from 'react';
import SectionTitle from './SectionTitle';

const Testimonai = () => {
    return (
       <section>
        <div className="container py-md-5 text-center">
            <div className="row">
                <SectionTitle title={"what people say about us"}></SectionTitle>
                <p className="fw-light w-50 mx-auto mt-4">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
                </p>
                <p className="fs-5 mb-1 fw-bolder">
                    Rahul Sarker
                </p>
                <p className="mb-0">
                    UI/UX Designer
                </p>
            </div>
        </div>
       </section>
    );
};

export default Testimonai;