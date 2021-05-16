import React, { useState } from 'react';
import { Redirect } from 'react-router';

import '../../assets/css/Register.css';

const Register = () => {
    const [ isAuth, setisAuth] = useState(false);
  
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

      async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        await fetch("http://localhost:8000/auth/register/", {
            method: "POST",
            body: data, mode: "cors"
        })
            .then((response) => {
                console.log(response.status)
                if (response.status==201)
                {setisAuth(true)}
                return response.json([0]);
            })

            .then((data) => {
                console.log(data)
                // setisAuth(true);
                // this.setState({ isLoading: false, downlines: data.response });
               
                
            })
            .catch((error) => {
                console.log("error: " + error);
                setisAuth(false);
                // this.setState({ requestFailed: true });
            });

        event.preventDefault();
    }
    var csrftoken = getCookie("csrftoken");
    if(isAuth) {
      return <Redirect to='/login' /> 
    }
    return (
        <div className="register-main fluid-container">
            <div className="container helloform">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up!</h1>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>First Name : </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Your First Name"
                                name="first_name"
                                autoComplete="off" required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label>Last Name : </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Your Last Name"
                                name="last_name"
                                autoComplete="off" required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Phone number : </label>
                        <input
                            type="tel"
                            className="form-control form-control-lg"
                            placeholder="Phone Number"
                            name="phone"
                            autoComplete="off" required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email ID : </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Your Email"
                            name="email"
                            autoComplete="off" required
                        
                        ></input>
                    </div>

                    <div className="form-group">
                        <label>Username : </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            name="username"
                            autoComplete="off" required
                        />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Password : </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                name="password" 
                                autoComplete="off" required
                            ></input>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Confirm Password : </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Confirm Password"
                                name="password2"
                                autoComplete="off" required
                            ></input>
                        </div>
                    </div>

                    <button type="submit" className="btnregis">
                        Sign Up
                    </button>

                    <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value={csrftoken}
                    />
                </form>
            </div>
        </div>
    );

    
};

export default Register;