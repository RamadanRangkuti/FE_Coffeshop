import { useState } from "react"
import { Link } from "react-router-dom"
const Authenticated = ({setIsLogin}) =>{
  return(
    <>
      {/* {`secara default di tampilin, lg keatas kita hidden`} */}
        <div className="flex-1 justify-center cursor-pointer hidden md:flex">
          <ul className="flex">
            <li className="flex-1 px-4"><img className="w-[25px]" src="/icons/search.svg" alt=""/></li>
            <li onClick={()=> {
              localStorage.removeItem('@userLogin')
              setIsLogin(false)
              }} className="flex-1 px-4"><img className="w-[25px]" src="/icons/chat.svg" alt=""/></li>
            <li className="flex-1 px-4"><img className="w-[25px] h-[25px] rounded-full" src="https://picsum.photos/id/230/200/300" alt=""/>
            </li>
          </ul> 
          {/* <a className="normal-case text-xl flex"><img src="/logo.png" className="mr-2"/>coffeShop</a> */}
        </div>
        <button className="block md:hidden py-4 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Profile</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Product</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Your Cart</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Logout</li>
              </ul>
            </div>
        </button>
  </>
  )
}

export default Authenticated