
import './App.css';
import Home from './Home';
import { render } from '@testing-library/react';
import { Zoom } from 'react-reveal';
import About from './About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Services from './Services';
import Gallery from './Gallery';
import Quote from './Quote';
import Blog from './Blog';
import Reachus from './Reachus';
import { Helmet } from 'react-helmet';



 const App = () =>{
    return (
      <>     
      <Helmet>
      <title>Srirangam Packers & Movers</title>
<meta name="description" content="Goods are like our family members that travel with us 
    wherever we move in the world. It is always a beautiful matter to decorate our home with 
    goods. we wish to buy the goods and fill them at home in order to get the attraction 
    of visitors and make our day-to-day activities at ease."/>
<meta name="keywords" content="packers in srirangam"/>
<meta itemprop="name" content="Srirangam Packers & Movers"/>
<meta itemprop="description" content="Goods are like our family members that travel 
with us wherever we move in the world. It is always a beautiful matter to decorate our 
home with goods. we wish to buy the goods and fill them at home in order to get the attraction 
of visitors and make our day-to-day activities at ease."/>
<meta itemprop="image" content="http://srirangampackersandmovers.com/static/media/Complogo.5d67759a.jpeg"/>

<meta property="og:url" content="http://srirangampackersandmovers.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Srirangam Packers & Movers"/>
<meta property="og:description" content="Goods are like our family members that travel with us 
wherever we move in the world. It is always a beautiful matter to decorate our home with goods. 
we wish to buy the goods and fill them at home in order to get the attraction of visitors and make 
our day-to-day activities at ease."/>
<meta property="og:image" content="http://srirangampackersandmovers.com/static/media/Complogo.5d67759a.jpeg"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Srirangam Packers & Movers"/>
<meta name="twitter:description" content="Goods are like our family members that 
travel with us wherever we move in the world. It is always a beautiful matter to decorate 
our home with goods. we wish to buy the goods and fill them at home in order to get the
 attraction of visitors and make our day-to-day activities at ease."/>
<meta name="twitter:image" content="http://srirangampackersandmovers.com/static/media/Complogo.5d67759a.jpeg"/>
      </Helmet>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='Services' element={<Services/>} />
        <Route path='Gallery' element={<Gallery/>}/>
        <Route path='/Quote' element={<Quote/>}></Route>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path ='/Reachus' element={<Reachus/>}></Route>
        <Route path ='/*' element={<Home/>}></Route>
        
        <Route />
        
      </Routes>
      </BrowserRouter> 
</>
    );
      
    
 }
 
 export default App;
