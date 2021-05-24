import { useState } from 'react'

const Context = () => {

    const [isLoading, setIsLoading] = useState(false)

    const [user, setUser] = useState({
        inputSearch: '',
        info: {},
        repoArr: []
    })

    const [validation, setValidation] = useState({
        empty: false,
        message: ''
    })

    const searchInputChange = (e) => {
        setValidation({ ...validation, message: '' })
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const redirectUser = (e, username) => {
        e.preventDefault()

        if (!username) {
            setValidation({ ...validation, message: "Uh oh! Username cannot be empty." })
        } else {
            window.location = `/user/${username}`
        }

    }

    const getUser = async (username) => {

        Promise.all([
            fetch(`https://api.github.com/users/${username}`, {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            }),
            fetch(`https://api.github.com/users/${username}/repos`, {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            })
        ]).then(responses => {
            return Promise.all(responses.map(function (response) {
                if (!(response.status == 200)) {
                    setIsLoading(false)
                    window.location = '/404'
                    return
                } else {
                    return response.json();
                }
            }))
        }).then(data => {
            setIsLoading(false)
            setUser({ ...user, info: data[0], repoArr: data[1] })
        })

    }

    return {
        user,
        getUser,
        redirectUser,
        searchInputChange,
        isLoading,
        validation,
        setIsLoading
    }
}

export default Context