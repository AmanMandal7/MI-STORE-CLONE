import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const Banner = ({ end }) => {
    return (
        <Carousel fade>
            {end.map((item, index) => (
                <Carousel.Item key={item.image} interval={1000} id="banner" keyboard={true}>
                    <img
                        className="d-block w-100"
                        id="bannerImage"
                        src={item.image}
                        alt={`${index} banner`} />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Source:{item.source}</p>
                        <u>Read more</u>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Banner
