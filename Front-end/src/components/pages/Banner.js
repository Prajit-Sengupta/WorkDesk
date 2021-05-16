import bannerimg from '../../assets/images/teambanner24.svg';



const Banner = () => {
    return ( 
        <div className="banner">
            <div className="banner-inner row">
                <div className="banner-inner-1 col-xl-6">
                    
                    <p className="p0">
                        WORKDESK
                    </p>
                    <p className="p1">
                        <small>Work faster and smarter!</small>
                    </p>
                    <p className="p2">
                        your one stop destination for personal management.
                    </p>
                <div className="bannerbtndiv">
                    <button className="bannerbtn">Know more!</button>
                    <button className="bannerbtn">Sign Up</button>
                </div>
                </div>
                <div className="banner-inner-2 col-xl-6">
                    <img alt='banner' src={bannerimg} className="bannerimage"></img>
                    </div>
            </div>
        </div>
     );
}
 
export default Banner;