import React, { Component } from 'react'
import { Container, Nav, NavItem, NavLink, TabContainer,Row, Col, Tab, TabContent } from 'react-bootstrap'
export default class About extends Component {
  render() {
    return (
      <Container>
          <TabContainer id='left-tabs-example'defaultActiveKey='first'>
                <Row>
                  <Col sm={3}>
                      <Nav variant = 'pills' className='flex-column mt-3'>
                        <NavItem>
                            <NavLink eventKey='first'>Design</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='second'>Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='third'>Programing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='fourth'>Framework</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='fifth'>Librabries</NavLink>
                        </NavItem>

                      </Nav>
                  </Col>
                  <Col sm={9}>
                    <TabContent className='mt-3' variant='dark'>
                      <Tab.Pane eventKey='first'>
                              <img 
                              alt='image1'
                              src='https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg' />
                              <p>The Demon Slayer </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                              <img src='https://hdoboi.kiev.ua/images/middle/23.May.2019-bleach.jpg'alt='image1'/>
                              <p>Bleach </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                              <img
                              height='500px' 
                              width='700px'
                              alt='image1'
                              src='https://top-fon.com/uploads/posts/2021-07/1626833144_50-p-krasnie-anime-oboi-na-telefon-52.jpg' />
                              <p>Tyanka </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fourth'>
                              <img 
                              alt='image1'
                              src='https://avatars.mds.yandex.net/i?id=93a84d563d0a8277d47edbae07b13144ce867a8b-7757653-images-thumbs&n=13' />
                              <p>Pidor </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fifth'>
                              <img
                              alt='image1' 
                              src='https://99px.ru/sstorage/53/2021/09/mid_333109_925528.jpg' />
                              <p>The Demon Slayer </p>
                      </Tab.Pane>
                    </TabContent>
                  </Col>
                </Row>

          </TabContainer>
      </Container>
    )
  }
}
