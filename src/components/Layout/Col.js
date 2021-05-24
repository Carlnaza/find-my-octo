import styled from 'styled-components'

export const Col = styled.div`
    grid-column: ${({ xl }) => xl && 'span ' + xl};
    @media only screen and (max-width: 1024px) {
        grid-column: ${({ lg }) => lg && 'span ' + lg};
    }
    @media only screen and (max-width: 768px) {
        grid-column: ${({ md }) => md && 'span ' + md};
    }
    @media only screen and (max-width: 480px) {
        grid-column: ${({ xs }) => xs && 'span ' + xs};
    }
`