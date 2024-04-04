import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>Oops! Something went wrong unexpectedly
        <h2>{err.error.message}</h2>
        <h3>{err.error.status}</h3>    
    </div>

  )
}

export default Error