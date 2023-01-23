import Screen2 from "../components/Screen2"
import Header from "../components/Header"
import StyleButton from "../components/StyleButton"
import StyledInput from "../components/StyleInput"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Input({token, setIncome}) {
    const [money, setMoney] = useState('')
    const [description, setDescription] = useState('')
    const config = { headers: { "Authorization": `Bearer ${token}` } }
    const navigate = useNavigate()

    function addCash(event){
        event.preventDefault()
        const body = {value: Number(money), description}
        axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, body, config)
        .then(r => {
            setIncome(r.data)
            navigate("/home")
        })
        .catch(err => console.log(err.response.data))
    }

    return (
        <Screen2>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <form onSubmit={addCash}>
                <StyledInput placeholder="Valor" required type="text" value={money} onChange={e => setMoney(e.target.value)}></StyledInput>
                <StyledInput placeholder="Descrição" required type="text" value={description} onChange={e => setDescription(e.target.value)}></StyledInput>
                <StyleButton type="submit">Salvar Entrada</StyleButton>
            </form>
        </Screen2>
    )
}