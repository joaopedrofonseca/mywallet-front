import styled from "styled-components"

export default function MoneyDescription({ myCash }) {
    return (
        <MoneyDes myCash={myCash}>
            <h2 className="day">{myCash.date}</h2>
            <h2>{myCash.description}</h2>
            <h2 className="money">{myCash.value}</h2>
        </MoneyDes>)
}

const MoneyDes = styled.div`
            .money{
            color: ${props => props.myCash.isPositive ? "#03AC00" : "#C70000"}
        }
`