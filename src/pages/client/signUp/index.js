import BrandLogo from "../../../components/temp/BrandLogo";
import AuthBtn from "../../../components/temp/AuthBtn";
import background from "../../../assets/img/bg-login.png"
import Footer from "../../../components/footer";
import axios from "axios";

export default function SignUp(){
  return(
    <>
    <section className="flex w-full h-[130vh] md:max-lg:h-[150vh] ">
        <section
          className="w-1/2 h-full max-sm:hidden md:max-lg:hidden flex justify-center items-center"
          style={{ backgroundImage: `url(${background})` }}
        ></section>
        <section className="w-1/2 max-sm:w-full md:max-lg:w-full h-full px-20 max-sm:px-10 flex flex-col">
          <div className="flex justify-between items-center w-full h-20 pt-10">
            <BrandLogo />
            <AuthBtn content="Login" linkto="/login" />
          </div>
          <p className="text-[#6A4029] font-black text-3xl text-center pt-14  mb-8">
            Sign Up
          </p>
          <form
            action=""
            className="flex flex-col gap-5 "
          >
            <label
              // for="email"
              htmlFor="email"
              className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
            >
              Email address:
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
              />
            </label>
            <label
              // for="password"
              htmlFor="password"
              className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
            >
              Password:
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
              />
            </label>
            <label
              // for="phone"
              htmlFor="phone"
              className="flex flex-col gap-y-2 text-[#4f5665] font-bold"
            >
              Phone number:
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="p-5 rounded-lg border-[1px] border-[#4F5665]"
              />
            </label>
            {/* <Link to="/auth/login" className="flex"> */}
            <button
              type="submit"
              // onClick={() => navigate("/auth/login")}
              className="text-[#6A4029] bg-amber-400 font-bold p-5 rounded-lg w-full"
            >
              Sign Up
            </button>
            {/* </Link> */}
            <button className="text-[#000000] bg-white font-extrabold p-5 rounded-lg flex items-center justify-center gap-2 shadow-xl">
              <img src={require("../../../assets/img/google.png")} alt="" />
              <p>Sign up with Google</p>
            </button>
          </form>
        </section>
      </section>
      <Footer />
    </>
  )
}