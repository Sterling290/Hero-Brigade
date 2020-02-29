import React, { Component } from 'react';
import './TopBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
import axios from 'axios'
class TopBAR extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          stuff: {}
      }
    }
    componentDidMount(){
        axios.get( "http://localhost:4000/").then((something)=> this.setState({stuff: something["data"]}))
        
    }
    



    render() {
        console.log(this.state.stuff)
      return(
          <div>
     <div className='header'>
         HERO  BRIGADE
        </div> 
        <div className='middle'>
        </div> 

        </div>
  
      );
    }
  }
  export default TopBAR 