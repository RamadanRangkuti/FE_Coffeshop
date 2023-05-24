import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigation,useParams } from "react-router-dom";
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

export default function Payment(){
  // let {id} = useParams()
  const [dataUser, setDataUser]= useState({})
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/user/bc7696e4-a031-457d-a903-12c67743a7ab`)
    .then((res)=>{
      console.log(res.data.data)
      setDataUser(res.data.data)
    })
    .catch(()=>{

    })
  },[])
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('@cart')))
  //ketika setItem = stringify
  //getItem = parse
  // alert(carts.title)
  let temproraryCart  = JSON.parse(localStorage.getItem('@cart'))
  const [paymentMethod, setPaymentMethod]=useState('COD')
  const [totalQty, setTotalQty] = useState(0)
  const[totalPrice, setTotalPrice] = useState(0)
  // const[time,setTime]= useState([])

  useEffect(()=> {
    let tempTotal = 0
    let temp= 0
    temproraryCart.map((item)=> {
      tempTotal+=item.quantity
      temp+=item.sub_total
    })
    setTotalQty(tempTotal)
    setTotalPrice(temp)
  },[])
  const handleOrder = ()=> {
    // console.log(carts)
    // console.log({
    //   "id_user": dataUser.id,
    //   //TODO RAMA
    //   payment_method: paymentMethod,
    //   //payment method dari payment
    //   // account_number: dataUser.account_number,
    //   //TODO RAMA
    //   "time":carts[0].time,
    //   "delivery": dataUser.address,
    //   //TODO RAMA
    //   "total_qty": totalQty,
    //   //TODO RAMA
    //   "total_price": totalPrice,
    //   "products": JSON.parse(localStorage.getItem('@cart'))
    // })
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/v1/order',
      data: {
        "id_user": dataUser.id,
        "payment_method": paymentMethod,
        "delivery": dataUser.address,
        // "time": carts.time,
        //"time":setTime,
        "total_qty": totalQty,
        "total_price": totalPrice,
        "products": JSON.parse(localStorage.getItem('@cart'))
      }
    }).then((res)=> {
      console.log(res.data)
      alert(res.data.message)
    }).catch((err)=> {
      console.log(err.message)
    })
  }
  return(
    <>
    <Header/>

    <section className="flex w-[80%] mx-auto">
      <div className="flex flex-col items-center w-[50%]">
        <p className="text-current text-3xl  pt-[100px]  pb-[60px] font-bold">Checkout your item now!</p>
        <div className="flex flex-col px-8 py-6 mx-auto items-center justify-center bg-[#fff] border shadow rounded-lg">
          <p className="text-[#362115] text-2xl font-bold text-center">Order Summary</p>
          {carts.map((item)=> {
            return(
              <>
              <div className="flex w-full justify-between pt-10">
                <div className="flex w-[60%] gap-x-2">
                  <img className="w-[50px] h-[50px] rounded-full" alt="" src={`http://localhost:5000/uploads/images/${item.img}`}></img>
                  <p>{item.title}</p>
                <p>{item.quantity}x</p>
                </div>
                <div><p>IDR {item.price}</p></div>
              </div>
              <div className="flex justify-between w-full gap-x-3 pt-2">
                <div>
                  <p className="">SUBTOTAL</p>
                </div>
                <div><p>IDR {item.sub_total}</p></div>
              </div>
              </>

            )
          })}

          <div className="flex w-full justify-between text-xl text-[#362115] font-bold py-8">
          <p>Total</p>
          {/* TODO: SUM TOTAL PRICE */}
          <p>IDR {totalPrice}</p>
        </div>
        </div>
      </div>

      <div className="flex flex-col w-[50%]">
        <div className="flex flex-col w-[80%] p-20 mx-auto justify-start gap-y-20">
           <div className="bg-[white] shadow border px-5 py-3 rounded-xl">
            <p><span className="font-bold text-[#000]">Delivery</span> to {dataUser.address} {dataUser.phone}</p>
          </div>

          <form className="flex flex-col bg-[white] shadow border gap-y-3 px-5 py-3 rounded-xl">
            <div className="flex items-center gap-x-3 p-2 border-slate-200 border-b-[1px]" onClick={(()=>{setPaymentMethod(dataUser.card)})}>
                <input type="radio" id="card" value="Card" className="w-5 h-5 checked:bg-[#6A4029] checked"/>
                <div className="bg-[#F47B0A] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src="/icons/card.svg" alt="" />
                </div>
                <h2>Card</h2>
            </div>

            <div className="flex items-center gap-x-3 p-2 border-slate-200 border-b-[1px]">
                <input type="radio" id="card" value="Card" className="w-5 h-5 checked:bg-[#6A4029]" onClick={(()=>{setPaymentMethod(dataUser.bank_account)})}/>
                <div className="bg-[#895537] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src="/icons/bank.svg" alt="" />
                </div>
                <h2>Bank account</h2>
            </div>

            <div className="flex items-center gap-x-3 p-2">
                <input type="radio" id="card" value="Card" className="w-5 h-5 checked:bg-[#6A4029]" onClick={(()=>{setPaymentMethod('COD')})}/>
                <div className="bg-[#FFBA33] w-10 h-10 flex justify-center items-center rounded-md">
                  <img src="/icons/cod.svg" alt="" />
                </div>
                <h2>Cash on delivery</h2>
            </div>
          </form>

          <button className="w-full bg-[#6A4029] text-white font-bold rounded-lg py-6 text-lg" onClick={handleOrder}>
            Confirm and Pay
          </button>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}