import React from 'react'

export default function ProductImg({img}) {
  return (
    <div className='w-16 h-16'>
        <img className='w-full h-full object-cover rounded-lg' src={img} alt="img" />
    </div>
  )
}
