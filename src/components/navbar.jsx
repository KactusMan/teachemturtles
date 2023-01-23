
/* eslint-disable jsx-a11y/anchor-is-valid */


// import { useState, useEffect } from 'react';


 function Navbar() {


  

// const [theme, setTheme] = useState("light");
  
// useEffect(() => {
//   if (theme === 'dark') {
//   document.documentElement.classList.add("dark")
//    } else {
//     document.documentElement.classList.remove("dark")
//    }
// }, [theme])

// const handleThemeSwitch = (() => {
//   setTheme(theme === "dark" ? "light" : "dark");
// })






  return (
    <div className="parent md:w-screen lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">

      {/* left div, div 1 of grid */}
      
      <div className="div1   lg:p-10 lg:bottom-[37%] relative xl:bottom-[6%] xl:p-10  2xl:p-10 2xl:bottom-[6%]">
        <hr className="hr-div-1 lg:w-[106%] lg:mb-[1em]  xl:w-[106%] xl:mb-[1.5em] 2xl:w-[100%] 2xl:mx-[2.2%] 2xl:mb-[1.5em]" />

      <span className=" manrope-light lg:text-[12px] xl:text-[15px] 2xl:text-[22px] md:p-10  lg:p-10   xl:p-10 2xl:p-10 2xl:mx-[2%] relative  ">Home</span>
      <span className=" manrope-light lg:text-[12px] xl:text-[15px] 2xl:text-[22px] md:p-10 lg:p-10  xl:p-10  2xl:p-10 2xl:mx-[2%] relative">Roadmap</span>
      <span className=" manrope-light lg:text-[12px] xl:text-[15px] 2xl:text-[22px] md:p-10 lg:p-10  xl:p-10  2xl:p-10 2xl:mx-[2%] relative">FAQ</span>
      <span className=" manrope-light lg:text-[12px] xl:text-[15px] 2xl:text-[22px] md:p-10 lg:p-10  xl:p-10  2xl:p-10 2xl:mx-[2%] relative">Team</span>
      </div>

        <div className="logo-div relative lg:w-[100%] lg:bottom-[55%] xl:w-[100%] xl:bottom-[26%] lg:left-[15%] 2xl:w-[100%] 2xl:left-[22%] 2xl:bottom-[26%]">
          <img className="logo " src="./assets/turtle-logo.png" alt="turtles" />
        </div>

        {/* right div, div 2 of grid */}

      <div className="div2 lg:p-10 lg:bottom-[37%]  xl:p-10 lg:mx-[-4.9%] lg:bottom-[18%] relative  xl:mx-[-4.9%] xl:bottom-[6%] 2xl:p-10 2xl:bottom-[6%]">
      <hr className="hr-div-2 lg:w-[86%] lg:mx-[5%] lg:mb-[1em] xl:w-[93%] xl:mb-[1.5em] 2xl:w-[100%]"/>
      
      <a href="discord.gg/teachemturtles">
      <img  className=" disc-img   lg:w-[24px] lg:mx-[12%] lg:top-[8%]  xl:mx-[8%]  xl:w-[24px] 2xl:w-[45px] 2xl:top-[20%] 2xl:mx-[8%] relative"  src="./assets/Discord-icon.png" alt="discord" />
      </a>
      

      <a href="twitter.com/teachemturtles">
      <img  className=" twitter-img lg:w-[24px] lg:mx-[26%] lg:bottom-[15%]  xl:mx-[24%] xl:w-[24px] xl:bottom-[20%] 2xl:w-[45px] 2xl:mx-[24%] 2xl:bottom-[10%] relative"  src="./assets/Twitter-icon.png" alt="twitter" />
      </a>
      
      <a href="https://opensea.io">
      <span className="os manrope-light xl:text-[15px]  xl:p-8 lg:text-[12px] xl:mx-[-2%] relative lg:p-8 2xl:p-8 2xl:text-[22px] 2xl:mt-4 ">Opensea</span>
      </a>
      <span className="wallet manrope-light xl:text-[15px]  xl:p-8 lg:text-[12px]  lg:p-8 2xl:p-8 2xl:text-[22px]">Connect Wallet</span>
      
      </div>
      
    </div>
  );
  }

export default Navbar;
