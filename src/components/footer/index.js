const Footer = () => {
  return(
    <>
    <footer className="flex justify-center w-[80%] mx-auto">
      <div className="flex flex-col justify-center items-center md:items-baseline gap-y-6 py-[100px] md:w-[60%] md:justify-start md:pl-28 ">
        <a className="normal-case text-xl flex font-bold"><img src="/logo.png" className="mr-2"/>Coffe Shop</a>
        <div className="w-[60%]"><p className="text-[#4F5665] font-medium leading-7">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p></div>
        <div className="flex gap-4">
          <img src="/icons/fb.svg"></img>
          <img src="/icons/twitter.svg"></img>
          <img src="/icons/ig.svg"></img>
        </div>
        <p className="text-[#AFB5C0] line-height-30">@{new Date().getFullYear()}CoffeShop</p>
      </div>
      <div className="hidden md:flex flex-col py-[100px] md:w-[20%] gap-3">
        <h4 className="text-[#0B132A] font-bold text-lg pb-3">Product</h4>
        <p className="text-[#4F5665]">Download</p>
        <p className="text-[#4F5665]">Pricing</p>
        <p className="text-[#4F5665]">Locations</p>
        <p className="text-[#4F5665]">Countries</p>
        <p className="text-[#4F5665]">Blog</p>
      </div>
      <div className="hidden md:flex flex-col py-[100px] md:w-[20%] gap-3">
        <h4 className="text-[#0B132A] font-bold text-lg pb-3">Engage</h4>
        <p className="text-[#4F5665]">Coffe Shop ?</p>
        <p className="text-[#4F5665]">FAQ</p>
        <p className="text-[#4F5665]">About Us</p>
        <p className="text-[#4F5665]">Privacy Policy</p>
        <p className="text-[#4F5665]">Terms of Service</p>
      </div>
    </footer>
    </>
  )
}

export default Footer