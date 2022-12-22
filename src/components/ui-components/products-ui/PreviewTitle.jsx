import React from 'react'

export default function PreviewTitle({productTitle, productPrice}) {
  return (
    <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg'>{productTitle}</p>
        <p className='bg-uranian-blue py-1 px-2 rounded-lg font-semibold text-black'>${productPrice}</p>
    </div>
  )
}
