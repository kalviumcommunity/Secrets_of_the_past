import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Books from '../components/Books'

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