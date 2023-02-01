import React, { Component } from 'react'
import { SendOutlined  } from '@ant-design/icons';
export default class Footer extends Component {
  render() {
    return (
      <footer>
            <h1 className=''>All rights defended</h1>
            <SendOutlined style={{color:'blue', fontSize:'45px'}}/>
      </footer>
    )
  }
}
