import React, { useEffect } from 'react'
import { css } from "@emotion/react";

// Components
import Navbar from '../../components/Navbar/index.js'

// Layout
import { Container } from '../../components/Layout/Container.js'
import { Row } from '../../components/Layout/Row.js'
import { Col } from '../../components/Layout/Col.js'

// Styled Components
import {
    UserCardContainer,
    UserCardImg,
    UserCardLink,
    UserCardUsername,
    UserCardName,
    UserCardDescription,
    UserRepoCard,
    UserRepoCardData,
    UserRepoCardTitle,
    UserRepoCardDescription,
    UserRepoCardLink,
    UserRepoCardText,
    DashboardContainer,
    DashboardTitle,
    Bold
} from './UserElements.js'

// Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faExternalLinkAlt,
    faUserFriends,
    faLink,
    faCodeBranch,
    faStar,
    faCircle
} from '@fortawesome/free-solid-svg-icons'
import {
    HashLoader
} from 'react-spinners'

// Utils
import Context from '../../utils/Context.js'

const override = css`
    display: block;
    margin: 0 auto;
    height: 60vh;
`

export default function User({ match }) {

    const {
        user,
        isLoading,
        setIsLoading,
        getUser
    } = Context()

    useEffect(async () => {
        setIsLoading(true)
        await getUser(match.params.username)
    }, [])

    const UserCard = () => {

        console.log(user)
        return (
            <UserCardContainer>
                <UserCardImg src={user.info.avatar_url} />
                <UserCardLink href={user.info.html_url} target="_blank">
                    <UserCardUsername>
                        {user.info.login} <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
                    </UserCardUsername>
                </UserCardLink>
                <UserCardName>
                    {user.info.name}
                </UserCardName>
                <UserCardDescription>
                    {user.info.bio}
                </UserCardDescription>
                <UserCardDescription>
                    <FontAwesomeIcon icon={faUserFriends} size="xs" /> <Bold>{user.info.followers}</Bold> Followers  • <Bold>{user.info.following}</Bold> Following
                </UserCardDescription>
                { user.info.blog &&
                    <UserCardLink href={user.info.blog} target="_blank">
                        <UserCardDescription>
                            <FontAwesomeIcon icon={faLink} size="xs" /> {user.info.blog}
                        </UserCardDescription>
                    </UserCardLink>
                }
            </UserCardContainer>
        )
    }

    const RepoCard = ({ title, description, language, size, stars, forks, link }) => {
        return (
            <UserRepoCardLink href={link} target="_blank">
                <UserRepoCard>
                    <Row>
                        <Col
                            xl={6}
                            lg={6}
                            md={12}
                            xs={12}
                        >
                            <UserRepoCardTitle>
                                {title}
                            </UserRepoCardTitle>
                            <UserRepoCardDescription>
                                {description}
                            </UserRepoCardDescription>
                        </Col>
                        <Col
                            xl={6}
                            lg={6}
                            md={12}
                            xs={12}
                        >
                            <UserRepoCardData>
                                <UserRepoCardText color="none">
                                    <FontAwesomeIcon icon={faCircle} size="xs" /> {language ? language : "Other"}
                                </UserRepoCardText>
                                <UserRepoCardText>
                                    <FontAwesomeIcon icon={faStar} size="xs" /> {stars}
                                </UserRepoCardText>
                                <UserRepoCardText>
                                    <FontAwesomeIcon icon={faCodeBranch} size="xs" /> {forks}
                                </UserRepoCardText>
                                <UserRepoCardText>
                                    {size.toLocaleString()} kb
                                </UserRepoCardText>
                            </UserRepoCardData>
                        </Col>
                    </Row>
                </UserRepoCard>
            </UserRepoCardLink>
        )
    }

    let sortedData = user.repoArr.sort((a, b) => a.updated_at - b.updated_at)
    return (
        <>
            <Navbar />
            {
                isLoading ?
                    <HashLoader color={"#B3B3B3"} loading={true} css={override} size={150} />
                    :
                    <Container padding="0% 5%">
                        <Row>
                            <Col
                                xl={3}
                                lg={3}
                                md={12}
                                xs={12}
                            >
                                <UserCard />
                            </Col>
                            <Col
                                xl={9}
                                lg={9}
                                md={12}
                                xs={12}
                            >
                                <Container margin="3%" padding={0}>
                                    <DashboardContainer>
                                        <DashboardTitle>{user.info.login}'s Recent Repos</DashboardTitle>
                                        <Row>
                                            {
                                                user.repoArr.length > 1 ? sortedData.slice(0, 6).map((data, i) => (
                                                    <Col
                                                        xl={6}
                                                        lg={6}
                                                        md={12}
                                                        xs={12}
                                                        key={i}
                                                    >
                                                        <RepoCard
                                                            title={data.name}
                                                            description={data.description}
                                                            language={data.language}
                                                            size={data.size}
                                                            stars={data.stargazers_count}
                                                            forks={data.forks}
                                                            link={data.html_url}
                                                        />
                                                    </Col>
                                                ))

                                                    :
                                                    <p>These are not the repos you're looking for</p>
                                            }
                                        </Row>
                                    </DashboardContainer>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
            }
        </>
    )
}
