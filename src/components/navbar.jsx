import React from 'react'
import { style } from '../util/style'
import { navigationLinks } from '../util/contstants'
import { logo, menu, close } from '../assets'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [active, setActive] = useState('home')
  const toggleHandler = () => setToggleMenu(prev => !prev)
  const activeHandler = (id) => setActive(id)

  return (
    <div className={`w-full p-2 ${style.flexBetween}`}>
        <img src={logo} alt="Logo" className=" h-[95px] cursor-pointer" />
        <ul className="list-none hidden sm:flex justify-end items-center flex-1">
            {navigationLinks.map((nav, idx) => (
                <li key={nav.id} className={`font-montserrat font-normal text-white cursor-pointer text-[16px] 
                  ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                  ${active === nav.id ? "text-white" : "text-slate-400"}
                  hover:text-white transition-all duration-300`}
                  onClick={() => activeHandler(nav.id)}
                  >{nav.title}</li>
            ))}
        </ul>
        <div className={"sm:hidden flex flex-1 justify-end items-center"}>
          <img src={toggleMenu ? close : menu} alt="menu" className="w-[30px] h-[30px] object-contain cursor-pointer" onClick={toggleHandler} />
          <div className={`${!toggleMenu ? `hidden` : `flex`} p-5 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}>
          <ul className="list-none flex justify-center items-center flex-1">
            {navigationLinks.map((nav, idx) => (
                <li key={nav.id} className={`font-montserrat font-normal text-white cursor-pointer text-[16px] 
                  ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'} 
                  ${active === nav.id ? "text-white" : "text-slate-400"}
                  hover:text-white transition-all duration-500`}
                  onClick={() => activeHandler(nav.id)}
                  >{nav.title}</li>
            ))}
        </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar