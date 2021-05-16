import { Link } from 'react-router-dom';
import '../../assets/css/Register.css';

const Login = () => {
    return ( 
        <div className="login-main">

        <form className="helloform container">

        <h1 className='register-heading'>Login!</h1>

            <div className="form-group">
                <label>Email ID : </label>
                <input type="email" className="form-control form-control-lg" placeholder="Your Email" name="email" autoComplete="off"></input>
            </div>

        <div className="form-group form-group-2">
            <label>Password : </label>
            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" autoComplete="off"></input>
        </div>
        <Link to='/dashboard' style={{ textDecoration: 'none' }} className="btnregis">Login</Link>
        </form>

        </div>
     );
}
 
export default Login;