import { useContext } from 'react'
import img from '../assets/developer-pic-1.webp'
import { ThemeContxt } from '../context/ThemeContxt'
import {motion} from 'framer-motion'
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import resume from '../assets/My Resume.pdf'

export const Home = () =>{
    const {darkMode} = useContext(ThemeContxt)
    return(
        <>
            <div id='Home' className={`${darkMode?"bg-black text-white":"bg-white text-black"} w-full lm:flex-col py-16 flex h-full`}>
                <div className="w-[40%] h-full mx-auto lD:w-[55%] lm:w-[80%] ml-20">
                    <img src={img} className='w-full' alt="" />
                </div>

                <div className="w-[60%] lm:w-full justify-center flex flex-col ">
                    <div className="flex flex-col w-[50%] lm:mx-7 lD:w-[75%] tb:w-[95%] mx-auto">
                        <div className="flex justify-start  flex-col">
                            <h1 className='text-3xl lm:text-xl'>Hi, I'm</h1>
                            <h1 className='text-5xl lm:text-3xl min-h-14'>Aman Gupta</h1>
                        </div>
                        <h1 className='text-xl font-normal'>Full Stack Developer</h1>
                        <div className="flex gap-3 mt-3">
                            <a href={resume} download>
                                <button className={`${darkMode?"border-white":"border-black"} hover:border-zinc-400 transition-all duration-300 border-[1.6px] rounded-xl py-3 px-4`}>Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${darkMode?"border-white":"border-black"} w-[31px] h-[58px]  border-[3.4px] flex items-center tb:hidden justify-center absolute bottom-4 left-[50%] rounded-t-full rounded-b-full`}>
                    <motion.div animate={{y:[0,20,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:"mirror"}} className="w-[7px] h-[12px] rounded-full bg-slate-400"></motion.div>
                </div>
            </div>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}
