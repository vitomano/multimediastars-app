import React from 'react';
import { Link } from 'react-router-dom';
import PhoneSocial from '../../images/home/phone-social-medias.png'

export const SocialMedias = () => {

    return (

        <section className="social-medias">
            <div className="container">
                <img src={PhoneSocial} alt="phone-social-medias" />
                <div className="px-5">
                    <h2 className="primary mb-3">Social Medias<span className="secondary">.</span></h2>
                    <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. 'Content here, content here', making it look like readable English.</p>
                    <Link to="/" className="btn">Read More</Link>
                </div>
            </div>
        </section>
    )
}
