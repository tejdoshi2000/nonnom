import React, { useState } from 'react'

const UserFunc = (props) => {

    const [count] = useState(0);
  return (
    <div className='user-card'>
        <div>
      <p>Count: {count}</p>      
      <p>  {props.name} </p>
      <p> {props.location}</p>
        </div>
        
        </div>
    
  )
}

export default UserFunc;   