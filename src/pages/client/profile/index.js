import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function Profile(){
  return(
    <>
    <Header/>
    <main className="h-[220vh] lg:h-[160vh] bg-center bg-cover bg-no-repeat px-5 bg-slate-100">
        <div className="container text-white w-[80%] h-full flex flex-col pt-16 gap-5 pb-10 lg:px-28 bg-slate-200 mx-auto">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <div className="lg:flex lg:flex-col lg:gap-y-28">
            <div className="lg:flex lg:gap-x-5">
              {/* image card */}
              <div className="image-card bg-white w-full lg:w-[40%] h-[22rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-4 items-center justify-center py-4">
                <figure className="w-24 h-24 rounded-full"><img src="/userprofile.png " alt=""className="rounded-full"/></figure>
                <div>
                  <p className="text-xl font-bold text-center text-black">Zulaikha</p>
                  <p className="text-center text-sm text-[#4F5665]">zulaikha17@gmail.com</p>
                </div>
                <p className="text-[#4F5665]">Has been ordered 15 products</p>
              </div>

              {/* contact card */}
              <form className="contact-card bg-white w-full lg:w-[60%] h-[22rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-5 px-8 py-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-bold text-[#4F5665]">Contacts</h3>
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <label className="text-[#9F9F9F]" >Email address :</label>
                  <input
                    type="email"
                    name="email"
                    className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                    placeholder="zulaikha17@gmail.com"
                  />
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <label className="text-[#9F9F9F]">Mobile number :</label>
                  <input
                    type="tel"
                    name="phone"
                    className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                    placeholder="(+62)813456782"
                  />
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <label className="text-[#9F9F9F]">Delivery address :</label>
                  <input
                    type="text"
                    name="deliveryaddress"
                    className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                    placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
                  />
                </div>
              </form>
            </div>
            <div className="lg:flex lg:gap-x-5">
              {/* Detail */}
              <form action="" className="details-card bg-white w-full lg:w-[60%] h-[30rem] rounded-lg border-b-[10px] border-[#6A4029] flex flex-col gap-5 px-8 py-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-bold text-[#4F5665]">Details</h3>
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <label className="text-[#9F9F9F]" htmlFor="displayname">Display name :</label>
                  <input
                    type="text"
                    name="displayname"
                    className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                    placeholder="Zulaikha"
                  />
                </div>
                <div className="flex flex-col gap-2 text-lg">
                  <label className="text-[#9F9F9F]" htmlFor="firstname">First name :</label>
                  <input
                    type="text"
                    name="firstname"
                    className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                    placeholder="Zulaikha"
                  />
                </div>
                <div className="flex flex-col gap-2 text-lg">
                <label className="text-[#9F9F9F]" htmlFor="lastname">Last name :</label>
                <input
                  type="text"
                  name="lastname"
                  className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                  placeholder="Zulaikha"
                />
                </div>
                <div className="flex flex-col gap-2 text-lg">
                <label className="text-[#9F9F9F]" htmlFor="birthdate">Birthdate :</label>
                <input
                  type="text"
                  name="birthdate"
                  className="bg-transparent border-b-[1px] border-black focus:outline-none text-black"
                  placeholder="03/04/90"
                />
                </div>
                <div className="gender flex text-[#9F9F9F] text-lg gap-3">
                <input
                  type="radio"
                  name="male"
                  id=""
                  value=""
                  // className="text-[#9F9F9F]"
                />
                <p className="text-lg">Male</p>
                <input
                  type="radio"
                  name="female"
                  id=""
                  value=""
                  // className="text-[#9F9F9F]"
                />
                <p className="text-lg">Female</p>
              </div>
              </form>
              <div className="action-button w-full lg:w-[40%] h-[28rem] px-8 py-4 flex flex-col gap-5">
                <p className="text-xl font-bold text-center">Do you want to save the change?</p>
                <button className="bg-[#6A4029] text-white font-bold flex items-center justify-center w-full py-4 rounded-lg">Save Changes</button>
                <button className="bg-amber-400 text-[#6A4029] font-bold py-4 flex justify-center items-center w-full rounded-lg">Cancel</button>
                <button className="bg-white text-[#6A4029] font-bold flex w-full items-center py-4 rounded-lg px-4 justify-between">
                  <span>Edit Password</span>
                  <span className="text-xl"> &gt; </span>
                </button>
                <button className="bg-white text-[#6A4029] font-bold flex w-full items-center py-4 rounded-lg px-4 justify-between">
                  <span>Logout</span>
                  {/* <span className="text-xl"> &gt; </span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </>
  )
}