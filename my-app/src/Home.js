import React from 'react';
import TopBar from './TopBar.jsx'
import {Carousell} from './components/Carousel.js'
import {Lists} from './components/List.js'
import ApiList from './ApiList.jsx'
import axios from 'axios'
export const Home = () =>(
<div>
<h1>Home Page</h1>
<TopBar/>
<h1>what's new</h1>
<Carousell />
{/* <Lists/> */}
<ApiList/>
<p>this is  text</p>
</div>


)