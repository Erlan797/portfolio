import React, { Component } from 'react'
import Carousel from '../Components/CarouselBox/CarouselBox'
import CardSide from './Card/Card'
export default class Home extends Component {
  render() {
    return (<>
      <Carousel />
      <CardSide />
      </>
    )
  }
}
