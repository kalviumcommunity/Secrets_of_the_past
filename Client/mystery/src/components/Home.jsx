import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Books from './Books'

function home() {
  return (
    <>
    <Navbar/>
      <Banner />
      <Books/>
    </>
  )
}

export default home