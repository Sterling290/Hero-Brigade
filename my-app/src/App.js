// import React from 'react';
// import './App.css';
import TopBar from './TopBar.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {Home} from './Home.js'
import {About} from './About.js'
import {Contact} from './Contact.js'
import {NoMatch} from './NoMatch.js'
import {Layout} from './components/Layout.js'
import {NavigationBar} from './components/NavigationBar.js'
import {Jumbotron} from './components/Jumbotron.js'



class  App extends Component {
  render(){
  return (
    <div className="App">
      {/* <TopBar/> */}
      {/* <header className="App-header">
      </header> */}
   <React.Fragment>
   <Jumbotron />
   <NavigationBar/>
   
     <Layout>
     <Router>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route component={NoMatch} />
     </Switch>
     </Router>
     </Layout>
   </React.Fragment>
    </div>
  );
  }
}

export default App;
