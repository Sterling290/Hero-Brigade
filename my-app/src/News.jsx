import styled from 'styled-components'
import {ListGroup,Container,Row,Col,Image} from 'react-bootstrap';
import React, { Component } from 'react';
import axios from 'axios'

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          reviews: []
      }
    }
    componentDidMount(){
        axios.get( "http://localhost:4000/reviews").then((something)=> this.setState({reviews: something["data"]}))  
    }
    

    render() {
      console.log(this.state.reviews.slice(1,5))



      return(
    <div>
        <Container fluid >
        <hr></hr>
        <ListGroup.Item variant="danger" >
            <Row>
            <Col> avatar</Col>
            <Col>Title</Col>
            <Col> author</Col>
            <Col> breif </Col>
            <Col> score</Col>
            <Col> page</Col>
            </Row>
            </ListGroup.Item>
            <hr></hr>
        {/* <ListGroup> */}
            { this.state.reviews.slice(1,5).map((each,i)=>
            <div>
            <Row id ={i}>
            <Col ><Image src={`${each["image"]["screen_tiny"]}`}  /></Col>
            <Col>Title:{each["title"]}</Col>
            <Col> author: {each["authors"]} </Col>
            <Col> breif: {each["deck"]} </Col>
            <Col> score: {each["score"]} </Col>
            <Col><a href={each["game"]["site_detail_url"]}>{each["title"]}</a></Col>
            </Row>
            <hr></hr>
            </div>
            
            )}
        {/* </ListGroup> */}
     
        </Container>

        {/* <ul>
     { this.state.reviews.slice(1,5).map((each)=>
           <li>{each["title"]}</li>
     )} */}
      {/* </ul> */}
    </div>
      );
    }
  }
  export default News