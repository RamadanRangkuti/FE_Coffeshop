import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

// const dataProduct = [
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe-late",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
//   {
//     title:"coffe",
//     img:"https://picsum.photos/id/250/200/300",
//     price:"IDR 20.000"
//   },
// ]

// const promoList = [
//   {
//     avatar: "avaprod1.png",
//     title: "HAPPY MOTHER'S DAY!",
//     description: "Get one of our favorite menu for free!",
//     background:"#88B788"
//   },
//   {
//     avatar: "avaprod2.png",
//     title: "Get a cup of coffee for free on sunday morning",
//     description: "Only at 7 to 9 AM!",
//   },
//   {
//     avatar: "avaprod1.png",
//     title: "HAPPY MOTHER'S DAY!",
//     description: "Get one of our favorite menu for free!",
//   },
//   {
//     avatar: "avaprod3.png",
//     title: "HAPPY HALLOWEEN!",
//     description:
//       "Do you like chicken wings? Get 1 free only if you buy pinky promise",
//   },
// ];

export default function AddProduct(){
//   const [dataProduct,setDataProduct]=useState([])
//   const [dataPromo, setDataPromo]=useState([])
//   const [refetch,setRefetch]=useState(false)

//   useEffect(()=>{
//     axios.get("http://localhost:5000/api/v1/promo")
//     .then((res)=>{
//       console.log(res.data.data)
//       setDataPromo(res.data.data)
//     },[refetch])
//     .catch(()=>{})
//   },[refetch])
//   //get product 
//   useEffect(()=>{
//     axios.get("http://localhost:5000/api/v1/products")
//     .then((res)=>{
//       console.log(res.data.data)
//       setDataProduct(res.data.data)
//     })
//     .catch(()=>{
//     })
//  },[refetch])//dependen
  return(
    <>
    <Header/>
    {/* <button className="px-8 py-5 bg-[red] text-[white]" onClick={()=>{setRefetch(!refetch)}}>refresh</button> */}
    <main className=" w-[80%] pt-8 flex flex-col justify-center mx-auto">
        <form
          className="w-full flex"
        >
          <section className="w-2/5 h-full px-20 pt-6 flex flex-col gap-y-16">
            <div className="flex flex-col justify-center items-center gap-y-8">
              <div className="bg-gray-300 w-64 h-64 flex justify-center items-center rounded-full">
                <img
                  src=""
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col gap-y-4">
                <label  className="cursor-pointer  bg-[#0B132A] text-[#FFFFFF] flex justify-center items-center font-bold py-6 btn-rounded text-lg">Take a picture</label>
              </div>
              <div className="w-full flex flex-col gap-y-4">
                <label  className="cursor-pointer  bg-amber-400 text-[#6A4029] flex justify-center items-center font-bold py-6 btn-rounded text-lg">Upload Image</label>
              </div>
            </div>
            
            <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
              <p className="text-coffee font-bold text-lg lg:pb-4">
                Delivery Hour :
              </p>
              <select
                className="lg:py-6 rounded-xl lg:px-6 border-[1px] border-gray-300 focus:outline-none"
                name="start"
                id="start"
              >
                <option value="">Select start hour</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select
                className="lg:py-6 rounded-xl lg:px-6 border-[1px] border-gray-300 focus:outline-none"
                name="end"
                id="end"
              >
                <option value="">Select end hour</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="lg:w-full lg:flex lg:flex-col lg:gap-y-4">
              <p className="text-coffee font-bold text-lg lg:pb-4">
                Input Stock :
              </p>
              <select
                className="lg:py-6 rounded-xl lg:px-6 border-[1px] border-gray-300 focus:outline-none"
                name="stock"
                id="stock"
              >
                <option value="">Input stock</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
            </div>
          </section>
          <section className="w-3/5 h-full px-20 flex flex-col gap-y-16 pt-6">
            <div className="flex flex-col gap-y-10">
              <label className="">
                <p className="text-lg text-coffee font-bold">Name :</p>
                <input
                  type="text"
                  placeholder="Type product name"
                  className="py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <label className="">
                <p className="text-lg text-coffee font-bold">Price:</p>
                <input
                  type="text"
                  placeholder="Type product price"
                  className="py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <label className="">
                <p className="text-lg text-coffee font-bold">Category :</p>
                <input
                  type="text"
                  placeholder="Type product category"
                  className="py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <label className="">
                <p className="text-lg text-coffee font-bold">Description :</p>
                <input
                  type="text"
                  placeholder="Type product description"
                  className="py-3 w-full border-gray-300 border-b-[2px] focus:outline-none bg-transparent placeholder:text-gray-300"
                />
              </label>
              <div className="flex flex-col w-full gap-y-4">
                <label>
                  <p className="text-lg text-coffee font-bold">
                    Input product size :
                  </p>
                </label>
                <p className="text-gray-300">
                  Click size you want to use for this product
                </p>
                <div className="w-full flex justify-start items-center">
                  <input
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                  />
                  <label
                    className=" w-16 h-16 flex justify-center items-center font-bold rounded-full text-lg"
                  >
                    <p>S</p>
                  </label>
                  <input
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                  />
                  <label
                    className="w-16 h-16 flex justify-center items-center font-bold rounded-full text-lg"
                  >
                    <p>M</p>
                  </label>
                  <input
                    className=""
                    type="radio"
                    name="tools"
                    id="tool-1"
                  />
                  <label
                    className="w-16 h-16 flex justify-center items-center font-bold rounded-full text-lg"
                  >
                    <p>L</p>
                  </label>
                </div>
              </div>

              <div className="lg:flex lg:flex-col w-full lg:gap-y-4">
                <label>
                  <p className="text-lg text-coffee font-bold">
                    Input delivery methods :
                  </p>
                </label>
                <p className="text-gray-300">
                  Click methods you want to use for this product
                </p>
                <div className="w-full lg:flex lg:justify-center lg:gap-x-5">
                  <button className="rounded-xl bg-[#FFBA33] font-bold text-coffee lg:py-6 lg:w-1/3">
                    Home Delivery
                  </button>
                  <button className="rounded-xl bg-[#FFBA33] font-bold text-coffee lg:py-6 lg:w-1/3">
                    Dine In
                  </button>
                  <button className="rounded-xl bg-[#fff] font-bold text-coffee lg:py-6 lg:w-1/3">
                    Take Away
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <button
                type="submit"
                className="w-full py-6 btn-rounded font-bold text-lg flex justify-center items-center bg-amber-400 text-[#6A4029]"
              >
                Save Product
              </button>
              <button className="w-full py-6 btn-rounded font-bold text-lg flex justify-center items-center bg-gray-300 text-gray-800">
                Cancel
              </button>
            </div>
          </section>
        </form>
        
      </main>

   <Footer/>
    </>
  )
} 