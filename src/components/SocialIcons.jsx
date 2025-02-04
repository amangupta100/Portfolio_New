import linkedIn from '../assets/linkedin-svgrepo-com.svg'
import github from '../assets/github-svgrepo-com.svg'
import twitter from '../assets/twitter-color-svgrepo-com.svg'

export const SocialIcons = () =>{
   return(
    <div className='vtb:flex gap-4'>
         <img src={linkedIn} className="w-10 cursor-pointer" alt="" />
       <img src={github} className="w-10 cursor-pointer mt-3" alt="" />
       <img src={twitter} className="w-8 mt-3 cursor-pointer" alt="" />
    </div>
   )
}