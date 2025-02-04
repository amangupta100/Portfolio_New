import { useContext } from "react"
import { ThemeContxt } from "../context/ThemeContxt"

export const About = () =>{
    const {darkMode} = useContext(ThemeContxt)
    const data = [
        {
        field:"Frontend Development"

    },
    {
        field:"Backend Development"
    },
    {
        field:"Problem Solving"
    }
]

    return(
        <div className={`${darkMode?"bg-black text-white":"bg-white text-black"} px-16 tb:px-8`}>
            <h1 className="mt-16 uppercase font-semibold text-zinc-400 text-xl lm:text-lg">Introduction</h1>
            <h1 className="text-8xl lm:text-5xl lm:min-h-16 min-h-28 font-semibold mt-2 bg-gradient-to-br to-[rgb(253,80,80)] from-[#ffeb0c] inline-block text-transparent bg-clip-text ">Overview .</h1>
           
            <div className="w-[85%] lm:w-full text-lg ">
            <p>
    A passionate full stack developer with a keen eye for implementing the best logic and features, ensuring seamless functionality across front-end and back-end systems
    Having strong problem-solving skills, innovative thinking, and the ability to optimize performance while maintaining clean, scalable code. Continuously driven by a desire to learn and adapt to emerging technologies, delivering efficient and user-friendly solutions</p>
    
            </div>

           <div className="flex justify-between gap-10 lm:w-[90%] tb:w-full flex-wrap w-[80%] m-5">
          {
            data.map((elem,idx)=>{
                return(
                    <div key={idx} className="w-80 h-[350px] rounded-xl flex items-center justify-center border-[1.6px] border-zinc-400">
                        <h1 className="text-lg font-semibold">{
                            elem.field
                        }</h1>
                    </div>
                )
            })
          }
           </div>
        </div>
    )
    }