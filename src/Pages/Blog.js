import React, { Component } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
export default class Blog extends Component {
  
  render() {
    return (
      <Container>
          <Row>
              <Col md='9'>
                  <div style={{fontSize:'25px'}}>It is a big step for my future profession</div>
              </Col>
          </Row>
      </Container>
    )
  }
}
