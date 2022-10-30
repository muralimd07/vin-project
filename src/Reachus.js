import react from 'react';
import {Link} from 'react-router-dom';
import Complogo from './Image/Complogo.jpeg';
function gotowhatsap(){
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var url = "https://wa.me/918148225837?text="+
  "Name:"+" "+name+"%0a"
  +"Mobile:"+" "+mobile+"%0a"
  +"Email:"+" "+email+"%0a"
  +"Message:"+" "+message+"%0a";
  window.open(url,'_blank').focus();
  
}
function clear(){
  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
   

 }

 function validateagain(){
  var revalname = document.getElementById("name").value;
  var revalemail = document.getElementById("email").value;
  var revalmessage = document.getElementById("message").value;

  if((revalname == "")&&(revalemail == "")&&(revalmessage == "")){
    alert("Please fillout these fields")
  }
  else{
    gotowhatsap();
    alert("Thanks for sharing the details with us.")
    clear();
  }
  
 }

function validate(){
  var valname = document.getElementById("name").value;
  var valmobile = document.getElementById("mobile").value;
  var valemail = document.getElementById("email").value;
  var valmessage = document.getElementById("message").value;

  if((valname == "")&&(valmobile == "")&&(valemail == "")&&(valmessage == "")){
    alert("Please fillout these fields")
  }
  else{
    gotowhatsap();
    alert("Thanks for Choosing us. we will reach you shortly");
    clear();
    
  }
}


const Reachus = () =>{
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
    <Link to='/Quote' class="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">Get a Quote
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>


        </div>
        <div>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Leave details for us to reach you and assist with your needs! </p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Name'/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="mobile" class="leading-7 text-sm text-gray-600">Contact</label>
            <input type="number" id="mobile" name="mobile" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Mobile Number' required/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Email' required/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Leave a Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Leave a Message for us'></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={validate}>Submit</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-purple-500" href ='mailto:srirangampackersandmovers@gmail.com?body=Type your Message'>
            <span class ="text-black-500">srirangampackersandmovers@gmail.com</span>

            
            </a><br/>
          <a class="text-purple-500" href='tel:+918148225837'>
         
          <p> contact:
            <span class =" text-black"> +91-8148225837</span>
          </p>

          </a>
          <p class="leading-normal my-5">19A,Vasantha Nagar, Srirangam,
           <span>Trichy- 620006</span>
           
           
          </p>
          
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
export default Reachus;