import './Mission.css'

const Mission=()=>{

return<div id='mission' className="bg-[#111827]">

<div class="container  mx-auto">

<section class=" py-32 ">
 

  <div class="flex flex-wrap">
    <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
      <div class="flex lg:py-12">
        <img src="mission.png" class="w-full rounded-lg"
          id="cta-img-nml-50" style={{zIndex:"10"}} alt="" />
      </div>
    </div>

    <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
      <div
        class=" h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
        <div class="lg:pl-12">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 z-10" style={{color: "hsl(218, 81%, 95%)"}}>Notre Mission, <br /><span style={{color: "hsl(218, 81%, 75%)"}}></span></h1>
        <p className="opacity-70 lg:text-xl text-justify" style={{color: "white"}}>
               awni est une plateforme vous mettant en relation avec des experts dans votre région
               afin de palier à tous vos soucis de maintenance,
               dépannage et installation de solutions et outils electroniques.
            </p>


            <div className="mb-12 lg:mb-0 lg:top-20 relative">
            <div id="radius-shape-1" className="absolute rounded-full shadow-lg" style={{top:"20px"}}></div>
          </div>


        </div>
      </div>
    </div>
  </div>
</section>

</div>
</div>

}

export default Mission;

