import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import bl1 from '../assesst/bl1.jpg'
import bl2 from '../assesst/bl2.png'
export default class CarouselBox extends Component {
  render() {
    return (
            <Carousel>
                <CarouselItem>
                    <img 
                        className='d-block w-100%'
                        height= '600px'
                        weight = '600px'
                        src={bl1}
                        alt='Bleach'
                    />
                    <Carousel.Caption>
                        <h3>Bleach Image</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                        className='d-block w-100%'
                        height= '600px'
                        weight = '600px'
                        src={bl2}
                        alt='Bleach'
                    />
                    <Carousel.Caption>
                        <h3>Bleach Image</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                        className='d-block w-100%'
                        height= '1000px'
                        weight = '1000px'
                        src={bl1}
                        alt='Bleach'
                    />
                    <Carousel.Caption>
                        <h3>Bleach Image</h3>
                        <p>lorem</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>

    )
  }
}
