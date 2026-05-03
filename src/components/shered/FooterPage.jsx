import React from 'react';

const FooterPage = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content grid grid-cols-1 md:grid-cols-3  p-8">
            <nav>
                <h6 className='footer-title'>Contact info</h6>
                <p className="link link-hover">123 Dhaka, Bangladesh</p>
                <p className="link link-hover">Phone: +1 234 567 890</p>
                <a className="link link-hover" href="">info@example.com</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">GitHub</a>
            </nav>
        </footer>
    );
};

export default FooterPage;