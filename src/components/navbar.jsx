/* eslint-disable jsx-a11y/anchor-is-valid */


import { useState, useEffect } from 'react';


function Navbar() {

const [theme, setTheme] = useState("light");
  
useEffect(() => {
  if (theme === 'dark') {
  document.documentElement.classList.add("dark")
   } else {
    document.documentElement.classList.remove("dark")
   }
}, [theme])

const handleThemeSwitch = (() => {
  setTheme(theme === "dark" ? "light" : "dark");
})






  return (
    <div className='w-100 transparent  dark:bg-purple-200  '>
     

     <div class="w-full md:w-auto  text-right text-bold mt-5 md:mt-0 absolute nav border-t-2 border-blue-900 md:border-none  ">        
     <div className="lg:flex  lg:items-center  ">
        <ul className="flex space-x-6">
          <a href="/">
          <li className="text-lg 
                              text-white hover:dark:text-black bg-white hover:bg-[#cf89ac] hover:dark:bg-[#F8EDE3] bg-opacity-10  
                              items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row font-bold leading-[20px] text-center text-[#DDDDDD]  cursor-pointer">Utilities & Perks</li></a>
          <li className="text-lg 
                              text-white hover:dark:text-black bg-white hover:bg-[#cf89ac] hover:dark:bg-[#F8EDE3] bg-opacity-10  
                              items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row font-bold leading-[20px] text-center text-[#DDDDDD]  cursor-pointer">Roadmap</li>
          <li className="text-lg 
                              text-white hover:dark:text-black bg-white hover:bg-[#cf89ac] hover:dark:bg-[#F8EDE3]  bg-opacity-10  
                              items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row font-bold leading-[20px] text-center text-[#DDDDDD]  cursor-pointer">Turtle Team</li>
          <li className="text-lg  
                              text-white hover:dark:text-black bg-white hover:bg-[#cf89ac] hover:dark:bg-[#F8EDE3] bg-opacity-10  
                              items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row  font-bold leading-[20px] text-center text-[#DDDDDD] cursor-pointer">Mint Details</li>
        </ul>
       
       
     
        <button className='bg-[#edbeb7] p-2 darkmode-button rounded-3xl text-lg 
                              text-white hover:dark:text-black bg-white hover:bg-[#cf89ac] hover:dark:bg-[#F8EDE3] bg-opacity-10  
                              items-center relative h-7 items-center font-mono tracking-wider pt-1.1 first::pt-0 duration-200 uppercase text-2xs font-500 padding-huge duration-200 items-center px-4 rounded flex justify-center flex-row font-bold leading-[20px] text-center text-[#DDDDDD]  cursor-pointer '  onClick={handleThemeSwitch}>
        Dark mode
      </button>
      </div>
      </div>   

     

      
    
    
    </div>
    
  );
}

export default Navbar;
