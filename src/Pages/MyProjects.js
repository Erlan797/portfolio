import React, { Component } from 'react'
import { Container, Nav, NavItem, NavLink, TabContainer,Row, Col, Tab, TabContent } from 'react-bootstrap'
import AnimeStore from '../Projects/Anime store/App'
import Calculator from '../Projects/Calculator/App'
import RockPaperScissor from '../Projects/Rock-paper-scissors/rock_Paper_Scissor'
export default class MyProjects extends Component {
  render() {
    return (
      <Container >
          <TabContainer id='left-tabs-example'defaultActiveKey='first'>
                <Row>
                  <Col sm={3}>
                      <Nav variant = 'pills' className='flex-column mt-3'>
                        <NavItem>
                            <NavLink eventKey='first'>Rock-Paper-Scissor</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='second'>Anime Store</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='third'>Calculator</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='fourth'>Breakout</NavLink>
                        </NavItem>
                      </Nav>
                  </Col>
                  <Col sm={9}>
                    <TabContent className='mt-3' variant='dark'>
                      <Tab.Pane eventKey='first'>
                      <RockPaperScissor />
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <AnimeStore />
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                         <Calculator />
                      </Tab.Pane>
                      <Tab.Pane eventKey='fourth'>
                      </Tab.Pane>
                    </TabContent>
                  </Col>
                </Row>

          </TabContainer>
      </Container>
    )
  }
}
