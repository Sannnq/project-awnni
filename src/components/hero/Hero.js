import './Hero.css'

const Hero=()=>{

return<>

 <div class="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left background-radial-gradient">
      <div class="container mx-auto xl:px-32 text-gray-800">
        <div class="grid lg:grid-cols-2 gap-12 xl:flex items-center">
          <div class="mt-12 lg:mt-0" style={{zIndex:10}}>
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style={{color: "hsl(218, 81%, 95%)"}}>The best offer <br /><span style={{color: "hsl(218, 81%, 75%)"}}>for your business</span></h1>
            <p class="opacity-70" style={{color: "white"}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>
          <div class="mb-12 lg:mb-0 relative">
            {/* <div id="radius-shape-1" class="absolute rounded-full shadow-lg"></div>
            <div id="radius-shape-2" class="absolute shadow-lg"></div> */}
            <div class=" rounded-lg bg-glass px-6 py-12 md:px-0 lg:w-[150%]">
             
            <img src='mobile.png' alt=''/>

            </div>
          </div>
        </div>
      </div>
    </div>
   
</>

}

export default Hero;

