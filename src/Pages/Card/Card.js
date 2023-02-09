import React, { useState } from 'react'
import {Container,CardGroup,Card,CardImg,Button} from 'react-bootstrap'
import './Card.css'
export default function CardSide() {
    let [count, setCounter] = useState('');
    const handleClick = () => {
        setCounter(count = "Yes u are a man of culture!");
    }
    
  return (
    <Container>
    <h2 className='text-center m-4'>Anime Cards</h2>
    <CardGroup className='m-4'>
      <Card id='kaguya'  className='m-4'> 
          <CardImg

            variant='top'
            src='https://mobimg.b-cdn.net/v3/fetch/6c/6ce4027d0b7dc39ff88e7af574a72b2a.jpeg'
          />
          <Card.Body>
              <Card.Title id='title' className='text-center'>Kaguya sama</Card.Title>
              <Card.Text className='text-center'>The Best girl in Anime</Card.Text>
              <Button  variant='primary' onClick={handleClick}>Click here if u agree: {count}</Button>
          </Card.Body>
      </Card>
      <Card id='kaguya'  className='m-4'> 
          
          <Card.Body>
              <Card.Title id='title' className='text-center'>Jujutsu Kaizen</Card.Title>
              <Card.Text className='text-center'>Cool guy</Card.Text>
              <a href="https://jut.su/jujutsu-kaisen/film-1.html"><Button variant='primary'>Look more</Button></a>
              
          </Card.Body>
          <CardImg
            variant='bottom'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirRTq079qbweapvRCF2Dxv_fgABWitb0uOw&usqp=CAU'
          />
      </Card>
      <Card  id='kaguya' className='m-4'>
          <CardImg
            variant='top'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiFSSO-_cs8zdjzJTwLNmA5Le02Gra_L55Q&usqp=CAU'
          />
          <Card.Body>
              <Card.Title id='title' className='text-center'>Sword Art Online</Card.Title>
              <Card.Text className='text-center'>Asuna</Card.Text>
              <Button variant='primary'>Check More</Button>
          </Card.Body>
      </Card>
    </CardGroup>
  </Container>
  )
}
