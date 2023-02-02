import React, { Component } from 'react'
import { Container, Form, FormControl, FormLabel, FormText, FormGroup, FormCheck, Button } from 'react-bootstrap'

export default class  Contacs extends Component {
  render() {
    return (
      <Container style={{width:'500px'}}>
        <h1 className='text-center'>Contact me</h1>
        <Form>
            <FormGroup controlId="formBasicEmail">
                <FormLabel>
                  Email  address
                </FormLabel>
                <FormControl type='email' placeholder='Enter email' />
                    <FormText>
                        
                    </FormText>
            </FormGroup>
            <FormGroup controlId='formBasicPassword'>
                    <FormLabel>Example textarea</FormLabel>
                    <FormControl as='textarea' rows="3" placeholder='Here...'></FormControl>
            </FormGroup>
            <FormGroup controlId='formBasicCheckbox'>
                    <FormCheck type='checkbox' label='Check me out'></FormCheck>
            </FormGroup>
            <Button variant='primary ' type='Submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
