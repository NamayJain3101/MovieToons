import React from 'react'
import ErrorImg from '../Assets/Error.png'
import Hero from '../Components/Hero'

const ErrorPage = () => {
    return (
        <React.Fragment>
            <Hero img={ErrorImg} max={true} />
        </React.Fragment>
    )
}

export default ErrorPage
