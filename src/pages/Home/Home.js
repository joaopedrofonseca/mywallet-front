import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MoneyDescription from "../../components/MoneyDescription"
import Screen2 from "../../components/Screen2"
import { Header, Record, Incomes, AddCashFlow } from "./styled"

export default function Home({ token, name }) {
    const config = { headers: { "Authorization": `Bearer ${token}` } }
    const [myCash, setMyCash] = useState([])
    const [myBalance, setMyBalance] = useState([])
    const [sum, setSum] = useState(undefined)
    const navigate = useNavigate()
    let result = 0

    function logoff() {
        axios.delete(`${process.env.REACT_APP_API_URL}/home`, config)
            .then(r => navigate("/")
            )
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/home`, config)
            .then(r => {
                setMyCash(r.data.cashflow)
                setMyBalance(r.data.balance)
                for(let i in myBalance){
                    result = result + myBalance[i].value
                }
                setSum(result)
            })
            .catch(err => console.log(err))

    }, [sum])

    return (
        <Screen2>
            <Header>
                <h1>Olá, {name}</h1>
                <ion-icon name="exit-outline" onClick={logoff}></ion-icon>
            </Header>
            <Record sum={sum}>
                {myCash.length === 0 ? <h1>Não há registros de entrada ou saída</h1> : myCash.map(m => <MoneyDescription myCash={m} />)}
                <div>
                    <h3>SALDO</h3>
                    <h4>R$ {sum}</h4>
                </div>
            </Record>
            <Incomes>
                <AddCashFlow onClick={() => navigate("/nova-entrada")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h1>Nova Entrada</h1>
                </AddCashFlow>
                <AddCashFlow onClick={() => navigate("/nova-saida")}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h1>Nova Saída</h1>
                </AddCashFlow>
            </Incomes>
        </Screen2>
    )
}