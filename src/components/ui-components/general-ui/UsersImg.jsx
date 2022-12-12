import React from 'react'

export default function UsersImg({userImg}) {
  return (
    <div className="w-16 h-16 rounded-full">
    <img
      src={userImg}
      alt="Profile Image"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
  )
}
