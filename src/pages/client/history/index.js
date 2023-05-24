import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Footer from "../../../components/footer";
import Header from "../../../components/header";



export default function History(){
  const [dataHis,setDataHis]=useState([])
  // const [refetch,setRefetch]=useState(false)
  //let {id} = useParams()
  //console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/order`)
    .then((res)=>{
      console.log(res.data.data)
      setDataHis(res.data.data)
    })
    .catch(()=>{
    })
 },[])//dependen
  return(
    <>
    <Header/>
    <main className="flex flex-col pt-20 w-[80%] mx-auto">
      <section className="w-full items-center text-center px-2">
        <h1 className="text-2xl lg:text-4xl font-bold">Let’s see what you have bought!</h1>
        <p className="lg:text-xl">Select item to delete</p>
      </section>

      <section className="flex flex-col h-[100vh] w-full px-5 mt-16">
        <button onClick={() => {console.log("tes");}} className="text-end text-lg font-bold mb-3 lg:pr-12">Select all</button>
          <div className="row w-full flex flex-wrap gap-3 justify-center">
            {dataHis.map((item) => {
              return (
                <div className="flex w-[30%] h-[15vh] bg-white items-center gap-x-3 rounded-xl px-3">
                  <div className="w-[20%]">
                    <img src={`http://localhost:5000/uploads/images/${item.images[0].filename}`} alt="" className="w-full rounded-full"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-extrabold text-xl">{item.title}</p>
                    <p className="text-[#895537]">IDR {item.price}</p>
                    <p className="text-[#6A4029]">Delivered to {item.delivery}</p>
                  </div>
                  <input type="checkbox" name="" id=""className="w-5 h-5"/>
                </div>
              );
            })}
          </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}