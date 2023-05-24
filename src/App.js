import axios from "axios"
import { useEffect, useState } from "react"
import Home from "./pages/client/home"
import Products from "./pages/client/products"
import ProductDetail from "./pages/client/productDetail"
import Payment from "./pages/client/payment"
import History from "./pages/client/history"
import Profile from "./pages/client/profile"
import Login from "./pages/client/login"
import ProductsAdmin from "./pages/admin/products"
import AddProduct from "./pages/admin/addProduct"
import SignUp from "./pages/client/signUp"
import Forgot from "./pages/client/forgot"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () =>{
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/api/v1/products")
  //   .then((res)=>{
  //     setData(res.data.data)
  //   })
  //   .catch(()=>{
  //   })
  // },[])
  if(localStorage.getItem('@cart')==null){
    localStorage.setItem('@cart',JSON.stringify([]))
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<Products/>} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="payment" element={<Payment />} />
        <Route path="history" element={<History />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="products/admin" element={<ProductsAdmin />} />
        <Route path="products/admin/add" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
 )
}

export default App