import { useContext } from "react"
import { ThemeContxt } from "../context/ThemeContxt"
import { IoMdLink } from "react-icons/io";
import github from '../assets/github-svgrepo-com.svg'
import munch from '../assets/Screenshot (96).png'
import quickTalk from '../assets/Screenshot (95).png'
import visVerse from '../assets/Screenshot (97).png'

export const Projects= () =>{
    const {darkMode} = useContext(ThemeContxt)
    const projects = [
        {
       name:"Munch.in",link:"https://munch-in.vercel.app/",github:"https://github.com/amangupta100/Munch.in.git",description:"Munch.in, a full stack food delivery app that features  seamless user authentication and authorization,address management,personalized cart & dedicated payment gateway and much more eye-catching UI and features",screenSh:munch
    },
    {
        name:"QuickTalk",link:"https://quick-talk2-client.vercel.app",github:"https://github.com/amangupta100/QuickTalk2.git",description:"QuicTalk, a full stack real time messaging app that features secured authentication and authorization, users with status, profile upload and responsive UI",screenSh:quickTalk
    },
    {
        name:"VisualVerse",link:null,github:null,description:"VisualVerse, a full stack Saas(Software as a service) web-app that can generate images from text, responsive UI",screenSh:visVerse
    }
]
    return(
        <div id="Projects" className={`${darkMode?"bg-black text-white":"bg-white text-black"} w-full min-h-96`}>
            
        <div className="w-[90%] min-h-full mx-auto">
            <h1 className="text-xl mt-10 lm:mt-7 font-semibold text-zinc-400 uppercase">My works</h1>
            <h1 className="text-8xl tb:text-5xl lm:text-5xl mt-5 lm:min-h-16 lm:mt-2  bg-gradient-to-br to-[rgb(253,80,80)] from-[#ffeb0c]  text-transparent bg-clip-text  font-semibold min-h-28 ">Projects .</h1>

            <div className="py-10 lm:py-0 flex flex-wrap gap-8">
            {
            projects.map((elem,idx)=>{
                return(
            <div key={idx} className="w-[360px] hover:shadow-2xl hover:shadow-zinc-400 duration-300 transition-all relative h-[390px] p-3 border-[1.6px] border-zinc-200 rounded-xl ">

           {
            elem.link ?  <IoMdLink onClick={()=>window.open(elem.link)} className={`text-black absolute top-4 cursor-pointer right-14 text-2xl`}/>:null
           }
           {
            elem.github? <img onClick={()=>window.open(elem.github)} src={github} className="w-10 top-2 cursor-pointer absolute right-2" alt="" />:null
           }
           
           <img src={elem.screenSh} className="w-full rounded-xl border-[1.6px] border-zinc-300" alt="" />
           <h1 className="text-xl mt-3 font-semibold"> {elem.name} </h1>
           <h1 className="text-base"> {elem.description} </h1>
            </div>
                )
            })
            }
        </div>

        </div>
        <button onClick={()=>window.open("https://github.com/amangupta100")} className="h-14 lm:mx-[28%] mx-[45%] mb-10 px-5 font-semibold w-44 hover:border-zinc-600 rounded-full border-[1.5px] border-zinc-300 py-3">More Projects</button>
 
        </div>
    )
    }