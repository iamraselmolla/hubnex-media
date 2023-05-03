import React from 'react';
import SectionTitle from '../SectionTitle';
import DoSingleItem from './DoSingleItem';

const WhatWedo = () => {
    return (
       <section>
        <div className="container py-md-5 text-center">
            <div className="row">
                <p className="fw-light mb-5">
                    Teams
                </p>
                <SectionTitle title="What We Do" des="Delivering exponential value throughout the care ecosystem"></SectionTitle>
            </div>
            <div className="row mt-4">
                <DoSingleItem title="Our Vision" icon="d2/1.png" des="Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity"></DoSingleItem>
                <DoSingleItem title="Our Philosophy" icon="d2/2.png" des="Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success"></DoSingleItem>
                <DoSingleItem title="Our Mission" icon="d2/3.png" des="Harness innovation to accelerate digital transformation and drive change & client success"></DoSingleItem>
                <DoSingleItem title="Our Strategy" icon="d2/3.png" des="Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines"></DoSingleItem>
            </div>
        </div>
       </section>
    );
};

export default WhatWedo;