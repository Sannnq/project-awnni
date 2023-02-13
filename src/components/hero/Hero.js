import './Hero.css'

const Hero=()=>{

return<>

 <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left background-radial-gradient">
      <div className="container mx-auto xl:px-32 text-gray-800">
        <div className="grid lg:grid-cols-2 gap-12 xl:flex items-center">
          <div className="mt-12 lg:mt-0" style={{zIndex:10}}>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style={{color: "hsl(218, 81%, 95%)"}}>Introducing Linker, <br /><span style={{color: "hsl(218, 81%, 75%)"}}>solution a vos problèmes electroniques.</span></h1>
            <p className="opacity-70 lg:text-xl" style={{color: "white"}}>
              Linker est une plateforme vous mettant en relation avec des experts dans votre région
               afin de palier à tous vos soucis de maintenance,
               dépannage et installation de solutions et outils electroniques.
            </p>
          </div>
          <div className="mb-12 lg:mb-0 relative">
            {/* <div id="radius-shape-1" className="absolute rounded-full shadow-lg"></div>
            <div id="radius-shape-2" className="absolute shadow-lg"></div> */}
            <div className=" rounded-lg bg-glass px-6 py-12 md:px-0 lg:w-[150%]">
             
            <img src='mobile.png' alt=''/>

            </div>
          </div>
        </div>
      </div>
    </div>
   
</>

}

export default Hero;

