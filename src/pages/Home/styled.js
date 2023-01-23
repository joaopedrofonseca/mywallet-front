import styled from "styled-components"

const Header = styled.div`
        width: 90vw;
        height: 78px;
        background-color: #8C11BE;
        display: flex;
        align-items: center;
        justify-content: space-between;
`
const Record = styled.div`
        width: 90vw;
        height: 446px;
        border-radius: 5px;
        background-color: white;
        padding: 23px 12px;
        position: relative;
        div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        h1{
            margin-top: 200px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #868686;
        }
        h2{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
        }
        .day{
            color: #C6C6C6;
        }
        h3{
            position: absolute;
            bottom: 10px;
            left: 15px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
        }
        h4{
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            color: ${props => props.sum > 0 ? '#03AC00' : '#C70000'}
        }


`

const Incomes = styled.div`
        background-color: #8C11BE;
        margin-top: 13px;
        height: 143px;
        width: 90vw;
        display: flex;
        justify-content: space-between;
`
const AddCashFlow = styled.div`
    cursor: pointer;
    width: 44vw;
    height: 114px;
    border-radius: 5px;
    background: #A328D6;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        margin-left: 2vh;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export {Header, Record, Incomes, AddCashFlow}