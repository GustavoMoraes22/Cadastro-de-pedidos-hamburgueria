import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import bag from '../../assets/Pedidos.png'
import Trash from '../../assets/trash.svg'

import { Container, Image, H1, Button, ContainerRequest, ContainerText } from './style'
import axios from "axios";



function Order() {

    const [requests, setRequests] = useState([])

    const history = useHistory()


    useEffect(() => {

        async function fetch() {
            const { data: newRequest } = await axios.get('http://localhost:3001/order')

            setRequests(newRequest)
        }

        fetch()
    })

    async function deleteOrder(order) {

        await axios.delete(`http://localhost:3001/order/${order}`)

        const newRequests = requests.filter(request => request.id !== order)

        setRequests(newRequests)
    }



    function goBack() {
        history.push('/')
    }

    return (
        <Container>
            <Image alt="logo-img" src={bag} />

            <H1>Pedidos</H1>
            {
                requests.map(request => (
                    <ContainerRequest key={request.id}>

                        <ContainerText>
                            <p className="textRequest">{request.order}</p>
                            <p className="textName">{request.clientName}</p>
                        </ContainerText>

                        <button onClick={() => deleteOrder(request.id)}><img src={Trash} alt="lixeira" /></button>
                    </ContainerRequest>
                ))

            }

            <Button onClick={goBack}>Voltar</Button>

        </Container>
    )
}

export default Order