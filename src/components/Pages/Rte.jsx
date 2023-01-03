import React from 'react'
import { useRef } from 'react';
import Card from '../Card/Card';

const Input = () => {

  const sname= useRef(null)
  const rname= useRef(null)
  const tarea= useRef(null)

  return (
    <>
    <div>Input</div>
    <form action="" className="input__form">
         <label htmlFor="inpit_1">Sender</label>
         <input type="text" ref={sname} id="input_1" placeholder='reciver sender name' className="input__text" />
         <label htmlFor="inpit_1">reciver's </label>
         <input type="text" placeholder='reciver name' ref={rname} className="input__form" />
         <textarea className='input__textarea' name="letter" ref={tarea} id="letter" cols="80" rows="20" draggable></textarea>
     <button className="input__butt" type='submit'>Add Letter</button>
    </form>
    <Card/>
    </>
  )
}

export default Input;