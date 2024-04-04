import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './Product.css'
import { Link } from 'react-router-dom';
import SingleProduct from "../../pages/single-product/SingleProduct";

import { IoPersonSharp } from "react-icons/io5";
import { GiModernCity } from "react-icons/gi";
import { FaStreetView } from "react-icons/fa6";
import { AiTwotoneHome } from "react-icons/ai";

import { API_URL } from '../../static'
import axios from 'axios';

function Product() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(8)
    const [loding, setLoding] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryValue, setCategoryValue] = useState("")

    // useEffect(() => {
    //     axios
    //         .get(`${API_URL}/categories`)
    //         .then(res => setCategories(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        setLoding(true)
        let url = categoryValue === "" ?
            `${API_URL}?limit=${count}` :
            `${API_URL}/category/${categoryValue}?limit=${count}`


        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [count, categoryValue])

    // const getCategory = (text) => {
    //     setCategoryValue(text)
    //     setData([])
    // }

    let products = data?.map(el => (
        <Link to={`/product/${el.id}`}>
            <div key={el.id} className="card">
                <div className="img"><IoPersonSharp className='card__person' /></div>
                <h2 className='card__name'>{el.name}</h2>
                <h2 className='username'>username: {el.username}</h2>
                <p className='person__title'>company: {el.company.name}</p>
                <p className='person__title'>{el.company.catchPhrase}</p>
                <p className='person__title'>{el.company.bs}</p>
                <h3 className='person__city'><GiModernCity /> {el.address.city}</h3>
                <h3 className='person__street'><FaStreetView /> {el.address.street}</h3>
                <h3 className='person__suite'><AiTwotoneHome /> {el.address.suite}</h3>
                <h3 className='person__phone'>coll-number: {el.phone}</h3>
                <p className='person__email'> {el.email}</p>
            </div>
        </Link>

    ))


    return (
        <>
            <div div className='product' >
                {loding && <div className="loading">
                    <div class="loader">
                        <div class="load-inner load-one"></div>
                        <div class="load-inner load-two"></div>
                        <div class="load-inner load-three"></div>
                        <span class="text">Loading...</span>
                    </div>

                </div>
                }

                <div className="wrapper">{products}</div>

            </div >
            <Routes>
                <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
        </>

    )
}

export default Product