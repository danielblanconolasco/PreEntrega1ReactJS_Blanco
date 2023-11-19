import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { NavBarComponent } from "../components"
import React from 'react'
import { ItemDetailContainer, Category } from "../pages"

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:productId" element={<ItemDetailContainer />}/>
            <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
    </BrowserRouter>
  )
}