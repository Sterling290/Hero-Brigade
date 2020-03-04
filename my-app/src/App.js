// import React from 'react';
// import './App.css';
import TopBar from './TopBar.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {Container} from 'react-bootstrap';
import {Home} from './Home.js'
import {Articles} from './Articles.js'
import {Contact} from './Contact.js'
import {NoMatch} from './NoMatch.js'
import {Layout} from './components/Layout.js'
import {NavigationBar} from './components/NavigationBar.js'
import {Jumbotron} from './components/Jumbotron.js'
import app from './App.css'



class  App extends Component {
  render(){
  return (
    <div className="App">
      {/* <TopBar/> */}
      {/* <header className="App-header">
      </header> */}
  
   <React.Fragment>
   <Jumbotron />
   <div className = "back">
   <NavigationBar/>
     <Layout>
     <Router>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/articles" component={Articles} />
     <Route path="/contact" component={Contact} />
     <Route component={NoMatch} />
     </Switch>
     </Router>
     </Layout>
     <br></br>
     <br></br>
     </div>
   </React.Fragment>
  
    </div>
     
  );
  }
}

export default App;
