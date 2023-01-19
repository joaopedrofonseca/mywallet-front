import Screen1 from "../components/Screen1"


export default function Login(){
    return(
        <Screen1>
            <h1>My Wallet</h1>
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>
            <button>Entrar</button>

            <h2>Primeira vez? Cadastre-se!</h2>
        </Screen1>
    )
}