import Screen1 from "../components/Screen1"

export default function Signup(){
    return(
        <Screen1>
            <h1>My Wallet</h1>
            <input placeholder="Nome"></input>
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>
            <input placeholder="Confirme a senha"></input>
            <button>Cadastrar</button>

            <h2>Já tem uma conta? Entre agora!</h2>

        </Screen1>
    )
}