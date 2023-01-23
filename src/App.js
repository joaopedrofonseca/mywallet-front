import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Input from "./pages/Input"
import Output from "./pages/Output"
import { useEffect, useState } from "react"

export default function App() {
    const [token, setToken] = useState('')
    const [name, setName] = useState("Fulano")
    const [income, setIncome] = useState([])
    useEffect(()=> {
        
    },[])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} setName={setName} />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/home" element={<Home token={token} name={name}/>} />
                <Route path="nova-entrada" element={<Input token={token} setIncome={setIncome} />} />
                <Route path="/nova-saida" element={<Output token={token} setIncome={setIncome} />} />
            </Routes>
        </BrowserRouter>
    )
}