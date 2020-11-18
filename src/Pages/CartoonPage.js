import React from 'react'
import Hero from '../Components/Hero'
import CartoonImg from '../Assets/New folder/panda-1892023.png'
import AllCartoons from '../Components/CartoonsPage/AllCartoons'

const CartoonPage = () => {
    return (
        <React.Fragment>
            <Hero img={CartoonImg} max="true" />
            <AllCartoons />
        </React.Fragment>
    )
}

export default CartoonPage
