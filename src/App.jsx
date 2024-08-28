import { useState } from 'react'

import './App.css'
import Homepage from './components/Page/Homepage/Homepage'
import Work from './components/Card/Work'
import SampleBooks from './components/Card/SampleBooks'
import Update from './components/Card/Update'
import Footer from './components/Footer/Footer'
import Video from './components/Card/video'
import Roadmap from './components/Card/Roadmap'
import UsersSay from './components/Card/UsersSay'
import AppRoutes from './components/Routes/Routes'

function App() {


  return (
    <>
    <Homepage />
    <SampleBooks />
    <Work />
    <Video />
    <Roadmap />
    <UsersSay />
    <Update />
    <Footer />
    <AppRoutes />
    </>
  )
}

export default App
