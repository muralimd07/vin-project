import react from 'react';
import { ReactDOM } from 'react-dom';
import  Truck from './Image/Truck.png'; 
import Aboutsp from './Image/Aboutsp.jpg';
import Complogo from './Image/Complogo.jpeg';
import {Zoom} from 'react-reveal/Zoom';
import Quote from './Quote';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './About';
import {Link} from 'react-router-dom';
import { Bounce } from 'react-reveal';
import { Helmet } from 'react-helmet';






const Home= ()=>{ return <div>
  
      
      
       

      
      
      
        <div>
        
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div class=" pt-5 w-10 h-10 inline-flex items-center justify-center rounded-full  text-purple-500 mb-5 flex-shrink-0">
          <img src ={Complogo}></img>
        </div>
      
      
         <span class="ml-3 text-xl">Srirangam Packers & Movers</span>
      
    </a>
    
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link to ='/' class="mr-5 hover:text-gray-900">Home</Link>
    <Link to ='/about' class ="mr-5 hover:text-gray-900">About</Link>
    <Link to='/Services' class="mr-5 hover:text-gray-900">Services</Link>
    <Link to ='/Reachus'class="mr-5 hover:text-gray-900" >Reach Us</Link>
    
</nav>
<div class ="md:ml-auto  md:mr-auto flex flex-wrap items-center text-base justify-center">
<a class=" mt-2 mr-5  hover:text-green-900" href='tel:+918148225837'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

    </a>
    
<a class="mt-2 ml-auto mr-5 hover:text-grey-900" href='mailto:srirangampackersandmovers@gmail.com?body=Type your Message'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg></a>
    

</div>

    <Link to='/Quote' class="text-xl inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">Get a Quote
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
</div>
<div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-justify">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Make a Smart Move
       
      </h1>
      <p class="mb-8 leading-relaxed text-center text-justify"> Goods are like our family members that travel with us wherever we move in the world. It is always a beautiful matter to decorate our home with goods. we wish to buy the goods and fill them at home in order to get the attraction of visitors and make our day to day activities at ease. It's very easy to gift them to others. But when it is come to shifting them, it's not an ordinary task to do. There are a lot of queries running through our mind when we are in thought of how to shift them while every time buying them. We are here for you to answer all of your queries and provide solutions!.</p>
      <div class="flex justify-center">
        <Link to='/Gallery' class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Gallery</Link>
        <Link to ='/about' class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">Learn More</Link>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={Aboutsp}/>
    </div>
  </div>
</section>

</div>
   



<Bounce>
<div>
  
      <a
        href="https://wa.me/918148225837"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      > 
       <i class="fa fa-whatsapp whatsapp-icon"></i>
        
      </a>
      

      </div>
      </Bounce>
      <div>
      <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <div class=" pt-5 w-20 h-20 inline-flex items-center justify-center rounded-full  text-purple-500 mb-5 flex-shrink-0">
          <img src ={Complogo}></img>
        </div>
      <span class="ml-3 text-xl"></span>
    </a>
   
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 -
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Srirangam Packers & Movers</a>
    </p>
    <span class="inline-flex mr-20 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <p class = "ml-10 mr-5">Follow us on</p>
      <a class="text-gray-500" href="https://www.facebook.com/profile.php?id=100086305726574">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      
      <a class="ml-3 text-gray-500" href="https://instagram.com/srirangam_packersandmovers?igshid=NjZiMGI4OTY=">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      
    </span>
  </div>
</footer>
      </div>
      
      

</div>

}
export default Home;