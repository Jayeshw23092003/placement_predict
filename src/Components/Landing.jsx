import React from 'react'
import Features from './Features'
import Footer from './Footer'
import Hero from './Hero'
import Header from './Header'
import Steps from './Steps'
import ResponsiveAppBar from './AppBar'
function Landing() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Hero></Hero>
      <Features></Features>
      <Steps></Steps>
      <Footer></Footer>
    </div>
  )
}

export default Landing
