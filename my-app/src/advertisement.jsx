
import styled from 'styled-components'
import {grid} from 'react-bootstrap';
import React, { Component } from 'react';
import axios from 'axios'


class advertisement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        advertisements: []
      }
    }
    componentDidMount(){
        //this will access a express page that ether accesses  data from an ad api or 
        // will access data from a custom avertisement mongodb database customly made using faker and fs 
        axios.get( "http://localhost:4000/advertisements").then((something)=> this.setState({advertisements: something["data"]}))
    }
    
    render() {
       const Styles = styled.div``
      return(
        <Styles>
        <Container>
        {this.state.advertisements.map((breakpoint, idx) => (
          <div>this will be an avertisement table </div>   
          ))}
          </Container>
          </Styles>
        
      );
    }
  }
  export default advertisement