import '../../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import logopng from '../../assets/images/dedicated-desk.png';



const Navbar = () => {
    return ( 
    <nav className="nav">
        <div className="nav-header">
		  <div className="nav-title">
          <img src={logopng} className="hellobanner" alt="logo" />
		  	<span className="brand-name-logo">WORKDESK</span>
		  </div>
		</div>
		<div className="nav-btn">
		  <label for="nav-check">
			<span></span>
			<span></span>
			<span></span>
		  </label>
		</div>
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-links">
		  <Link to='/'>HOME</Link>
		  <Link to='/'>PRODUCT</Link>
          <Link to='/'>CONTACT</Link>
		  <Link to='/login'>LOGIN</Link>
		  <Link to='/register' className="signupbtn">SIGNUP</Link>
		</div>
    </nav>
     );
}
 
export default Navbar;