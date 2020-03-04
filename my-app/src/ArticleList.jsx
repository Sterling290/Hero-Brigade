
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
        `
      return(
        <Styles>
        <Container>
            <br></br>
        {this.state.Articles.map((each, i) => (
            <div>
          <div className="WholeArticle">
              <br></br>
              <Col><h2 className="articleTitle" id ={i}>{each["title"]}</h2></Col>
              <hr></hr>
              <Col><h2 className="articleSnip" id ={i}>{each["deck"]}</h2></Col>
              <Col><h2 className="Body" id ={`Body${i}`}>
                  <hr></hr>
                  
                  {jQuery('<p>' + each["body"] + '</p>').text()}</h2></Col>
              <Col><button className="articlebutton" id ={`showButton${i}`}  onClick = {(e)=>e.preventDefault(document.getElementById(`Body${i}`).style.display = "block", document.getElementById(`disButton${i}`).style.display = "block",document.getElementById(`showButton${i}`).style.display = "none") }   > -Read more </button></Col>
              <Col><button className="disablebutton" id ={`disButton${i}`}  onClick = {(e)=>e.preventDefault(document.getElementById(`Body${i}`).style.display = "none",document.getElementById(`disButton${i}`).style.display = "none",document.getElementById(`showButton${i}`).style.display = "block")}> -show less </button></Col>
              
               <Col ><div className="writtenBy"> -written by {each["authors"]} Date:{each["publish_date"]}   <Image src={`${each["image"]["square_tiny"]}`}  width="20px" height="20"/> </div> </Col>
              
          {/* <hr></hr> */}
          <br></br>
          </div>
          <br></br>
          </div>
        
       
            
          ))}
          </Container>
          </Styles>
        
      );
    }
  }
  export default ArticleList