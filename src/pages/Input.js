import Screen2 from "../components/Screen2"
import Header from "../components/Header"
import StyleButton from "../components/StyleButton"
import StyledInput from "../components/StyleInput"

export default function Input() {
    return (
        <Screen2>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <StyledInput placeholder="Valor"></StyledInput>
            <StyledInput placeholder="Descrição"></StyledInput>
            <StyleButton>Salvar Entrada</StyleButton>
        </Screen2>
    )
}