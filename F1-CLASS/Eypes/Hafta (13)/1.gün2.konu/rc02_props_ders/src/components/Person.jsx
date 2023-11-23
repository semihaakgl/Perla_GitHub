import React from 'react'
import Msg from './Msg'

const Person = ({name,img,tel}) => {
  return (
    <div>
        {/* <p> hi My name is {name}</p> */}
        <Msg isim={name} />
        <img src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person