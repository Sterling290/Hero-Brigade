import React, { Component } from 'react';
import './TopBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
class TopBAR extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
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