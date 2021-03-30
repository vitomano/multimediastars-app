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
                        <span>Boost your</span><br />
                        <TextLoop className="mb-3" interval={3000}>
                            <span>Marketing</span>
                            <span>Social Medias</span>
                            <span>Users</span>
                        </TextLoop>{" "}
                    </div>
                    <Link to="/" className="btn-white">Our Services</Link>
                </div>

                <div className="banner-phone">
                    <img src={Phone} alt="marketing-phone" />
                </div>

            </div>
        </div>
    )
}
