import 'flowbite';
const Navbar = () => {

  const toContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("clicked");
  };

  const toMission = () => {
    const element = document.getElementById('mission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("clicked");
  };


  return <><nav className=" px-2 sm:px-4 py-2.5 bg-gray-900 ">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" className="flex items-center">
        <img src="logo.png" className="h-12 mr-3 sm:h-12 lg:ml-32" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
      </a>
      <div className="flex md:order-2">
        <button type="button" className="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover: focus:ring-blue-800" onClick={toContact}>Contactez-nous</button>
        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:mr-40" id="navbar-cta">
        <ul className="flex flex-col p-4 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
          <li>
            <a href="/" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Acceuil</a>
          </li>
          <li>
            <button onClick={toMission} className="block py-2 pl-3 pr-4  rounded md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">A propos de nous</button>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  
  
  </>
}
export default Navbar;