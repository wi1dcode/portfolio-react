import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
// import Admin from "./pages/Admin"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App