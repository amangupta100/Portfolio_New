import { createContext, useState } from "react";

export const MenuContext = createContext()
export const MenuContxtProvider = ({children}) =>{
    const [menuCont,setmenuCont] = useState(false)
    const value = {menuCont,setmenuCont}
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}