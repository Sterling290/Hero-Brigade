import React from 'react';
import TopBar from './TopBar.jsx'
import {Carousell} from './components/Carousel.js'
import {Lists} from './components/List.js'
import News from './News.jsx'
import ApiList from './ApiList.jsx'
import home from './Home.css'
import axios from 'axios'

export const Home = () =>(
<div>
<br></br>
<h1>What's New</h1>
<TopBar/>
<br></br>
<Carousell/><br></br>
<News/>
<h1> Related Items </h1>
<TopBar/><br></br>
<ApiList/>
</div>


)