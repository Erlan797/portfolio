import React, { Component } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import './CarouselBox.css'
export default class CarouselBox extends Component {
  render() {
    return (
        <>
        <h2 className='text-center' id='main_title'>Anime Wallpapers</h2>
            <Carousel>
                
                <CarouselItem>
                    <img 
                        className='d-block m-auto w-100% '
                        height= '500px'
                        weight = '500px'
                        src='https://99px.ru/sstorage/53/2023/01/mid_347999_507448.jpg'
                        alt='Bleach'
                    />
                    <Carousel.Caption>
                        <h3>Chainsaw</h3>
                        <p>Makima</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                        className='d-block m-auto w-50%'
                        height= '500px'
                        weight = '500px'
                        src='https://www.pixelstalk.net/wp-content/uploads/images6/4K-Anime-Wallpaper-Desktop-1.jpg'
                        alt='Bleach'
                    />
                    <Carousel.Caption>
                        <h3>The Demon Slayer</h3>
                        <p>Tangiro</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img 
                        className='d-block m-auto w-50%'
                        height= '500px'
                        weight = '500px'
                        src="https://blogger.googleusercontent.com/img/a/AVvXsEg2S7O05yjyE0M5ApIoYgaG8oOMii6NXl8J99wYQMQiQ1QYbluY5L57IJttffL_vhfOO33436QglDyJFJ4mA_Ypwb1Xh9Z17hv-6llpKIhsgl-u0kaiwbhpN6dvbQqs8nGYefT7axpd5ZUoQ-3HVuXzRktYyjerTnCS61uCfzMR9gQxtqJnaB5dhUx_qg=w640-h360"
                        alt='Bleach'
                    />
                    <Carousel.Caption>
                        <h3>Dororo</h3>
                        <p>Dol</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
            </>
    )
  }
}
