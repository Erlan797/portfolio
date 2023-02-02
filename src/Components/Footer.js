import React, { Component } from 'react'
import { InstagramOutlined  } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <Container>
      <footer className='palette'>
            <h1 className=''>All rights defended</h1>
            <a href='instagram.com'><InstagramOutlined style={{color:"purple", fontSize:'30px' }}/></a>
      </footer> 
      </Container>
    )
  }
}
