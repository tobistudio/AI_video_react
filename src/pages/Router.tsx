import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home'

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                {/* <Route element={<Product />} path='/product'></Route>
                <Route element={<Blog />} path='/blog'></Route>
                <Route element={<Public />} path='/public'></Route>
                <Route element={<Contact />} path='/contact'></Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter