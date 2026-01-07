import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Products } from "../Pages/Products"
import { ProductsList } from "../productsdata/ProductsList"
import { ProductData } from "../productsdata/ProductData"
import { SignUp } from "../forms/SignUp"
import Login from "../forms/Login"
import { Cart } from "../cart/Cart"


export const AppRouter = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products/>} />
                <Route path="/productslist" element={<ProductsList/>} />
                <Route path="/product/:id" element={<ProductData/>}/>
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}