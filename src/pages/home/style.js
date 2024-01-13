import styled from "styled-components";


export const Container = styled.div`
    background: #0A0A10;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
;
`
export const Image = styled.img`
    margin-top: 11px;
    width: 342px;
    height: 354px;


`

export const H1 = styled.h1`

    font-size: 28px;
    font-weight: 700;
    line-height: 33px;
    color: #FFFFFF;
    margin-top: 30px;
    margin-bottom: 40px;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction:column ;
`

export const Label = styled.label`

    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    color: #EEEEEE;
    margin-top: 25px;
    padding-left:20px ;
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    border-radius:14px ;
    border: none;
    outline: none;
    

    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);
    padding-left: 20px;

    &::placeholder{
        color: rgba(255, 255, 255, 0.5);
    }
`

export const Button = styled.button`

    width: 342px;
    height: 68px;
    padding: 0px 113px 0px 113px;
    background: rgba(217, 56, 86, 1);
    cursor: pointer;
    border: none;
    outline: none;
    margin-top: 70px;

    
    font-size: 17px;
    font-weight: 900;
    line-height: 3px;
    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }


`

