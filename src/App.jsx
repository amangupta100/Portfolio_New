import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import {Navbar} from "./components/Navbar"
import { MenuContent } from './components/MenuContent'
import { SocialIcons } from './components/SocialIcons'
import { About } from './pages/About'

export const App = () =>{
  return(
    <div>
    <div className="fixed z-50  flex flex-col items-center right-3 vlm:hidden top-[40%] ">
    <SocialIcons/>
    </div>
    <MenuContent/>
    <Navbar/>
    <Home/>
    </div>
  )
}