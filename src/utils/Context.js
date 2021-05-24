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

        const options = {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }

        await Promise.all([
            fetch(`https://api.github.com/users/${username}`, options),
            fetch(`https://api.github.com/users/${username}/repos`, options)
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
            const sortedArr = data[1].sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
            setIsLoading(false)
            setUser({ ...user, info: data[0], repoArr: sortedArr })
        }).catch((err) => console.log(err))

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