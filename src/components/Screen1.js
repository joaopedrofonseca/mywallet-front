import styled from "styled-components";

const Screen1 = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    height: 100vh;
    min-height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    form{
        display: flex;
        flex-direction: column;
    }
    h1{
        font-family: 'Saira Stencil One';
        color: white;
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 24px;
    }
    h2{
        cursor: pointer;
        margin-top: 34px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        border: none;
        margin-bottom: 13px;
        box-sizing: border-box;
        padding: 15px 18px;
        font-family: 'Raleway';
            color: black;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

        ::placeholder{
            font-family: 'Raleway';
            color: darkgrey;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
        }
    }
    button{
        width: 326px;
        height: 46px;
        border: none;
        border-radius: 5px;
        background-color: #A328D6;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        cursor: pointer;
    }
`

export default Screen1