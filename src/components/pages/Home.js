import React from 'react'
import { Banner } from '../ui/Banner'
import icon1 from '../../images/home/icon-1-search.svg'
import icon2 from '../../images/home/icon-2-phone.svg'
import icon3 from '../../images/home/icon-3-browser.svg'
import { Link } from 'react-router-dom'
import { Mailing } from '../ui/Mailing'
import { SocialMedias } from '../ui/SocialMedias'

export const Home = () => {
    return (
        <main>
            <Banner />

            <section className="container our-services">
                <h2 className="primary center mt-4 mb-2">Our Services<span className="secondary">.</span></h2>
                
                <div className="our-services-grid">

                    <div className="services center">
                        <img src={icon1} alt="search-icon" />
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <Link to="/" className="btn">Read More</Link>
                    </div>

                    <div className="services center">
                        <img src={icon2} alt="search-icon" />
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <Link to="/" className="btn">Read More</Link>
                    </div>

                    <div className="services center">
                        <img src={icon3} alt="search-icon" />
                        <p>It is a long established fact that a reader.</p>
                        <Link to="/" className="btn">Read More</Link>
                    </div>

                </div>
            </section>

            <Mailing />
            
            <SocialMedias />
        </main>
    )
}
