import axios from "axios"
import { useEffect, useState } from "react"

const dataProduct = [
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe-late",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
  {
    title:"coffe",
    img:"https://picsum.photos/id/250/200/300",
    price:"IDR 20.000"
  },
] 
const promoList = [
  {
    avatar: "avaprod1.png",
    title: "HAPPY MOTHER'S DAY!",
    description: "Get one of our favorite menu for free!",
    background:"#88B788"
  },
  {
    avatar: "avaprod2.png",
    title: "Get a cup of coffee for free on sunday morning",
    description: "Only at 7 to 9 AM!",
  },
  {
    avatar: "avaprod1.png",
    title: "HAPPY MOTHER'S DAY!",
    description: "Get one of our favorite menu for free!",
  },
  {
    avatar: "avaprod3.png",
    title: "HAPPY HALLOWEEN!",
    description:
      "Do you like chicken wings? Get 1 free only if you buy pinky promise",
  },
];

export default function App(){
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/api/v1/products")
  //   .then((res)=>{
  //     setData(res.data.data)
  //   })
  //   .catch(()=>{
  //   })
  // },[])
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<Products/>} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
    {/* --------- NAVBAR START------------ */}
    {/* <navbar>
    <div className="flex px-3 py-6 items-center shadow">
        <div className="flex flex-1 justify-center">
          <a className="normal-case text-xl flex font-bold items-center">
            <img src="/logo.png" className="mr-2"/>
            Coffe Shop
          </a>
        </div>
        <div className="flex-1"> */}
          {/* awal2 nya ngga ada: hidden
            breakpoint: sm, md, lg, xl, 2xl
          */}
          {/* {`secara default di hidden, tapi kalo udah sampai lg keatas kita tampilin`} */}
          {/* display block = block -> kalo element banyak pasti kebawah
          display inline = block -> kalo element banyak pasti samping */}

          {/* <ul className="justify-around hidden cursor-pointer md:flex">
            <li className="hover:bg-gray-200"><a>Home</a></li>
            <li className="hover:bg-gray-200 font-bold"><a>Product</a></li>
            <li className="hover:bg-gray-200"><a>Your Card</a></li>
            <li className="hover:bg-gray-200"><a>History</a></li>
          </ul>
         </div> */}
         {/* {`secara default di tampilin, lg keatas kita hidden`} */}
        {/* <div className="flex-1 justify-center cursor-pointer hidden md:flex">
          <ul className="flex">
            <li className="flex-1 px-4"><img className="w-[25px]" src="/icons/search.svg"/></li>
            <li className="flex-1 px-4"><img className="w-[25px]" src="/icons/chat.svg"/></li>
            <li className="flex-1 px-4"><img className="w-[25px] h-[25px] rounded-full" src="https://picsum.photos/id/230/200/300"/></li>
          </ul> */}
          {/* <a className="normal-case text-xl flex"><img src="/logo.png" className="mr-2"/>coffeShop</a> */}
        {/* </div>
        <button className="block md:hidden py-4 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Profile</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Message</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Your Cart</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">History</li>
              </ul>
            </div>
        </button>
      </div>
    </navbar> */}
      
    {/* --------- NAVBAR END------------ */}

    {/* --------- CONTENT START PRODUCT------------ */}
    {/* <section className="lg md:flex md:w-[80%] md:mx-auto">
      <div className="md:flex flex-col md:w-[30%] border shadow items-center pb-[30px]">
        <div className="flex flex-col items-center gap-3 pt-10">
          <p className="text-[#6A4029] font-extrabold text-3xl">Promo today</p>
          <p className="text-[#000000] text-base font-medium text w-[70%] text-center">Coupons will be updated every weeks. Check them out!</p>
        </div>
        <div className="flex flex-col gap-5 w-full items-center py-14">
          {promoList.map((item)=>{
            return(
              <>
               <div className="flex items-center bg-[#88B788] rounded-lg w-[80%] px-3 py-3">
                  <img src={item.avatar}></img>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </div>  
                </div>
              </>
            )
          })}
        </div>

        <div className="flex flex-col w-full items-center">
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
            <li className="text-lg text-[#6A4029] font-bold">Favorite & Promo</li>
            <li className="text-lg text-[#9F9F9F]">Coffe</li>
            <li className="text-lg text-[#9F9F9F]">Non Coffe</li>
            <li className="text-lg text-[#9F9F9F]">Foods</li>
            <li className="text-lg text-[#9F9F9F]">Add-on</li>
          </ul>
        </div>

       <div className="flex md:flex flex-wrap gap-5 justify-center p-5 pt-[80px] md:w-[85%] md:mx-auto">
        {dataProduct.map((item)=>{
          return(
            <>
            <div className="w-[40.2%] items-center justify-between md:flex flex-col bg-[white] rounded-xl mb-[50px] w-44 px-3 py-3 shadow-xl md:gap-x-5 md:w-[21.2%]">
              <div className="mt-[-50px]"><img src="https://picsum.photos/id/250/200/300" className="rounded-full w-[100px] h-[100px]"></img></div>
              <p className="text-[#000000] text-xl text-center font-extrabold w-[80%] pt-[20px]">Caffucino</p>
              <p className="text-[#6A4029] text-lg font-bold pb-[10px]">RP.30000</p>
          </div>
            </>
          )
        })}
       </div>
         <p className="text-[#6A4029] md:pt-28 pl-20">
              *the price has been cutted by discount appears
            </p>        
      </div>
    </section> */}
    {/* --------- CONTENT END PRODUCT------------ */}

    {/* --------- CONTENT START DETAIL PRODUCT------------ */}
    {/* <section className="flex w-[80%] flex-wrap mx-auto">
      <div className="flex flex-col w-[30%] items-center pb-[30px]">
        <div className="gap-3 pt-10">
          <p className="text-[#4F5665]">Favorite & Promo - <span className="text-[#6A4029] font-bold">Cold Brew</span></p>
        </div>

        <div className="pt-10">
          <div className=""><img src="/coldbrew.png" className="rounded-full w-72 h-72"></img></div>
        </div>

        <div className="pt-10">
          <div className="bg-[#fff] shadow rounded-lg p-5">
            <p className="text-lg md:max-lg:text-2xl font-bold text-black">Delivery and Time</p>
            <div className="flex gap-x-3 items-center py-5">
              <input type="button" value="Dine in" className="px-3 py-2 rounded-md bg-[#6A4029] font-bold text-white"/>
              <input type="button" value="Door delivery" className="px-3 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"/>
              <input type="button" value="Pick up" className="px-3 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"/>
            </div>
            <div className="flex items-center">
                <div className=" w-[20%]">
                  <p className="">Now?</p>
                </div>
                <div className=" w-[70%] flex items-center gap-x-3">
                  <input type="button" value="Yes" className="px-4 py-2 rounded-md bg-[#6A4029] font-bold text-white"/>
                  <input type="button" value="No" className="px-4 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"/>
                </div>
              </div>
              <div className="flex items-center w-full py-5">
                <div className="w-[25%] ">
                  <p>Set time : </p>
                </div>

              <div className="w-[70%] ">
                <input type="text" placeholder="Enter time for reservation"className="px-4 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[70%]">
        <div className="w-[60%] pt-[100px] pb-[40px]">
          <h2 className="text-5xl font-extrabold text-center pb-12">COLD BREW</h2>
          <p className="text-lg text-[#6A4029] pb-8">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
          <p className="text-lg text-[#6A4029] w-[50%]">Delivery only on <span className="font-bold">Monday to friday</span> at <span className="font-bold">1 - 7 pm</span></p>
        </div>

        <div className="flex items-center justify-arround">
          <div className="pr-[80px]">
            <div className="flex border border-slate-400 shadow rounded-xl">
              <div className="px-8 py-4 font-bold">-</div>
              <div className="px-8 py-4 font-bold border border-slate-300">2</div>
              <div className="px-8 py-4 font-bold">+</div>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl font-extrabold text-center">IDR 30.000</h3>
          </div>
        </div>

        <div className="flex items-center justify-center w-[60%] pt-4">
            <button className="bg-[#6A4029] text-white font-bold py-5 w-full rounded-lg">Add To Cart</button>
        </div>
        <div className="flex items-center justify-center w-[60%] py-4">
            <button className="bg-amber-400 text-[#6A4029] font-bold py-5 w-full rounded-lg">Ask a Staff</button>
        </div>
      </div>

      <div className="flex flex-col w-[30%] items-center pb-[30px]">
        <div className="bg-[#fff] border shadow rounded-lg px-20 py-5">
        <p className="text-lg md:max-lg:text-2xl font-bold text-black text-center pb-[5px]">Choose a size</p>
        <div className="flex gap-x-3 gap-y-3 justify-center items-center">
          <div className="rounded-full font-bold bg-[#FFBA33] px-[15px] py-[10px] bg-[#FFBA33] cursor-pointer">R</div>
          <div className="rounded-full font-bold bg-[#FFBA33] px-[15px] py-[10px] bg-[#FFBA33] cursor-pointer">L</div>
          <div className="rounded-full font-bold bg-[#FFBA33] px-[10px] py-[10px] bg-[#FFBA33] cursor-pointer">XL</div>
        </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[70%]">
        <div className="flex items-center gap-x-12 bg-[#fff] border shadow rounded-lg px-10 py-5">
          <div>
            <div><img className="w-[50px] h-[50px] rounded-full" src="coldbrew.png"/></div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-center">COLD BREW</h2>
            <p>xl-Large</p>
            <p>xl-Regular</p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-center" >CheckOut</h3>
          </div>
          <div>
            <div className="rounded-full font-bold bg-[#FFBA33] px-[15px] py-[10px] bg-[#FFBA33] cursor-pointer">ok</div>
          </div>
          <div>
            <></>
          </div>
        </div>
      </div>
    </section> */}
    {/* --------- CONTENT END DETAIL PRODUCT------------ */}

    {/* --------- CONTENT START PAYMENT------------ */}
    {/* <section className="flex w-[80%] mx-auto">
      <div className="flex flex-col items-center w-[50%]">
        <p className="text-current text-3xl  pt-[100px]  pb-[60px] font-bold">Checkout your item now!</p>
        <div className="flex flex-col px-8 py-6 mx-auto items-center justify-center bg-[#fff] border shadow rounded-lg">
          <p className="text-[#362115] text-2xl font-bold text-center">Order Summary</p>
          <div className="flex w-full justify-between pt-10">
            <div className="flex w-[60%] gap-x-2">
              <img className="w-[50px] h-[50px] rounded-full" src="coldbrew.png"></img>
              <p>Hazelnut Latte x 1 Regular</p>
            </div>
            <div><p>IDR15.000</p></div>
          </div>
          <div className="flex w-full justify-between pt-10">
            <div className="flex w-[60%] gap-x-2">
              <img className="w-[50px] h-[50px] rounded-full" src="coldbrew.png"></img>
              <p>Chicken Fire Wings x 2</p>
            </div>
            <div><p>IDR15.000</p></div>
          </div>

          <div className="flex justify-between w-full gap-x-3 pt-4">
            <div>
              <p className="">SUBTOTAL</p>
            </div>
            <div><p>IDR15.000</p></div>
          </div>
          <div className="flex justify-between w-full gap-x-3 pt-2">
            <div>
              <p className="">SUBTOTAL</p>
            </div>
            <div><p>IDR15.000</p></div>
          </div>
          <div className="flex justify-between w-full gap-x-3 pt-2">
            <div>
              <p className="">SUBTOTAL</p>
            </div>
            <div><p>IDR15.000</p></div>
          </div>

          <div className="flex w-full justify-between text-xl text-[#362115] font-bold py-8">
          <p>Total</p>
          <p>IDR 150.0000</p>
        </div>
        </div>
      </div>

      <div className="flex flex-col w-[50%]">
        <div className="flex flex-col w-[80%] p-20 mx-auto justify-start gap-y-20">
           <div className="bg-[white] shadow border px-5 py-3 rounded-xl">
            <p><span className="font-bold text-[#000]">Delivery</span> to Iskandar Street Km 5 refinery road oppsite re public road, effurun, Jakarta +6281348287878</p>
          </div>

          <form className="flex flex-col bg-[white] shadow border gap-y-3 px-5 py-3 rounded-xl">
            <div className="flex items-center gap-x-3 p-2 border-slate-200 border-b-[1px]">
                <input type="radio" id="card" value="Card" className="w-5 h-5 checked:bg-[#6A4029] checked"/>
                <div className="bg-[#F47B0A] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src="/icons/card.svg" alt="" />
                </div>
                <h2>Card</h2>
            </div>

            <div className="flex items-center gap-x-3 p-2 border-slate-200 border-b-[1px]">
                <input type="radio" id="card" value="Card" className="w-5 h-5 checked:bg-[#6A4029]"/>
                <div className="bg-[#895537] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src="/icons/bank.svg" alt="" />
                </div>
                <h2>Bank account</h2>
            </div>

            <div className="flex items-center gap-x-3 p-2">
                <input type="radio" id="card" value="Card" className="w-5 h-5 checked:bg-[#6A4029]"/>
                <div className="bg-[#FFBA33] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src="/icons/cod.svg" alt="" />
                </div>
                <h2>Cash on delivery</h2>
            </div>
          </form>

          <button className="w-full bg-[#6A4029] text-white font-bold rounded-lg py-6 text-lg">
            Confirm and Pay
          </button>
        </div>
      </div>
    </section> */}
    {/* --------- CONTENT START END PAYMENT------------ */}

    {/* --------- CONTENT START HISTORY------------ */}
    {/* <main className="flex flex-col pt-20 w-[80%] mx-auto">
      <section className="w-full items-center text-center px-2">
        <h1 className="text-2xl lg:text-4xl font-bold">Let’s see what you have bought!</h1>
        <p className="lg:text-xl">Select item to delete</p>
      </section>

      <section className="flex flex-col h-[100vh] w-full px-5 mt-16">
        <button onClick={() => {console.log("tes");}} className="text-end text-lg font-bold mb-3 lg:pr-12">Select all</button>
          <div className="row w-full flex flex-wrap gap-3 justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
              return (
                <div className="flex w-[30%] h-[15vh] bg-white items-center gap-x-3 rounded-xl px-3">
                  <div className="w-[20%]">
                    <img src="/food.png" alt="" className="w-full rounded-full"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-extrabold text-xl">Veggie tomato mix</p>
                    <p className="text-[#895537]">IDR 34.000</p>
                    <p className="text-[#6A4029]">Delivered</p>
                  </div>
                  <input type="checkbox" name="" id=""className="w-5 h-5"/>
                </div>
              );
            })}
          </div>
      </section>
    </main> */}
    {/* --------- CONTENT END HISTORY------------ */}
    
    {/* --------- FOOTER START------------ */}
    {/* <footer className="flex justify-center w-[80%] mx-auto">
      <div className="flex flex-col justify-center items-center md:items-baseline gap-y-6 py-[100px] md:w-[60%] md:justify-start md:pl-28 ">
        <a className="normal-case text-xl flex font-bold"><img src="/logo.png" className="mr-2"/>Coffe Shop</a>
        <div className="w-[60%]"><p className="text-[#4F5665] font-medium leading-7">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p></div>
        <div className="flex gap-4">
          <img src="/icons/fb.svg"></img>
          <img src="/icons/twitter.svg"></img>
          <img src="/icons/ig.svg"></img>
        </div>
        <p className="text-[#AFB5C0] line-height-30">
            @2023CoffeShop
          </p>
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
    </footer> */}
    {/* --------- FOOTER END------------ */}

    
 )
}