import React from 'react'
import { Link } from 'react-router-dom'
import TextLoop from "react-text-loop";

import Phone from '../../images/banner/iPhone_mockup.png'

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content container">

                <div className="banner-text">
                    <div>
                        <h1>Boost your</h1>
                        <TextLoop className="mb-1" interval={3000}>
                            <h1>Marketing</h1>
                            <h1>Social Medias</h1>
                            <h1>Users</h1>
                        </TextLoop>{" "}
                    </div>
                    <Link to="/" className="btn-outline-secondary">Our Services</Link>
                </div>

                <div className="banner-phone">
                    <img src={Phone} alt="marketing-phone" />
                </div>

            </div>
        </div>
    )
}
