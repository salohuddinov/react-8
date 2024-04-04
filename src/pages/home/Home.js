import React from 'react'
import Baner from '../../components/baner/Baner';
import Product from '../../components/product/Product'

function Home() {
    return (
        <>
            <div className="home">
                <Baner />
                <Product />
            </div>
        </>
    )
}

export default Home