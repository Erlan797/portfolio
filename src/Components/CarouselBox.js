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
                        className='d-block mr-auto w-50% round'
                        height= '500px'
                        weight = '500px'
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
                        className='d-block w-50%'
                        height= '500px'
                        weight = '500px'
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
                        className='d-block w-50%'
                        height= '500px'
                        weight = '500px'
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
