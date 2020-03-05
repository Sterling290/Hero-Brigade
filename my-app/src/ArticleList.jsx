
import styled from 'styled-components'
import {ListGroup,Container,Col,Row,Image} from 'react-bootstrap';
import React, { Component } from 'react';
import axios from 'axios'
import ArticleListt  from './ArticleList.css'
const jQuery = require('jquery')


class ArticleList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          Articles: []
      }
    }
    componentDidMount(){
        axios.get( "http://localhost:4000/articles").then((something)=> this.setState({Articles: something["data"]}))
    }
    
    render() {
        // console.log("this is cool:", this.state)
        const Styles = styled.div`
        .OverLay{
       
            background-color:#A52A2A;
            opacity: 0.6;
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            z-index -1;

        }


        `
      return(
        <Styles>
            {/* <Container className = "OverLay"></Container>   */}
        <Container>
        
            <br></br>
        {this.state.Articles.map((each, i) => (
            <div>
         <Row> <Col md={3}><div className="WholeArticle"><p>advertisement</p></div></Col>
          <Col><div className="WholeArticle">
              <br></br>
              <Col><h2 className="articleTitle" id ={i}>{each["title"]}</h2></Col>
              <hr></hr>
              <Col><h2 className="articleSnip" id ={i}>{each["deck"]}</h2></Col>
              <Col><h2 className="Body" id ={`Body${i}`}>
                  <hr></hr>
                  {jQuery('<p>' + each["body"] + '</p>').text()}</h2></Col>
              <Col><button className="articlebutton" id ={`showButton${i}`}  onClick = {(e)=>e.preventDefault(document.getElementById(`Body${i}`).style.display = "block", document.getElementById(`disButton${i}`).style.display = "block",document.getElementById(`showButton${i}`).style.display = "none") }   > -Read more </button></Col>
              <Col><button className="disablebutton" id ={`disButton${i}`}  onClick = {(e)=>e.preventDefault(document.getElementById(`Body${i}`).style.display = "none",document.getElementById(`disButton${i}`).style.display = "none",document.getElementById(`showButton${i}`).style.display = "block")}> -show less </button></Col>
              <Col><div className="writtenBy"> -written by {each["authors"]} Date:{each["publish_date"]}   <Image src={`${each["image"]["square_tiny"]}`}  width="20px" height="20"/> </div> </Col>
          {/* <hr></hr> */}
          <br></br>
          </div></Col></Row>
          <br></br>
          
          </div>
          
          ))}
          </Container>
          </Styles>
        
      );
    }
  }
  export default ArticleList