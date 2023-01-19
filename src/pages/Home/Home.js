import Screen2 from "../../components/Screen2"
import { Header, Record, Incomes, AddCashFlow } from "./styled"

export default function Home() {
    return (
        <Screen2>
            <Header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </Header>
            <Record>
                {/*<h1>Não há registros de entrada ou saída</h1>*/}
                <div>
                <h2 className="day">30/11</h2>
                <h2>Almoço mãe</h2>
                <h2 className="red">39,90</h2>
                <h3>SALDO</h3>
                <h4>2849,96</h4>
                </div>
            </Record>
            <Incomes>
                <AddCashFlow>
                <ion-icon name="add-circle-outline"></ion-icon>
                <h1>Nova Entrada</h1>
                </AddCashFlow>
                <AddCashFlow>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <h1>Nova Saída</h1>
                </AddCashFlow>
            </Incomes>
        </Screen2>
    )
}