import React, { useState, useRef } from "react";
import axios from "axios";

import Burger from '../../assets/burger 1.png'
import { useHistory } from "react-router-dom";


import { Container, Image, H1, Label, Input, Button, ContainerInput } from './style'



function Home() {

    const history = useHistory()
    const [requests, setRequests] = useState([])
    const name = useRef()
    const request = useRef()


    async function newRequest() {

        const { data: newRequest } = await axios.post('http://localhost:3001/order', { clientName: name.current.value, order: request.current.value })

        setRequests([...requests, newRequest])

        history.push('/requests')
    }


    return (
        <Container>
            <Image alt="logo-img" src={Burger} />

            <H1>Faça seu pedido!</H1>


            <ContainerInput>
                <Label>Pedido</Label>
                <Input placeholder="1 Coca-Cola, 1-X Salada" ref={request}></Input>

                <Label>Nome do Cliente</Label>
                <Input placeholder="Steve Jobs" ref={name}></Input>
            </ContainerInput>

            <Button onClick={newRequest}>Novo Pedido</Button>

        </Container>
    )
}

export default Home