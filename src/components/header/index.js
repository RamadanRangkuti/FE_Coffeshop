import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";

const Header = ({headerShown, title}) =>{
  // const [userLogin, setUserLogin] = useState(localStorage.getItem('@userLogin'))
  // console.log(userLogin)
  // console.log(userLogin.token)

  const [isLogin, setIsLogin] = useState(false)
  
  // const RenderMenu = () =>{
  //   if(localStorage.getItem('@userLogin')){
  //     setIsLogin(true)
  //     return (<Authenticated setIsLogin={setIsLogin}/>)
  //   }
  //   return <Unauthenticated/>
  // }

  //simmiliar with componentDidMounth() but use hooks
  useEffect(()=>{
    //akan berjalan ketika pertama kali user load page dan itu hanya 1x dan belum kerender
    if(localStorage.getItem('@userLogin')){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])


  return (
    <>
    <navbar >
    <div className="flex justify-end px-3 py-6 items-center shadow w-[80%] mx-auto">
        <div className="flex-1">
          <a href="/product" className="normal-case text-xl flex font-bold items-center px-10">
            <img src="/logo.png" alt="" className="mr-2"/>
            CoffeShop  
          </a>
        </div>
        
        <div className="flex-auto">
          {/* awal2 nya ngga ada: hidden
            breakpoint: sm, md, lg, xl, 2xl
          */}
          {/* {`secara default di hidden, tapi kalo udah sampai lg keatas kita tampilin`} */}
          {/* display block = block -> kalo element banyak pasti kebawah
          display inline = block -> kalo element banyak pasti samping */}

          <ul className="justify-around hidden cursor-pointer md:flex">
            <Link to={`/`}><li className="hover:bg-gray-200"><a>Home</a></li></Link>
            <Link to={`/products`}><li className="hover:bg-gray-200"><a>Product</a></li></Link>
            <Link to={`/payment`}><li className="hover:bg-gray-200"><a>Your Cart</a></li></Link>
            <Link to={`/history`}><li className="hover:bg-gray-200"><a>History</a></li></Link>
          </ul>
         </div>

         {/* <RenderMenu/> */}

         {isLogin? (<Authenticated setIsLogin={setIsLogin}/>):<Unauthenticated/>}
      
         {/* <div className="flex-1 hidden md:flex justify-center gap-3">
          <a href="/login" className="">
            <button className="bg-[#6A4029] text-white px-8 py-2 rounded-full">Login</button>
          </a>
          <a href="/signup" className="">
            <button className="bg-amber-400 text-[#6A4029] px-8 py-2 rounded-full">SignUp</button>
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
        </button>         */}

         {/* {`secara default di tampilin, lg keatas kita hidden`} */}
        {/* <div className="flex-1 justify-center cursor-pointer hidden md:flex">
          <ul className="flex">
            <li className="flex-1 px-4"><img className="w-[25px]" src="/icons/search.svg" alt=""/></li>
            <li className="flex-1 px-4"><img className="w-[25px]" src="/icons/chat.svg" alt=""/></li>
            <Link to={`/profile`}><li className="flex-1 px-4"><img className="w-[25px] h-[25px] rounded-full" src="https://picsum.photos/id/230/200/300" alt=""/></li></Link>
          </ul> */}
          {/* <a className="normal-case text-xl flex"><img src="/logo.png" className="mr-2"/>coffeShop</a> */}
        {/* </div> */}
        {/* <button className="block md:hidden py-4 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Profile</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Product</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Your Cart</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">History</li>
              </ul>
            </div>
        </button> */}
      </div>
    </navbar>
    </>
  )
}

export default Header