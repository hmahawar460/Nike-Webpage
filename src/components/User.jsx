import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='m-4 text-black text-3xl p-4 text-center'>User Id: {userid}</div>
    </div>
  )
}

export default User