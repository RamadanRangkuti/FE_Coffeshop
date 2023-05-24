import axios from "axios"
import { useEffect, useState } from "react"
import { AbortedDeferredError, json, useNavigate, useNavigation, useParams } from "react-router-dom";
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

export default function ProductsDetail(){
  const [dataProductDetail,setDataProductDetail]=useState({
      "id": "",
      "title": "",
      "price": "",
      "img": "",
      "categories": "",
      "description": "",
      "delivery":"",
      "images": [
          {
              "id_product": "",
              "name": "",
              "filename": ""
          }
      ]
  })
  let {id} = useParams()
  const [qty,setQty]=useState(1)
  const [delivery, setDelivery]= useState('')
  const [size,setSize]=useState('Small')
  const [time,setTime]= useState('')
  const [qtyPrice, setQtyPrice] = useState(dataProductDetail.price*qty)
  const [addToCart, setAddToCart] = useState({})

  useEffect(()=> {
    setAddToCart({
      "id_product": id,
      "title": dataProductDetail.title,
      "price": dataProductDetail.price,
      "size": size,
      "quantity": qty,
      "delivery":delivery,
      "time":time,
      "sub_total":  qtyPrice,
      "img":dataProductDetail.images[0].filename
    })
    setQtyPrice(dataProductDetail.price*qty)
  },[id, dataProductDetail, size, qty, qtyPrice,delivery,time])
  console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/products/${id}`)
    .then((res)=>{
      console.log(res.data.data)
      setDataProductDetail(res.data.data)  
    })
    .catch(()=>{
    })
 },[])//dependen

 const handleQty = (type)=> {
  if(type === "plus") {
    setQty(qty+1)
  }else {
    if(qty <= 1) {
      setQty(1)
    }else {
      setQty(qty-1)
    }
  }
 }

 const handleTime=(e)=>{
  let tes = e.target.value
  setTime(tes)
  console.log(tes)
 }

 const navigation = useNavigate()
  return(
    <>
    <Header/>

    <section className="flex w-[80%] flex-wrap mx-auto">
      <div className="flex flex-col w-[30%] items-center pb-[30px]">
        <div className="gap-3 pt-10">
          <p className="text-[#4F5665]">tezs & Promo - <span className="text-[#6A4029] font-bold">{dataProductDetail.title}</span></p>
        </div>

        <div className="pt-10">
          {/* src={`http://localhost:5000/uploads/images/${item.images[0].filename}`} */}
          {dataProductDetail.images.map((item)=>{
            return(
              <>
              <div className=""><img src={`http://localhost:5000/uploads/images/${item.filename}`} alt="" className="rounded-full w-72 h-72"></img></div>
              </>
            )
          })}
        </div>

        <div className="pt-10">
          <div className="bg-[#fff] shadow rounded-lg p-5">
            <p className="text-lg md:max-lg:text-2xl font-bold text-black">Delivery and Time</p>
            <div className="flex gap-x-3 items-center py-5">
              <input type="button" value="Dine in" className="px-3 py-2 rounded-md bg-[#6A4029] font-bold text-white cursor-pointer" onClick={()=>setDelivery('Dine in')}/>
              <input type="button" value="Door delivery" className="px-3 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F] cursor-pointer" onClick={()=>setDelivery('Door delivery')}/>
              <input type="button" value="Pick up" className="px-3 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F] cursor-pointer" onClick={()=>setDelivery('Pick up')}/>
            </div>
            <div className="flex items-center">
                <div className=" w-[20%]">
                  <p className="">Now?</p>
                </div>
                <div className=" w-[70%] flex items-center gap-x-3">
                  <input type="button" value="Yes" className="px-4 py-2 rounded-md bg-[#6A4029] font-bold text-white cursor-pointer"/>
                  <input type="button" value="No" className="px-4 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F] cursor-pointer"/>
                </div>
              </div>
              <div className="flex items-center w-full py-5">
                <div className="w-[25%] ">
                  <p>Set time : </p>
                </div>

              <div className="w-[20%] ">
                <input type="text" placeholder="Enter time for reservation"className="px-4 py-2 rounded-md bg-[#F4F4F8] text-[#9F9F9F]" value={time} onChange={handleTime}/>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[70%]">
        <div className="w-[60%] pt-[100px] pb-[40px]">
          <h2 className="text-5xl font-extrabold text-center pb-12">{dataProductDetail.title}</h2>
          <p className="text-lg text-[#6A4029] pb-8">{dataProductDetail.description}</p>
          <p className="text-lg text-[#6A4029] w-[50%]">Delivery only on <span className="font-bold">Monday to friday</span> at <span className="font-bold">1 - 7 pm</span></p>
        </div>

        <div className="flex items-center justify-arround">
          <div className="pr-[80px]">
            <div className="flex border border-slate-400 shadow rounded-xl">
              <button className="px-8 py-4 font-bold" onClick={()=> handleQty('min')}>-</button>
              <div className="px-8 py-4 font-bold border border-slate-300">{qty}</div>
              <button className="px-8 py-4 font-bold" onClick={()=> handleQty('plus')}>+</button>
            </div>  
          </div>
          <div className="">
            <h3 className="text-2xl font-extrabold text-center">{qtyPrice}</h3>
          </div>
        </div>

        <div className="flex items-center justify-center w-[60%] pt-4">
            <button className="bg-[#6A4029] text-white font-bold py-5 w-full rounded-lg" onClick={()=> {
              // TODO: check if item ada, kalo ada, kita jumlahkan, kalo ga ada kita teruskan, basic logic
              // const fruits = [{id:"201001", qty: 100},{id:"202020"}];
              // const i = fruits.findIndex(e => e.id === '201001');
              // if (i > -1) {
              //   fruits[i] = {...fruits[i], qty: fruits[i].qty+50}
              // }else {
              // fruits.push({id:'5000', qty: 2})
              // }
              // console.log(fruits)
              
           
              localStorage.setItem('@cart', JSON.stringify([...JSON.parse(localStorage.getItem('@cart')), addToCart]))
              alert('berhasil menambahkan produk kekeranjang belanja.')
             
            }}>Add To Cart</button>
        </div>
        <div className="flex items-center justify-center w-[60%] py-4 ">
            <button className="bg-amber-400 text-[#6A4029] font-bold py-5 w-full rounded-lg">Ask a Staff</button>
        </div>
      </div>

      <div className="flex flex-col w-[30%] items-center pb-[30px]">
        <div className="bg-[#fff] border shadow rounded-lg px-20 py-5">
          {/* TODO RAMA choose size */}
        <p className="text-lg md:max-lg:text-2xl font-bold text-black text-center pb-[5px]">Choose a size</p>
        <div className="flex gap-x-3 gap-y-3 justify-center items-center">
          <button className="rounded-full font-bold bg-[#FFBA33] px-[15px] py-[10px] bg-[#FFBA33] cursor-pointer" onClick={()=>setSize('Small')}>S</button>
          <button className="rounded-full font-bold bg-[#FFBA33] px-[15px] py-[10px] bg-[#FFBA33] cursor-pointer" onClick={()=>setSize('Medium')}>M</button>
          <button className="rounded-full font-bold bg-[#FFBA33] px-[15px] py-[10px] bg-[#FFBA33] cursor-pointer"onClick={()=>setSize('Large')}>L</button>
        </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[70%]">
        <div className="flex items-center gap-x-12 bg-[#fff] border shadow rounded-lg px-10 py-5">
          <div>
            <div><img className="w-[50px] h-[50px] rounded-full" alt="" src="/coldbrew.png"/></div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-center">{dataProductDetail.title}</h2>
            <p>xl-Large</p>
            <p>xl-Regular</p>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-center">CheckOut</h3>
          </div>
          <div>
          {/* <button className="bg-amber-400 w-14 h-14 max-sm:h-10 max-sm:w-12 md:max-lg:w-12 md:max-lg:h-10 rounded-full flex items-center justify-center font-bold text-[#6A4029] text-xl">&gt;</button> */}
            <button className="rounded-full font-bold bg-[#FFBA33] px-[20px] py-[10px] bg-[#FFBA33] font-bold text-xl cursor-pointer"  
            onClick={()=>{
              navigation('/payment')
            }}>&gt;</button>
          </div>
          <div>
            <></>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}