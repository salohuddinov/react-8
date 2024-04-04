import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"

import { IoPersonSharp } from "react-icons/io5";
import { GiModernCity } from "react-icons/gi";
import { FaStreetView } from "react-icons/fa6";
import { AiTwotoneHome } from "react-icons/ai";

import { useParams } from 'react-router-dom';
import Hero from '../../components/hero/Hero'
import axios from 'axios';
import { API_URL } from '../../static'


function SingleProduct() {
    const [product, setProduct] = useState(null)
    const [loading, setLoding] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoding(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [])

    if (loading) {
        return <div className="loading">
            <div className="sharingon">
                <div className="ring">
                    <div className="to"></div>
                    <div className="to"></div>
                    <div className="to"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    }




    return (
        <>
            <Hero />
            <div className="singleproduct">
                <div className="img"><IoPersonSharp className='card__person' /></div>
                <h2 className='card__name'>{product?.name}</h2>
                <h2 className='username'>username: {product?.username}</h2>
                <p className='person__title'>company: {product?.company.name}</p>
                <p className='person__title'>{product?.company.catchPhrase}</p>
                <p className='person__title'>{product?.company.bs}</p>
                <h3 className='person__city'><GiModernCity /> {product?.address.city}</h3>
                <h3 className='person__street'><FaStreetView /> {product?.address.street}</h3>
                <h3 className='person__suite'><AiTwotoneHome /> {product?.address.suite}</h3>
                <h3 className='person__phone'>coll-number: {product?.phone}</h3>
                <p className='person__email'> {product?.email}</p>
            </div>
        </>
    )
}

export default SingleProduct