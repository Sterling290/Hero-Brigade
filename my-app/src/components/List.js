import React from 'react'; 
import styled from 'styled-components'
import {ListGroup,Container} from 'react-bootstrap';
const Styles = styled.div`
.listgroup{

    background-color:#A52A2A;
    border-style: dotted;
  
  }

`

export const Lists = () =>(
    ['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
        <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
          <ListGroup.Item >This ListGroup</ListGroup.Item>
          <ListGroup.Item>renders horizontally</ListGroup.Item>
          <ListGroup.Item variant="primary">on {breakpoint}</ListGroup.Item>
          <ListGroup.Item>and above!</ListGroup.Item>
        </ListGroup>
      ))
)