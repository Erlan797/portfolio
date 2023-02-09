import React, { Component } from 'react'
import { InstagramOutlined,YoutubeOutlined,GithubOutlined,GoogleOutlined    } from '@ant-design/icons';
import { Container,Navbar,Form } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
  <>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                        
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            
                           
                        </Navbar.Collapse>
                        <Form  className='m-auto'>
                           
                           
                        <div className='m-auto'>
            <h1 style={{color:'white',marginRight:'310px'}}> If you need contacs move to Contants page</h1>
            <a href='instagram.com'><InstagramOutlined style={{color:"purple", fontSize:'30px' }}/></a>
            <a href='instagram.com'><YoutubeOutlined style={{color:"purple", fontSize:'30px' }}/></a>
            <a href='instagram.com'><GithubOutlined  style={{color:"purple", fontSize:'30px' }}/></a>
            <a href='instagram.com'><GoogleOutlined style={{color:"purple", fontSize:'30px' }}/></a>
            </div>         
            </Form>
        </Container>
        </Navbar>
       
            </>
    )
  }
}
