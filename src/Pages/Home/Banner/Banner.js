import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=" my-2">

            <Carousel fade>
                <Carousel.Item interval={1800}>
                    <img
                        className="d-block w-100 banner-img"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-div">
                            <div className="text-dark">   <h1 className="slider-title">ANTIQUE POTTERY</h1>
                                <p className="my-3"> In touch with your heart. Let's get our hands dirty.</p>
                            </div>
                            <Link to="/products"> <button className=" banner-btn  rounded-1">Shop Now</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} >
                    <img
                        className="d-block w-100 banner-img"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption >

                        <div className="text-dark">  <h1 className="slider-title">POTTERY <br /> MADE WITH LOVE</h1>
                            <p p className="my-3"> A field of clay touched by the genius of man beconmes a castle </p>
                        </div>
                        <Link to="/products"> <button className=" banner-btn  rounded-1">Shop Now</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100 banner-img"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-div3">
                            <div className="text-dark">
                                <h1 className="slider-title">PORCELAIN VASES</h1>
                                <p className="my-3"> In touch with your heart. Let's get our hands dirty.</p>
                            </div>
                            <Link to="/products"> <button className=" banner-btn  rounded-1">Shop Now</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;