// Awards.jsx
import React from 'react';
import './Awards.css'; // Import the CSS file

const Awards = () => {
    return (
        <div className="achievements-container">
            <div className="achievements-title">Achievements Gallery</div>
            <div className="achievements-heading">
                AWARDS AND CERTIFICATIONS
            </div>
            <div className="achievements-description">
                Our team has been recognized for their outstanding performance and dedication. Here are some of our key achievements.
            </div>
            <div className="achievements-gallery">
                <div className="achievement-item">
                    <img alt="Award 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbfX8lwE_XHcrpK1LtCq3LcexlFI3y-UMCA&s" />
                    <div className="achievement-title">Excellence in Software Development</div>
                    <div className="achievement-description">Celebrating our commitment to delivering innovative software solutions that exceed client expectations.</div>
                </div>
                <div className="achievement-item">
                    <img alt="Award 2" src="https://www.psuconnect.in/sdsdsd/jpg_20220820_175537_0000.jpg" />
                    <div className="achievement-title">Best IT Consultancy Firm</div>
                    <div className="achievement-description">Recognized for our exceptional consultancy services that drive digital transformation for businesses.</div>
                </div>
                <div className="achievement-item">
                    <img alt="Certification 1" src="https://niveussolutions.com/wp-content/uploads/2023/07/iso-certified-company.jpg" />
                    <div className="achievement-title">Customer Satisfaction Award</div>
                    <div className="achievement-description">Honoring our dedication to providing unparalleled customer support and satisfaction in every project.</div>
                </div>
                <div className="achievement-item">
                    <img alt="Certification 2" src="https://img.etimg.com/thumb/msid-104282191,width-640,height-480,imgsize-1162410,resizemode-4/startup-of-the-year.jpg" />
                    <div className="achievement-title">Best Startup of the Year</div>
                    <div className="achievement-description">Recognized for our rapid growth and impactful solutions in the competitive IT landscape.</div>
                </div>
                <div className="achievement-item">
                    <img alt="Key Achievement 1" src="https://images.pexels.com/photos/11035385/pexels-photo-11035385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className="achievement-title">Developer of the Year</div>
                    <div className="achievement-description">Honoring an individual whose exceptional skills and contributions have significantly advanced our projects.</div>
                </div>
                <div className="achievement-item">
                    <img alt="Key Achievement 2" src="https://storage.googleapis.com/a1aa/image/aONmEbD7A66CGhZe8OfzfiOREwXbhPO9CGLDuZx0oyKjY0SnA.jpg" />
                    <div className="achievement-title">Community Impact Award</div>
                    <div className="achievement-description">Recognized for our initiatives that positively impact the community through technology and innovation.</div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
