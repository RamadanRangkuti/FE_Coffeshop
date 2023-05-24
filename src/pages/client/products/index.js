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

export default function Products(){
  const [dataProduct,setDataProduct]=useState([])
  const [dataPromo, setDataPromo]=useState([])
  // const [refetch,setRefetch]=useState(false)

  useEffect(()=>{
    axios.get("http://localhost:5000/api/v1/promo")
    .then((res)=>{
      console.log(res.data.data)
      setDataPromo(res.data.data)
    },[])
    .catch(()=>{})
  },[])
  //get product 
  useEffect(()=>{
    axios.get("http://localhost:5000/api/v1/products")
    .then((res)=>{
      console.log(res.data.data)
      setDataProduct(res.data.data)
    })
    .catch(()=>{
    })
 },[])//dependen
  return(
    <>
    <Header/>
    {/* <button className="px-8 py-5 bg-[red] text-[white]" onClick={()=>{setRefetch(!refetch)}}>refresh</button> */}
    <section className="lg md:flex md:w-[80%] md:mx-auto">
      <div className="md:flex flex-col md:w-[30%] border shadow items-center pb-[30px]">
        <div className="flex flex-col items-center gap-3 pt-10">
          <p className="text-[#6A4029] font-extrabold text-3xl">Promo today</p>
          <p className="text-[#000000] text-base font-medium text w-[70%] text-center pb-12">Coupons will be updated every weeks. Check them out!</p>
        </div>
        {/* <div className="flex flex-col gap-5 w-full items-center py-14">
          {dataPromo.map((item)=>{ 
            return(
              <>
               <Link to={`/promo/${item.id}`} className="flex items-center bg-[#88B788] rounded-lg w-[80%] px-2 py-2">
                  <img src={`http://localhost:5000/uploads/images/1679638129684-image%2046%20(1).png`} alt=""/>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </div> 
                </Link>
              </>
            )
          })}
        </div> */}
        <div className="flex flex-col justify-center items-center bg-[#FFCB65] rounded-xl w-[75%] gap-y-4 pt-12 pb-8 px-4">
          {dataPromo.map((item)=>{
            return(
              <>
              <div><img className="rounded-full center" src={`http://localhost:5000/uploads/images/1679838387316-image29.png`} alt=""/></div>
              <h1>{item.title}</h1>
              <p className="text-center">{item.description}</p>
              <hr className="bg-[black] h-[5px] w-[100%]" />
              <h4>COUPON CODE</h4>
              <h1>{item.code}</h1>
              <p>Valid untill October 10th 2020</p>
              </>
            )
          })}
          
        </div>

        <div className="flex flex-col w-full items-center pt-12">
          <button className="text-white bg-[#6A4029] p-3 w-[80%] rounded-lg font-bold">Apply Coupon</button>
        </div>

        <div className="flex flex-col items-start justify-start pl-12 pt-10">
          <p className="text-[#4F5665] text-base font-bold">Terms and Condition</p>
          <p className="text-[#4F5665] text-base">1. You can only apply 1 coupon per day</p>
          <p className="text-[#4F5665] text-base">2. It only for dine in</p>
          <p className="text-[#4F5665] text-base">3. Buy 1 get 1 only for new user</p>
          <p className="text-[#4F5665] text-base">4. Should make member card to apply coupon</p>
        </div>
      </div>

      <div className="flex flex-col md:w-[70%] border shadow">
        <div className="hidden md:flex items-center justify-center py-10 w-[85%] md:mx-auto">
          <ul className="md:flex w-full justify-around">
            <li className="text-lg text-[#6A4029] font-bold cursor-pointer">Favorite & Promo</li>
            <li className="text-lg text-[#9F9F9F] cursor-pointer">Coffe</li>
            <li className="text-lg text-[#9F9F9F] cursor-pointer">Non Coffe</li>
            <li className="text-lg text-[#9F9F9F] cursor-pointer">Foods</li>
            <li className="text-lg text-[#9F9F9F] cursor-pointer">Add-on</li>
          </ul>
        </div>

       <div className="flex md:flex flex-wrap gap-5 justify-center items-center p-5 pt-[80px] md:w-[85%] md:mx-auto">
        {dataProduct.map((item)=>{
          return(
            <>
            <div className="w-[40.2%] items-center justify-between md:flex flex-col bg-[white] rounded-xl mb-[50px] w-44 px-3 py-3 shadow-xl md:gap-x-5 md:w-[21.2%] cursor-pointer">
              <Link to={`/product/${item.id}`}>
              <div className="mt-[-50px]"><img src={`http://localhost:5000/uploads/images/${item.images[0].filename}`} alt="" className="rounded-full w-[100px] h-[100px]"></img></div>
              <p className="text-[#000000] text-xl text-center font-extrabold pt-[20px]">{item.title}</p>
              <p className="text-[#6A4029] text-lg text-center font-bold pb-[10px]">{item.price}</p>
              </Link>
          </div>
            </>
          )
        })}
       </div>
         <p className="text-[#6A4029] md:pt-28 pl-20">
              *the price has been cutted by discount appears
            </p>        
      </div>
    </section>

   <Footer/>
    </>
  )
}