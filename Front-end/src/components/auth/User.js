import React from "react"
import {Redirect} from "react-router-dom"

export default class User extends React.Component{

    constructor(){
        super()
        let loggedIn = false
        
        const token = localStorage.getItem("token")
        if(token) loggedIn = true
        this.logout = this.logout.bind(this)
        this.state= {
            loggedIn
        }
    }

    logout(){
        localStorage.removeItem("token")
        this.setState({
            loggedIn: false
        })
    }

    render(){
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }
        return(
            <div>
                <h1>User authenticated</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}