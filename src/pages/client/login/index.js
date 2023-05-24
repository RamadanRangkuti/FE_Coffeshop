import axios from "axios"
import { useState,useEffect } from "react"
import { Link, redirect } from "react-router-dom"
import { useNavigate, useNavigation } from "react-router-dom"
import Footer from "../../../components/footer"
import BrandLogo from "../../../components/temp/BrandLogo"
import background from "../../../assets/img/bg-login.png"
import AuthBtn from "../../../components/temp/AuthBtn"
import AuthCard from "../../../components/temp/AuthCard"

export default function Login(){
  // const [userInput, setUserInput]= useState({username:"",password:""})
  // const navigation = useNavigate()
  
  // const handleLogin=(e)=>{
  //   e.preventDefault()
  //   axios.post('http://localhost:5000/api/v1/auth/login',userInput)
  //   .then((res)=>{
  //     localStorage.setItem('@userLogin',JSON.stringify(res.data.data))
  //     navigation("/")
  //   })
  //   .catch((err)=>{
  //     alert('username/password salah')
  //   })
  // }
  const navigate = useNavigate()
  const [loginForm, setLoginForm]= useState({ 
    username:"",
    password:""
  })

  const [validate, setValidate]= useState({error:false, message:''})

  const handleLogin = (event) =>{
    event.preventDefault()
    axios({
      url:'http://localhost:5000/api/v1/auth/login',
      method:"POST",
      data:loginForm
    }).then((res)=>{
      // console.log(res.data.data)
      localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
      navigate('/products')
    }).catch((err)=>{
      // console.log(err.response.data.message)
      setValidate({error:true, message: err.response.data.message})
    })
  }

  useEffect(()=>{
    if (localStorage.getItem('@userLogin')){
      navigate('/products')
    }
  },[])
  return(
    <>
    {/* <form className="" onSubmit={handleLogin}>
      <input type="text" placeholder="username" onChange={(e)=>setUserInput({...userInput,username:e.target.value})}></input>
      <input type="text" placeholder="password" onChange={(e)=>setUserInput({...userInput,password:e.target.value})}></input>
      <button type="submit">login</button>
    </form> */}
    <main className="flex flex-col w-full h-[120vh] lg:h-[150vh]">
        <section className="flex w-full h-full">
          <section
            className="w-1/2 h-full max-sm:hidden flex justify-center items-center"
            style={{ backgroundImage: `url(${background})` }}
          ></section>
          <section className="w-1/2 max-sm:w-full h-full px-20 max-sm:px-10 flex flex-col">
            <div className="flex justify-between items-center w-full h-20 pt-10">
              <BrandLogo/>
              {/* <Link to="/auth/signup">
                <button className="text-[#6A4029] font-bold bg-amber-400 text-lg px-12 p-3 rounded-full">
                  Sign Up
                </button>
              </Link> */}
              <AuthBtn content="Sign Up" linkto="/signup" />
            </div>
            <p className="text-[#6A4029] font-black text-3xl text-center pt-14  mb-8">
              Login
            </p>
            <form
              action=""
              onSubmit={handleLogin}
              className="flex flex-col gap-5 "
            > 
              {validate.error && (
                <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{validate.message}</span>
                </div>
              </div>
              )}

              <label
                // for="email"
                htmlFor="email"
                className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
              >
                Email address:
                <input
                  onChange={(e)=>setLoginForm({
                    ...loginForm,
                    username:e.target.value
                  })}
                  // type="email"
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                />
              </label>
              <label
                htmlFor="password"
                className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
              >
                Password:
                <input
                onChange={(e)=>setLoginForm({
                  ...loginForm,
                  password:e.target.value
                })}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="p-5 rounded-lg border-[1px] border-[#4F5665]"
                />
              </label>
              <Link to="/forgot" className="text-[#6A4029] font-bold underline">
                Forgot password?
              </Link>

              {/* <Link to="/auth/login" className="flex"> */}
              {/* <Link to="/product" className="flex"> */}
              {/* <Link to="" className="flex"> */}
              <button
                type="submit"
                // onClick={() => {
                //   setDataLogin(dataLogin);
                // }}
                className="text-[#6A4029] bg-amber-400 font-bold p-5 rounded-lg w-full hover:bg-amber-500 duration-300"
              >
                Login
              </button>
              {/* </Link> */}
              <button className="text-[#000000] bg-white hover:bg-slate-200 duration-300 font-extrabold p-5 rounded-lg flex items-center justify-center gap-2 shadow-xl">
                <img src={require("../../../assets/img/google.png")} alt="" />
                <p>Login with Google</p>
              </button>
            </form>
          </section>
        </section>

        <section className="flex bg-slate-100 relative justify-center lg:mt-0 py-10 max-sm:py-10 max-sm:h-[50vh] max-sm:mt-10 md:h-[30vh] lg:h-[0vh]">
          {/* <div className="promo-container flex max-sm:flex-col max-sm:p-5 sm:p-5 bg-[#ffffff] shadow-2xl shadow-slate-400 w-2/3 max-sm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-2/3 h-48 max-sm:h-64 rounded-md justify-around items-center">
          <div className="flex flex-col w-2/6 sm:w-3/6 max-sm:w-full gap-y-2">
            <h1 className="text-4xl text-[#0B132A] font-bold">
              Check our promo today!
            </h1>
            <p className="text-base text-[#4F5665]">
              Let's see the deals and pick yours!
            </p>
          </div>
          <div className="flex justify-end">
            <Link to="/product">
              <button className="py-5 px-20 text-lg text-[#6A4029] font-bold cursor-pointer bg-amber-400 rounded-md">
                See promo
              </button>
            </Link>
          </div>
        </div> */}
          <AuthCard
            title="Get your member card now!"
            caption="Let's join with our member and enjoy the deals."
            textBtn="Create Now"
          />
        </section>
      </main>
      <Footer/>
      
    </>
  )
}