import React from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3/Section3'
import Footer from './components/Footer'
import QuoteSection from './components/Quote/QuoteSection'
import Restaurants from './components/Restaurants'
function App() {
  return (
    <>
      <Header></Header>
      {/* <Section1></Section1> */}
      {/* <Section2></Section2> */}
      {/* <Section3></Section3> */}
      {/* <QuoteSection /> */}
      <Restaurants />
      <Footer></Footer>
    </>
  )
}

export default App