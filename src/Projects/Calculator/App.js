import React, { useState } from 'react'
import Buttons from './Components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
export default function Calculator() {

  const [total, setTotal] = useState('');
  const handleClick = (e) => {
    setTotal(total.concat(e.target.name));
  }
  const clear = () => {
    setTotal('');
  }
  const handleDelete = () => {
    setTotal(total.slice(0, -1))
  }
  const equal = () => {
    setTotal(eval(total).toString());
  }
  const pow = () => {
    setTotal(total * total)
  }
  return (
    <>
      <div className='calc'>
        <h1 className='main-title'>Calculator</h1>
        <form>
          <input className='nums' type='text' value={total} />

        </form>
        <Buttons name='%' element='%'  onClick={handleClick}/>
        <Buttons name='CE' element='CE' onClick={clear} />
        <Buttons name='pow' element='x2' onClick={pow} />
        <Buttons name='clear' element={<FaArrowAltCircleLeft />} color='warning' onClick={handleDelete} />
        <Buttons name='7' element='7' onClick={handleClick} />
        <Buttons name='8' element='8' onClick={handleClick} />
        <Buttons name='9' element='9' onClick={handleClick} />
        <Buttons name='+' element="+" color='warning' onClick={handleClick} />
        <Buttons name='4' element='4' onClick={handleClick} />
        <Buttons name='5' element='5' onClick={handleClick} />
        <Buttons name='6' element='6' onClick={handleClick} />
        <Buttons name='-' element='-' onClick={handleClick} color='warning' />
        <Buttons name='1' element='1' onClick={handleClick} />
        <Buttons name='2' element='2' onClick={handleClick} />
        <Buttons name='3' element='3' onClick={handleClick} />
        <Buttons name='*' element='x' color='warning' onClick={handleClick} />
        <Buttons name='0' element='0' onClick={handleClick} />
        <Buttons name='.' element='.' onClick={handleClick} />
        <Buttons name='/' element='/' onClick={handleClick} />
        <Buttons name='=' element='=' color='warning' onClick={equal} />
      </div>
      <h1 id='name'>Made by Amanbekov Erlan</h1>
    </>
  )
}


