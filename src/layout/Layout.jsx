import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'

import { useCart } from '../context/CartContext'

function Layout({ children }) {

    const [state] = useCart()

    return (
        <>
            <header>
                <Link to='/products'>Home</Link>
                <Link to='/checkout'><PiShoppingCartSimpleBold />

                    <span>{state.itemsCounter}</span>
                </Link>
            </header>
            {children}
            <footer></footer>
        </>
    )
}

export default Layout