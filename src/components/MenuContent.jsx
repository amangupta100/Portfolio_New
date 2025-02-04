import { useContext, useEffect } from "react"
import { MenuContext } from "../context/MenuContext"
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";
import { ThemeContxt } from "../context/ThemeContxt";


export const MenuContent = () =>{
    const {darkMode} = useContext(ThemeContxt)
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
    },[])
    const {menuCont,setmenuCont} = useContext(MenuContext)
    return(
        <div className={`${menuCont?"w-full h-full fixed z-[1000] top-0 left-0 right-0  bg-black/40 backdrop-blur-md":"hidden"}`}>
       <div className="relative w-full flex flex-col items-center justify-center h-full">
       <IoCloseOutline onClick={()=>setmenuCont(!menuCont)} className={`${darkMode?"text-white":"text-black"} text-3xl right-5 absolute top-5`}/>
        
        <div className="flex flex-col text-white items-center gap-5 text-xl px-12 py-5">
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Contact</NavLink>
        </div>
       </div>
       <div className="flex justify-center gap-5 items-center flex-wrap absolute bottom-0 w-full">
       <SocialIcons/>
       </div>
        </div>
    )
}