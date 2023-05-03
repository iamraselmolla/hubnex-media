import React from 'react';
import {AiOutlineFacebook,AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className='text-center py-4 bg-dark text-white'>
            <p className="mb-2 fw-bold">
            Connect with us
            </p>
            <div className="d-flex gap-3 justify-content-center text-white fs-4">
                <AiOutlineFacebook></AiOutlineFacebook>
                <AiOutlineTwitter></AiOutlineTwitter>
                <AiOutlineInstagram></AiOutlineInstagram>
                <AiOutlineLinkedin></AiOutlineLinkedin>
            </div>
        </footer>
    );
};

export default Footer;