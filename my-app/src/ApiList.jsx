
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
        console.log("this is cool:", this.state)
        const Styles = styled.div`

`

      return(
        this.state.stuff.map((breakpoint, idx) => (
          <Styles>
            <Container justifycontent= 'flex-start' justifycontent= 'flex-start' alignitems = "stretch" >
              <ListGroup  horizontal={"xl"} className="my-2" key={idx} alignitems="stretch" >
              
                <ListGroup.Item> { <img src={breakpoint.image.square_tiny} alt="Italian Trulli"></img>}</ListGroup.Item>
                <ListGroup.Item>
                <ListGroup className="my-2" >
                <ListGroup.Item variant="primary"  >{breakpoint.name}</ListGroup.Item>
               {breakpoint.description.length !== 0 ? <ListGroup.Item>Description: {breakpoint.description}</ListGroup.Item>:<ListGroup.Item >Description: not given</ListGroup.Item>}
              {/* <ListGroup.Item>{breakpoint.description}</ListGroup.Item> */}
              <ListGroup.Item>{breakpoint.release_date}</ListGroup.Item>
              <ListGroup.Item>{breakpoint.id}</ListGroup.Item>
              </ListGroup>
              </ListGroup.Item>



            </ListGroup>
            </Container>
            </Styles>
            
          ))
        
      );
    }
  }
  export default ApiList