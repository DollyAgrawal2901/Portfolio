

// export default function Navbar() {
//     const button = 'text-white  hover:bg-gray-900 font-medium rounded-lg  px-3 py-2.5 me-2 dark:hover:bg-gray-700 dark:border-gray-700'
//   return (
//     <>
//     <nav className="flex py-4 bg-cyan-900 space-x-72 w-auto">
//         <h3 className="float-left px-28 font-bold text-3xl" >Dolly Agrawal</h3>
//         <ul className="flex float-right">
//             <li className={button}><button>Home</button></li>
//             <li className={button}><button>About</button></li>
//             <li className={button}><button>Skill</button></li>
//             <li className={button}><button>Education</button></li>
//             <li className={button}><button>Service</button></li>
//             <li className={button}><button>Blog</button></li>
//             <li className={button}><button>Contact</button></li>
//         </ul>
//     </nav>
//     <div className="relative w-full">
//   <img src="/50-Beautiful-and-Minimalist-Presentation-Backgrounds-013.jpg" alt="simple image" className="w-screen h-[36rem] object-cover" />
//   <div className="absolute  inset-0 flex justify-center items-center">
//     <h3 className="text-6xl text-white">Dolly Agrawal</h3>
//   </div>
// </div>

//     </>
//   )
// }



import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const button = 'text-white hover:bg-gray-900 font-medium rounded-lg px-3 py-2.5 me-2 dark:hover:bg-gray-700 dark:border-gray-700 w-full text-left';

  return (
    <>
      <nav className="bg-cyan-900 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h3 className="text-3xl font-bold text-white">Dolly Agrawal</h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-950 rounded-lg bg-cyan-800 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-cyan-900">
              <li className="md:inline-flex">
                <button className={button}>Home</button>
              </li>
              <li className="md:inline-flex">
                <button className={button}>About</button>
              </li>
              <li className="md:inline-flex">
                <button className={button}>Skill</button>
              </li>
              <li className="md:inline-flex">
                <button className={button}>Education</button>
              </li>
              <li className="md:inline-flex">
                <button className={button}>Service</button>
              </li>
              <li className="md:inline-flex">
                <button className={button}>Blog</button>
              </li>
              <li className="md:inline-flex">
                <button className={button}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="relative w-full pt-16">
        <img
          src="/50-Beautiful-and-Minimalist-Presentation-Backgrounds-013.jpg"
          alt="simple image"
          className="w-screen h-[36rem] object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h3 className="text-6xl text-white">Dolly Agrawal</h3>
        </div>
      </div>
    </>
  );
}

