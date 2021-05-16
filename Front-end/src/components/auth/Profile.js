import React, { useState } from 'react';
import { Redirect } from 'react-router';
import '../../assets/css/profile.css'

const Profile = () => {

    return ( 
        <div className="row">
            <div className="col-sm-3"></div>
        <div className="col-sm-6">
        <div className="container">
            <form>
                <h1 className="h1-profile">Update Profile</h1>


                    <div className="form-group-1">
                        <label>First Name : </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Your First Name"
                            name="first_name"
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group-1">
                        <label>Last Name : </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Your Last Name"
                            name="last_name"
                            autoComplete="off"
                        />
                    </div>

                <div className="form-group-1">
                    <label>Phone number : </label>
                    <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder="Phone Number"
                        name="phone"
                        autoComplete="off"
                    />
                </div>

                <div className="form-group-1">
                    <label>Email ID : </label>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        name="email"
                        autoComplete="off"
                    
                    ></input>
                </div>

                <div className="form-group-1">
                    <label>Username : </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        name="username"
                        autoComplete="off"
                    />
                </div>
                    <div className="form-group-1">
                        <label>Password : </label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            name="password" 
                            autoComplete="off"
                        ></input>
                    </div>

                    <div className="form-group-1">
                        <label>Confirm Password : </label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            name="password2"
                            autoComplete="off"
                        ></input>
                    </div>

                <button type="submit" className="btnregis-1">
                    Update
                </button>
            </form>
        </div>
    </div>
    <div className="col-sm-3"></div>
    </div>

     );
}
 
export default Profile;