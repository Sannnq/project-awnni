const Points=()=>{

return<section class="bg-gray-800 pt-20 pb-20">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
        <p class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-10" style={{color: "hsl(218, 81%, 95%)"}}>Services disponibles,</p>
            {/* <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 0">
                    <img class="w-10 h-10 text-blue-600 lg:w-12 lg:h-12 ml-1 dark:text-blue-300" src="icons/install.png" alt=""/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Service d'installation</h3>
                <p class="text-gray-500 dark:text-gray-400 text-justify">Installation d'équipemments et d'appareils électroniques, comprenant les systèmes de réseaux et sécurités.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                    <img class="w-10 h-10 text-blue-600 lg:w-12 lg:h-12 ml-1 dark:text-blue-300" src="icons/maintenance.png" alt=""/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Service de maintenance</h3>
                <p class="text-gray-500 dark:text-gray-400 text-justify">Entretien régulier d'équipement électroniques et systèm automatiques afin d'assurer leurs fonctionnement continue et prevenir d'eventuelles défaillances.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                    <img class="w-10 h-10 text-blue-600 lg:w-12 lg:h-12 ml-1 dark:text-blue-300" src="icons/update.png" alt=""/>                    
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Mise à niveau et modification</h3>
                <p class="text-gray-500 dark:text-gray-400 text-justify">Mise à niveau et modifications d'équipements, d'appareils electroniques et systemes automatiques.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                    <img class="w-10 h-10 text-blue-600 lg:w-12 lg:h-12 ml-1 dark:text-blue-300" src="icons/recycle.png" alt=""/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Recyclage et élimination</h3>
                <p class="text-gray-500 dark:text-gray-400 text-justify">Recyclage et élimination responsable des déchets électroniques.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                    <img class="w-10 h-10 text-blue-600 lg:w-12 lg:h-12 ml-1 dark:text-blue-300" src="icons/assistance.png" alt=""/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Assistance technique</h3>
                <p class="text-gray-500 dark:text-gray-400 text-justify">Mise à disposition d'une assistance techniquepour les equipement et appareils electroniques, afin de palier a tous problèmes de disponibilités.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 ">
                    <img class="w-10 h-10 text-blue-600 lg:w-12 lg:h-12 ml-1 dark:text-blue-300" src="icons/shop.png" alt=""/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Vente et distribution</h3>
                <p class="text-gray-500 dark:text-gray-400 text-justify">Service de vente et distribution d'appareils électronique, systemes automatiques et de sécurité.</p>
            </div>
        </div>
    </div>
  </section>

}

export default Points;