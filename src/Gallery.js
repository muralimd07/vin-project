import react from 'react';
import { Link } from 'react-router-dom';
import Complogo from './Image/Complogo.jpeg';
import Team from './Image/Team.jpg';
import Packman from './Image/Packman.jpg';
import House from './Image/House.png';
import Vehicle from './Image/Vehicle.jpeg';
import Loading from './Image/Loading.jpg';
import Mytruck from './Image/Mytruck.jpg';
const Gallery = () =>{
    return <div>
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
    <Link to ='/Quote' class="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">Get a Quote
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
      </div>
        <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Gallery</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Here you can find some images that let you know about our services. It contains collections of images like packing materials we use, shifting assistance, transport etc..</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={Loading}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={Mytruck}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={Team}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={Packman}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={House}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={Vehicle}/>
        </div>
      </div>
    </div>
  </div>
</section> 
        </div>
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
      <a class="text-gray-500" href='https://www.facebook.com/profile.php?id=100086305726574'>
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      
      <a class="ml-3 text-gray-500" href='https://instagram.com/srirangam_packersandmovers?igshid=NjZiMGI4OTY='>
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
export default Gallery;