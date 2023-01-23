import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Screen1 from "../components/Screen1"

export default function Signup(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()


    function signUp(event){
        event.preventDefault()
        const body = {name, email, password, confirmPassword}
        axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body)
        .then(res => {navigate("/")})
        .catch(err => alert(err.response.data.message))
    }
    return(
        <Screen1>
            <h1>My Wallet</h1>
            <form onSubmit={signUp}>
            <input placeholder="Nome" type="text" required value={name} onChange={e => setName(e.target.value)}></input>
            <input placeholder="E-mail" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <input placeholder="Senha" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <input placeholder="Confirme a senha" type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
            <button type="submit">Cadastrar</button>
            </form>

            <Link to="/" style={{ textDecoration: 'none' }}>
            <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </Screen1>
    )
}