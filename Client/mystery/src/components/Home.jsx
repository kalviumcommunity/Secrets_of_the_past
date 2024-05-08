import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Books from './Books'
import Section from './Section'
import ThreeCards from './threecards'

function home() {
  return (
    <>
    <Navbar/>
      <Banner />
      <Books/>
      <Section />
      <ThreeCards/>
    </>
  )
}

export default home