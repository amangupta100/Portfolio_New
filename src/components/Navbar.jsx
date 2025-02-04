import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { ThemeContxt } from "../context/ThemeContxt";

export const Navbar = () =>{
    const {setmenuCont,menuCont} = useContext(MenuContext)
    const {darkMode,setdarkMode} = useContext(ThemeContxt)
    return(
        <div className={`${darkMode?"bg-black/70 text-white border-zinc-800":"bg-white/50 text-black border-zinc-200"} w-full fixed backdrop-blur-md py-3 border-[1.3px] z-50 flex items-center justify-around vtb:justify-between vtb:px-10`}>
            <NavLink className="text-xl first-letter:text-2xl first-letter:font-semibold">Aman Gupta</NavLink>
            <div className="flex gap-10 vtb:hidden">
                <NavLink className="text-lg">Home</NavLink>
                <NavLink className="text-lg">About</NavLink>
                <NavLink className="text-lg">Projects</NavLink>
                <NavLink className="text-lg">Skills</NavLink>
            </div>
           <div className="flex gap-2 items-center">
           {
           darkMode ? <MdOutlineLightMode onClick={()=>setdarkMode(!darkMode)} className="text-3xl cursor-pointer"/> : <CiDark onClick={()=>setdarkMode(!darkMode)} className="text-3xl cursor-pointer"/>
           }
           <svg onClick={()=>setmenuCont(!menuCont)} className="hidden vtb:inline-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" id="menu-veggie-burger">
  <path fill={`${darkMode?"#FFFF":"#000000"}`} d="M5 8.25C4.58579 8.25 4.25 8.58579 4.25 9 4.25 9.41421 4.58579 9.75 5 9.75H19C19.4142 9.75 19.75 9.41421 19.75 9 19.75 8.58579 19.4142 8.25 19 8.25H5zM5 14.25C4.58579 14.25 4.25 14.5858 4.25 15 4.25 15.4142 4.58579 15.75 5 15.75H19C19.4142 15.75 19.75 15.4142 19.75 15 19.75 14.5858 19.4142 14.25 19 14.25H5z"></path>
</svg>
           </div>
        </div>
    )
}