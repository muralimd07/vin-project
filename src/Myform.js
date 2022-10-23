import react from 'react';
function Valdidate(){

}

const Myform = ()=>{
    return <div>
        <form>
        <div>
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get Your Quote Here!</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Fill your deatils to get a best & exclusive quotation of yours. </p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter Your Name' required/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600" >Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"placeholder='Enter Your Email' required/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="mobile" class="leading-7 text-sm text-gray-600" >Mobile</label>
            <input type="number" id="mobile" name="mobile" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"placeholder='Your Mobile Number' required/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="address" class="leading-7 text-sm text-gray-600" >Address</label>
            <input type="text" id="address" name="address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"placeholder='Enter Your Full Address' required/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="services" class="leading-7 text-sm text-gray-600" >Services</label>
            <select id="services" name="services " class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"required>
              <option>Transport</option>
              <option>Packing</option>
              <option>Packing & Shifting</option>
            </select>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600" >Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"placeholder='Leave a Message for us'></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={gotowhatsapp}>Submit</button>
        </div>
        
      </div>
    </div>
  </div>
</section>

</div>
        </form>
    </div>

}
export default Myform;