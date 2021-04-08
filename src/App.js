import React,{Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Cards from './components/Cards/Cards';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends Component{

  state={
    isCompleted:false,
    firstName:'',
    lastName:'',
    money:0
  }

  render(){
    return (

      //router for NavBar links
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* route for Home button */}
            <Route
              exact
              path='/'
              render={(props) => (
              <Home {...props} isCompleted={this.state.isCompleted} />
              )}
            />
            
            {/* route for profile button */}
            <Route
              exact
              path='/profile'
              render={(props) => (
              <Profile {...props} name="test" />
              )}
            />

            {/* route for cards button */} 
            <Route path="/cards" exact component={Cards} />
          </Switch>
        </div>
      </Router>
    )
  }
  
}

export default App;
