import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchTitle = styled.h2`
    font-family: 'Archivo Black', sans-serif;
    font-size: 5rem;
    text-align: center;
    letter-spacing: -10px;
    @media only screen and (max-width: 1024px) {
        line-height: 75px;
    }
    @media only screen and (max-width: 768px) {
        line-height: 65px;
        letter-spacing: -8px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 4rem;
        letter-spacing: -8px;
        line-height: 50px;
    }
`

export const Form = styled.form`
    display: inline-block;
    margin: 0 auto;
    @media only screen and (max-width: 480px) {
        margin-top: 3%;
    }
`

export const InputContainer = styled.div`
    display: inline;
    border: 2px solid #B3B3B3;
    border-radius: 100px;
    padding: 10px 15px;    
    border-radius: 15px;
    transition: background-color 0.5 ease-in-out;
    @media only screen and (max-width: 480px) {
        padding-left: 0;
        padding-right: 0;
    }
`

export const SearchInput = styled.input`
    margin-top: 1%;
    height: 50px;
    width: 300px;
    border: 0;
    font-size: 1.25rem;
    color: #FFFFFF;
    background-color: transparent;
    padding: 0% 5%;
    &:focus {
        outline: none;
    }
    &:-webkit-autofill {
        margin-top: 1%;
        height: 50px;
        width: 300px;
        border: 0;
        font-size: 1.25rem;
        color: #FFFFFF;
        background-color: transparent !important;
        padding: 0% 5%;
    }
`

export const SearchButton = styled.button`
    color: #FFFFFF;
    border: none;
    background: none;
    cursor: pointer;
`

export const TooltipContainer = styled.p`
    color: #B3B3B3
`