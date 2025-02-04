import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App.jsx'
import { ThemeContxtProvider } from './context/ThemeContxt.jsx'
import { MenuContxtProvider } from './context/MenuContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
   <ThemeContxtProvider>
   <MenuContxtProvider>
    <App />
   </MenuContxtProvider>
    </ThemeContxtProvider>
    </BrowserRouter>
)
