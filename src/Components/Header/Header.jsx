import React from 'react';
import './Header.css'; // Import external CSS for better organization

function Header() {
    return (
        <div>
            <div className="top-bar">
                <div className="left">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bengaluru, Karnataka, India</span>
                    <a href="mailto:support@zidio.in">
                        <i className="fas fa-envelope"></i>
                        support@zidio.in
                    </a>
                </div>
                <div className="right">
                    <i className="fas fa-clock"></i>
                    <span>9.00 am - 5.30 pm</span>
                    <a href="https://www.facebook.com/p/Zidio-Development-61556709391417/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/zidiodev"><i className="fab fa-twitter"></i></a>
                    <a href="https://in.linkedin.com/company/zidio-development"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="header">
                <div className="logo">
                    <img
                        alt="ZIDIO Development Logo"
                        src="https://zidio.in/assets/images/home-1/zidio%20(1).png"
                    />
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#" class="scroll-link" data-target="history-section">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                    <div className="search">
                        <i className="fas fa-search"></i>
                    </div>
                    <button className="quote-button">Get A Quote</button>
                </nav>
            </div>
        </div>
    );
}

export default Header;
