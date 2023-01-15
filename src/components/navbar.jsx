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
    <div className='w-100 bg-red-200 dark:bg-purple-200 flex justify-center  '>
     

     <div class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">        
        <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a>
        <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Roadmap</a>
       
        <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Uility</a>
        <a href="#" class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Meet The Team</a>
        <button className='bg-green-200 p-3 darkmode-button rounded-3xl '  onClick={handleThemeSwitch}>
        Dark mode
      </button>
      </div>   

     

      
    
    
    </div>
    
  );
}

export default Navbar;
