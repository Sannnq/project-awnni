const Footer=()=>{

return<footer class="flex justify-center px-4 pt-10 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
    <div class="container px-6 py-6">
        <h1 class="text-lg font-bold text-center lg:text-2xl">
           Inscrivez-vous à notre Newletter, <br/> pour ne rien manquer sur nos mise a jours.
        </h1>

        <div class="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
    
            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
            </button>
        </div>

        <hr class="h-px bg-gray-200 border-none my-7 dark:bg-gray-700"/>

        <div class="flex flex-col items-center justify-between md:flex-row"/>
          

            <div class="flex justify-center mt-4 md:m-0">
                <div class="-mx-4">
                    <span>Copyright 2023, Linker Co. </span>
                    {/* <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                    <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blog</a>
                    <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
                    <a href="#" class="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a> */}
                </div>
            </div>
        </div>
</footer>



}

export default Footer;