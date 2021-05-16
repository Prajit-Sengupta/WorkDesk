import React from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

import '../../assets/css/Register.css';

export default class Login extends React.Component{

    constructor(){
        super()
        let loggedIn = false
        
        const token = localStorage.getItem("token")
        if(token) loggedIn = true

        this.state = {
            username: "",
            password: "",
            loggedIn,
            error: ""
        }
        this.onChange =  this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    onChange(ev){
        this.setState({
            ...this.state,
            [ev.target.name]: ev.target.value
        })
    }

    async formSubmit(ev){
        ev.preventDefault()
        const {username, password} = this.state
        try {
            const token = await Axios.post("http://localhost:8000/auth/login/", {username, password})
            console.log(token)
            localStorage.setItem("token", token.data.access)
            this.setState({
                loggedIn: true
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }

    render(){
        if(this.state.loggedIn === true){
            return <Redirect to="/user" />
        }
        return(
            <form onSubmit={this.formSubmit} className="helloform container login-main">

                <h1>Login!</h1>

                <div className="form-group">
                    <label>Email ID : </label>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.onChange} name="username" />
                </div>
                <div className="form-group">
                    <label>Password : </label>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChange} name="password" />
                </div>
                <input type="submit" className="btnregis" />
                <div>
                {this.state.error}
                </div>
            </form>
        )
    }
}