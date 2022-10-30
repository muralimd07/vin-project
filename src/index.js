import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {Zoom } from 'react-reveal';


//for pre-render
// ReactDOM.render(
  
//     <Zoom>
//     <App/>

//     </Zoom>   
//   ,
//   document.getElementById('root')
// );

const rootElement=document.getElementById('root');
if(rootElement.hasChildNodes())
{
  ReactDOM.hydrate(<Zoom><App/></Zoom>,rootElement);
}
else
{
  ReactDOM.render(<Zoom><App/></Zoom>,rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
