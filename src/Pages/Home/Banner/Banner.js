import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';

const Banner = () => {
    return (
        <div className=" mb-5">

            <Carousel fade>


                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-div" >
                            <p className="text-dark">Slider 2 is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal.</p>
                            <button className=" banner-btn  rounded-1">Explore More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption >

                        <p className="text-dark">Maldives, officially the Republic of Maldives, is an archipelagic state in the Indian subcontinent of Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India.</p>
                        <button className=" banner-btn  rounded-1">Explore More</button> <br />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="banner-div3">
                            <p className="text-dark">Slider 3 is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal.</p>
                            <button className=" banner-btn  rounded-1">Explore More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;