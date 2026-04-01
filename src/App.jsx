import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Count from './Components/Count/Count'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Primiums from './Components/PrimiumTools/Primiums'

const getPrimium = async () => {
  const res = await fetch("/primium.json");
  return res.json()
}


function App() {

  const primiumPromise = getPrimium()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Count></Count>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

        <Primiums primiumPromise={primiumPromise}></Primiums>

      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
