import React from 'react'

const Msg = ({isim}) => {
    // console.log(props)
    // console.log(props.name)
    // const {name,age}=props  //? destructure yaptık. bunu çok kullanıcaz!!!
  return (
    <div>
      {/* <h5>
        Hi, My name is {props.name} i am {props.age} years old
      </h5> */}
      <h5>
        Hi, My name is {isim}
      </h5>
    </div>
  );
}

export default Msg