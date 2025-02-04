import { createContext, useState } from "react";

export const ThemeContxt = createContext(null)
export const ThemeContxtProvider = ({children}) =>{
    const [darkMode,setdarkMode] = useState(false)
    const value = {darkMode,setdarkMode}
return (
    <ThemeContxt.Provider value={value}>
{children}
</ThemeContxt.Provider>
)
}