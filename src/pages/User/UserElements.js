import styled from 'styled-components'

export const DashboardContainer = styled.div`
    border: 1px solid #4A4A4A;
    border-radius: 5px;
    padding: 2% 2%;
`

export const DashboardTitle = styled.h2`

`

export const UserRepoCard = styled.div`
    background-color: #242424;
    border-radius: 5px;
    margin: 1%;
    padding: 2%;
    &:hover {
        background-color: #262626;
    }
`

export const UserRepoCardData = styled.div`
    float: right;
`

export const UserRepoCardLink = styled.a`
    text-decoration: none;
`

export const UserRepoCardText = styled.p`
    text-align: right;
    font-size: .9rem;
    color: ${({ color }) => color ? color : '#B3B3B3'};
`

export const UserRepoCardTitle = styled.h3`
    font-size: 1rem;
`

export const UserRepoCardDescription = styled.h4`
    font-size: .85rem;
    color: #484848;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #4A4A4A;
    border-radius: 5px;
    padding: 10% 2%;
`

export const UserCardImg = styled.img`
    height: 175px;
    width: 175px;
    border-radius: 50%;
    border: none;
`
export const UserCardLink = styled.a`
    text-decoration: none;
`

export const UserCardUsername = styled.h2`
    margin-top: 1%;
    font-size: 1.5rem;
    letter-spacing: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const UserCardName = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #B3B3B3;
`

export const UserCardDescription = styled.p`
    margin: 0;
    font-size: .8rem;
    color: #B3B3B3;
`

export const Bold = styled.span`
    font-weight: bold;
`

