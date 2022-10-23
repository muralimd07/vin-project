
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



 const App = () =>{
  
    return (
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
        
        <Route />
        
      </Routes>
      </BrowserRouter> 

    );
      
    
 }
 
 export default App;
