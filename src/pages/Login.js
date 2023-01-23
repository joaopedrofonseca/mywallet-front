import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Screen1 from "../components/Screen1"

export default function Login({setToken, setName}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userNotFound, setUserNotFound] = useState(false)
    const navigate = useNavigate()

    function login(event){
        event.preventDefault()
        const body = {email,password}
        axios.post(`${process.env.REACT_APP_API_URL}`, body)
        .then(res => {
            setToken(res.data.token)
            setName(res.data.isUserSignedUp.name)
            setEmail('')
            setPassword('')
            navigate("/home")})
        .catch(er => setUserNotFound(true))
    }

    return (
        <Screen1>
            <h1>My Wallet</h1>
            <form onSubmit={login}>
                <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                <button type="submit">Entrar</button>
            </form>
            {userNotFound && <h2>Usuário ou senha incorretos</h2>}
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </Screen1>
    )
}