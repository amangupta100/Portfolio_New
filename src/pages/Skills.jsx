import { useContext } from "react"
import cpp from '../assets/cpp-svgrepo-com.svg'
import js from '../assets/javascript-svgrepo-com.svg'
import ts from '../assets/typescript-svgrepo-com.svg'
import react from '../assets/react-svgrepo-com.svg'
import node from '../assets/nodejs-1-logo-svgrepo-com.svg'
import mongo from '../assets/mongodb-logo-svgrepo-com.svg'
import express from '../assets/express-svgrepo-com.svg'
import postman from '../assets/postman-icon-svgrepo-com.svg'
import github from '../assets/github-svgrepo-com.svg'
import socket from '../assets/socket-dot-io-svgrepo-com.svg'
import { ThemeContxt } from "../context/ThemeContxt"
import tailwind from '../assets/tailwind-svgrepo-com.svg'

export const Skills = () =>{
    const {darkMode} = useContext(ThemeContxt)
    const Languages = [cpp,js,ts]
    const fr_Lb = [react,node,express,socket,tailwind] 
    const tools_data = [mongo,github,postman]
    return(
        <div id="Skills" className={`${darkMode?"bg-black text-white":"bg-white text-black"} py-20 w-full min-h-96`}>
           
        <div className="w-[90%] min-h-full mx-auto">
         <h1 className=" text-8xl tb:text-5xl lm:text-4xl lm:min-h-14 lm:mt-2 min-h-28 mt-5 font-semibold bg-gradient-to-br to-[rgb(253,80,80)] from-[#ffeb0c] inline-block text-transparent bg-clip-text ">My Skills</h1>

        <div className="">
            <h1 className="text-xl font-semibold">Languages</h1>
            <div className="flex gap-6 items-center mt-3">
            {
                Languages.map((elem,idx)=>{
                    return <img key={idx} src={elem} className="w-14" alt="" />
                })
            }
            </div>
        </div>

        <div className="mt-7">
            <h1 className="text-xl font-semibold">Frameworks/Libraries</h1>
            <div className="flex gap-6 items-center mt-3">
            {
                fr_Lb.map((elem,idx)=>{
                    return <img key={idx} src={elem} className="w-14" alt="" />
                })
            }
            </div>
        </div>

        <div className="mt-7">
            <h1 className="text-xl font-semibold">Data/Tools</h1>
            <div className="flex gap-6 items-center mt-3">
            {
                tools_data.map((elem,idx)=>{
                    return <img key={idx} src={elem} className="w-14" alt="" />
                })
            }
            </div>
        </div>

        </div>

        </div>
    )
    }