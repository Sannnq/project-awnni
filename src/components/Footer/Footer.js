const Footer = () => {

    return <footer className="flex justify-center px-4 pt-10 text-gray-300 bg-gray-900">
        <div className="container px-6 py-6">
            <h1 className="text-lg font-bold text-center lg:text-2xl">
                Inscrivez-vous à notre Newletter, <br /> pour ne rien manquer sur nos mise a jours.
            </h1>

            <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input id="email" type="text" className="px-4 py-2  border rounded-md bg-gray-800 text-gray-300 border-gray-600  focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Votre adress email" />

                <button className="w-full px-6 py-2.5 text-lg font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    S'inscrire
                </button>
            </div>

            <hr className="h-px  border-none my-7 bg-gray-700" />

            <div className="flex flex-col items-center justify-between md:flex-row" />


            <div className="flex justify-center mt-4 md:m-0">
                <div className="-mx-4">
                    <span> © Copyright 2023, Linker Co. </span>
                    {/* <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 text-gray-200 hover:text-blue-500 hover:text-blue-400 hover:underline">About</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 text-gray-200 hover:text-blue-500 hover:text-blue-400 hover:underline">Blog</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 text-gray-200 hover:text-blue-500 hover:text-blue-400 hover:underline">News</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 text-gray-200 hover:text-blue-500 hover:text-blue-400 hover:underline">Contact</a> */}
                </div>
            </div>
        </div>
    </footer>



}

export default Footer;