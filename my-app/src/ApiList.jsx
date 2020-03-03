
import styled from 'styled-components'
import {ListGroup,Container} from 'react-bootstrap';
import React, { Component } from 'react';
import axios from 'axios'


class ApiList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          stuff: []
      }
    }
    componentDidMount(){
        axios.get( "http://localhost:4000/").then((something)=> this.setState({stuff: something["data"]}))
    }
    
    render() {
        // console.log("this is cool:", this.state)
        const Styles = styled.div`
        .list-group{
         width:'100%'

        }
        .list-group-item{
          width:'100%'
 
         }

`
      return(
        <Styles>
        <Container>
        {this.state.stuff.map((breakpoint, idx) => (
          
              <ListGroup  variant="flush" >
                <ListGroup.Item variant="primary">{breakpoint.name}</ListGroup.Item>
                <ListGroup.Item> { <img src={breakpoint.image.square_tiny} alt={` ${breakpoint.name} image not available`}></img>}</ListGroup.Item>
                <ListGroup.Item>
                <ListGroup className="my-2" >
               {breakpoint.description.length !== 0 ? <ListGroup.Item>Description: {breakpoint.description}</ListGroup.Item>:<ListGroup.Item >Description: not given</ListGroup.Item>}
              {/* <ListGroup.Item>{breakpoint.description}</ListGroup.Item> */}
              {breakpoint.deck.length !== 0 ? <ListGroup.Item>Deck: {breakpoint.deck}</ListGroup.Item>:console.log('')}
              <ListGroup.Item> Release: {breakpoint.release_date}</ListGroup.Item>
              <ListGroup.Item>Id: {breakpoint.id}</ListGroup.Item>
              </ListGroup>
              </ListGroup.Item>
            </ListGroup>
       
            
          ))}
          </Container>
          </Styles>
        
      );
    }
  }
  export default ApiList