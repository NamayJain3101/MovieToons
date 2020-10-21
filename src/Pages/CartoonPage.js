import React from 'react'
import Hero from '../Components/Hero'
import CartoonImg from '../Assets/New folder/panda-1892023.png'

const CartoonPage = () => {
    return (
        <React.Fragment>
            <Hero img={CartoonImg} max={true} />
        </React.Fragment>
    )
}

export default CartoonPage
