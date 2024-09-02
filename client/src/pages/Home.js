import React from 'react'
import AdminLogin from './AdminLogin'
import UserLogin from './UserLogin'

function Home() {
  return (
    <div className='flex justify-center items-center w-screen h-[90vh]'>
      <AdminLogin />
      <UserLogin />
    </div>
    
  )
}

export default Home