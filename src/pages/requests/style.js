import styled from "styled-components";


export const Container = styled.div`
    background: #0A0A10;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
;
`
export const Image = styled.img`
    margin-top: 11px;
    width: 246px;
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
export const ContainerRequest = styled.div`
    width: 342px;
    height: 101px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;

    button{
        background: transparent;
        cursor: pointer;
        border: none;
    }

    

`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    
    .textRequest{
        
        font-size: 18px;
        font-weight: 300;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.7);


    }

    .textName{
        
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        color: rgba(255, 255, 255, 1);

    }

`




export const Button = styled.button`

    width: 342px;
    height: 68px;
    padding: 0px 113px 0px 113px;
    background: rgba(255, 255, 255, 0.14);

    cursor: pointer;
    border: none;
    outline: none;
    margin-top: 70px;
    margin-bottom: 10px;

    
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

