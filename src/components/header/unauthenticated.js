import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Unauthenticated = () =>{
  const navigate = useNavigate()
  return(
    <>
     <div className="flex-1 hidden md:flex justify-center gap-3">
          <a className="">
            <button className="bg-[#6A4029] text-white px-8 py-2 rounded-full" onClick={()=>navigate('/login')}>Login</button>
          </a>
          <a className="">
            <button className="bg-amber-400 text-[#6A4029] px-8 py-2 rounded-full" onClick={()=>navigate('/signup')}>SignUp</button>
          </a>
         </div>
         <button className="block md:hidden py-4 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Login</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Sign Up</li>
              </ul>
            </div>
        </button>        
    </>
  )
}

export default Unauthenticated