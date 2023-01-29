import React, { Component } from 'react'
import { Button, Card, CardGroup, CardImg, Container } from 'react-bootstrap'
import Carousel from '../Components/CarouselBox'
export default class Home extends Component {
  render() {
    return (<>
      <Carousel />
      <Container>
        <h2 className='text-center m-4'>Animes</h2>
        <CardGroup className='m-4'>
          <Card bg='success'>
              <CardImg
                variant='top'
                src='https://phonoteka.org/uploads/posts/2021-06/1624162161_43-phonoteka_org-p-anime-oboi-sakura-krasivo-64.jpg'
              />
              <Card.Body>
                  <Card.Title className='text-center'>4k Anime wallpaper</Card.Title>
                  <Card.Text className='text-center'>Happy Girl</Card.Text>
                  <Button  variant='primary'>About team</Button>
              </Card.Body>
          </Card>
          <Card bg='success'> 
              
              <Card.Body>
                  <Card.Title className='text-center'>Jujutsu Kaizen</Card.Title>
                  <Card.Text className='text-center'>Cool guy</Card.Text>
                  <Button variant='primary'>Look more</Button>
                  
              </Card.Body>
              <CardImg
                variant='bottom'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirRTq079qbweapvRCF2Dxv_fgABWitb0uOw&usqp=CAU'
              />
          </Card>
          <Card bg='success'>
              <CardImg
                variant='top'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiFSSO-_cs8zdjzJTwLNmA5Le02Gra_L55Q&usqp=CAU'
              />
              <Card.Body>
                  <Card.Title className='text-center'>Sword Art Online</Card.Title>
                  <Card.Text className='text-center'>Asuna</Card.Text>
                  <Button variant='primary'>Check More</Button>
              </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      </>
    )
  }
}
