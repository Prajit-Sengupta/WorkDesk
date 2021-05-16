import '../../assets/css/Footer.css';

import bannerlogo from '../../assets/images/dedicated-desk.png';

const Footer = () => {
    return ( 
        <div className="fluid-container footer">
            <br></br>
            <div className="row">
                <div className="footer-in-1 col-md-6">
                    <img src={bannerlogo} className="footerlogo" alt="logo" />
                    <p className='footer-workdesk'>
                        WORKDESK
                    </p>
                </div>
                <div className="footer-in-2 col-md-6">
                    <h2 className='reach-us'>Reach Us!</h2>
                    <div className="row">
                        <div className="col-md-1">
                            <i class="fas fa-map-marker-alt fa-2x"></i>
                        </div>
                        <div className="col-md-11">
                            <span className="footer-inner-inner"> <span className="footer-underline">Bangalore, India</span></span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <i class="fas fa-phone-alt fa-2x"></i>
                        </div>
                        <div className="col-md-11">
                            <span className="footer-inner-inner"> <span className="footer-underline">1800-900-600</span></span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <i class="fas fa-envelope-open-text fa-2x"></i>
                        </div>
                        <div className="col-md-11">
                            <span className="footer-inner-inner"> <span className="footer-underline"><b>support@workdesk.com</b></span></span>
                        </div>
                    </div>
                </div>
            </div>
                <br></br>

        </div>
     );
}
 
export default Footer;