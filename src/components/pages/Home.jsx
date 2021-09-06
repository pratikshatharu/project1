import React from 'react';
import './home.css';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import { Carousel,Card } from 'react-bootstrap';
import Cards from './Cards';


function Home() {
    return (
        <>
            <Carousel varient="white">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src={food1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "
                        src={food2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Healthy food for healthy stomac</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={food3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
            <Cards/>
        </>
    )


}
export default Home;