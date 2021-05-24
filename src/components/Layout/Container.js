import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 0% 5%;
    color: #FFFFFF;
    @media only screen and (max-width: 768px) {
        margin-top: ${({ margin }) => margin && margin};
        padding: ${({ padding }) => padding ? "0% 5%" : padding};
    }
`