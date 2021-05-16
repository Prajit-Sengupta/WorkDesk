import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import './App.css';
import MyTasks from './components/pages/MyTasks';
import Reminder from './components/pages/Reminder';
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar';
import Banner from './components/pages/Banner';
import Footer from './components/layout/Footer';
import './assets/css/App.css'
import './assets/css/Banner.css'
import Calendar from './components/pages/Calendar';
import Register from './components/auth/Register';

const App = () => {

  return (
        <Router>
          <div className='App'>
              <Switch>
                <Route exact path='/'>
                  <Navbar />
                  <Banner />
                  <Footer />
                </Route>

                <Route exact path='/register'>
                  <Register />
                </Route>

                <Route exact path='/login'>
                  <Login />
                </Route>

                <Route exact path='/dashboard'>
                  <Dashboard />
                </Route>
              
                <Route exact path='/tasks'>
                  <Dashboard />
                  <div className="container"><MyTasks /></div>
                </Route>

                <Route exact path='/reminder'>
                  <Dashboard />
                  <div className="container"><Reminder /></div>
                </Route>

                <Route exact path='/calendar'>
                  <Dashboard />
                  <div className="container"><Calendar /></div>
                </Route>

              </Switch>
          </div>
        </Router>
  );
};

export default App;
