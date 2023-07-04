import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='fw-bold'>
            {`Copyright © ${year} | Shubham Saini | All Rights Reserved`}
        </footer>
    );
}

export default Footer;