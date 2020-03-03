
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'
const Styles = styled.div`
.container{
   background-color:#ccc;


}`
export const Layout = (props) =>(
    <Styles>
   <Container>
       {props.children}
   </Container>
   </Styles>
    )
