import React from 'react'
import styled from 'styled-components'


// Images
import uhoh from '../../assets/404.svg'

export default function NotFound() {
    return (
        <Container>
            <Image src={uhoh} alt="404 Image" />
            <PageTitle>
                Uh Oh! <br /> Something <br /> Went Wrong!
            </PageTitle>
            <GoBack href="/">Home →</GoBack>
        </Container>
    )
}

const Container = styled.div`
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    width: 20%;
    height: 20%;
    @media only screen and (max-width: 480px) {
        width: 50%;
        height: 50%;
    }
`

const PageTitle = styled.h2`
    color: #B3B3B3;
    font-family: 'Archivo Black', sans-serif;
    letter-spacing: -2px;
    font-size: 3rem;
    margin-top: 3%;
    text-align: center;
`

const GoBack = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
    &:hover {
        color: #B3B3B3;
    }
`