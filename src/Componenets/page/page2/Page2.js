import React from 'react';
import Banner from './Banner';
import Partners from './Partners';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Testimonai from './Testimonai';
import WhatWedo from './WhatWeDo/WhatWedo';

const Page2 = () => {
    return (
        <div className='page2 text-white'>
            <Banner></Banner>
            <Partners></Partners>
            <CompanyInfo></CompanyInfo>
            <Testimonai></Testimonai>
            <WhatWedo></WhatWedo>
        </div>
    );
};

export default Page2;