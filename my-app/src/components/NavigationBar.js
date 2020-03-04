import React from 'react'; 
import {Nav,Navbar,Container} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.nav{
    height:20px;
    padding: 25px 50px;
    margin-top: 0px ;
    
}
.navbar{
    background-color: #222;
      padding: $spacer !important;
    
   
}
.navbar-brand,
 .navbar-nav .nav-link{
  

    color: #bbb;
    &:hover{
       
        color:white;
    }
}



`;
export const NavigationBar = () =>(
 <Styles>
 <Navbar> 
 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
 <Navbar.Collapse id="basic-navbar-nav">
<Nav classname="m1-auto">
<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
<Nav.Item ><Nav.Link  href="/articles">Articles</Nav.Link></Nav.Item>  
<Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>   
</Nav>
</Navbar.Collapse>
</Navbar>
</Styles> 
)