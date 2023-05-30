import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateName } from './nameSlice'
import Select from 'react-select'
let M;
let tags = [
  {
    "name": "Important",
    "id": 1
  },
  {
    "name": "Work",
    "id": 2
  },
  {
    "name": "Personal",
    "id": 3
  }
]
const App = () => {
  let fullname = useSelector((state) => state.personName)
  let dispatch = useDispatch()
  function submitForm(e) {
    e.preventDefault();
    console.log(e.target[0].value)
    dispatch(updateName(e.target[0].value))
  }
  return (
    <div>
      {console.log(fullname)}
      <form onSubmit={submitForm}>
        <input type='text' name="" id=""></input>
        <button type='submit'>Submit</button>
      </form>
      <label>{fullname}</label>



    </div>
  )
}

export default App
// condition ? trueCode : falseCode
// 