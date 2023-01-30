import React, { Component } from 'react'
import { Container, Nav, NavItem, NavLink, TabContainer,Row, Col, Tab, TabContent } from 'react-bootstrap'
import RockPaperScissor from '../Projects/Rock-paper-scissors/rock_Paper_Scissor'
export default class MyProjects extends Component {
  render() {
    return (
      <Container>
          <TabContainer id='left-tabs-example'defaultActiveKey='first'>
                <Row>
                  <Col sm={3}>
                      <Nav variant = 'pills' className='flex-column mt-3'>
                        <NavItem>
                            <NavLink eventKey='first'>Rock-Paper-Scissor</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='second'>Memory Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='third'>Wack-a-mole</NavLink>
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
                             
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                         
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
