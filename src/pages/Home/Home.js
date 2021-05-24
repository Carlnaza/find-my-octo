import React from 'react'

// Styles
import {
    Content,
    Form,
    SearchTitle,
    SearchInput,
    SearchButton,
    InputContainer,
    TooltipContainer
} from './HomeElements.js'
import {
    Container
} from '../../components/Layout/Container.js'

// Components
import Navbar from '../../components/Navbar'

// Utils
import Context from '../../utils/Context.js'

const Input = ({ user, redirectUser, searchInputChange, isLoading }) => {
    return (
        <Form
            onSubmit={(e) => redirectUser(e, user.inputSearch)}
            autoComplete="off"
        >
            <InputContainer>
                <SearchInput
                    type="text"
                    placeholder="Ex: octocat"
                    name="inputSearch"
                    value={user.inputSearch}
                    onChange={searchInputChange}
                    autoComplete="off"
                />
                <SearchButton
                    className="fa fa-search"
                    onClick={(e) => redirectUser(e, user.inputSearch)}
                >
                </SearchButton>
            </InputContainer>
        </Form>
    )
}

const Tooltip = ({ validation }) => {
    return (
        <TooltipContainer>
            {validation.message}
        </TooltipContainer>
    )
}

export default function Home() {

    const {
        user,
        redirectUser,
        searchInputChange,
        isLoading,
        validation
    } = Context()

    return (
        <>
            <Navbar />
            <Container>
                <Content>
                    <SearchTitle>
                        DISPLAY YOUR <br /> GITHUB ANALYTICS.
                    </SearchTitle>
                    <Input
                        user={user}
                        redirectUser={redirectUser}
                        searchInputChange={searchInputChange}
                        isLoading={isLoading}
                    />
                    <Tooltip validation={validation} />
                </Content>
            </Container>
        </>
    )
}