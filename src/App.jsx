import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Count from './Components/Count/Count'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Primiums from './Components/PrimiumTools/Primiums'
import Cart from './Components/Cart/Cart'
import Tabs from './Components/Tabs/Tabs'

const getPrimium = async () => {
  const res = await fetch("/primium.json");
  return res.json()
}

function App() {

  const [activeTab, setActiveTab] = useState("premiums")
  const [carts, setCarts] = useState([])




  const primiumPromise = getPrimium()

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Count></Count>
      <Tabs></Tabs>

      {/* name of each tab group should be unique */}
      <div className="tabs gap-2 tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 transition-all duration-300 ${activeTab === "premiums" ? "bg-gradient-to-r from-[#513BF9] to-[#9514FA] text-white" : "bg-gray-100"
            }`}
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("premiums")} />

        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 transition-all duration-300 ${activeTab === "cart" ? "bg-gradient-to-r from-[#513BF9] to-[#9514FA] text-white" : "bg-gray-100"
            }`}
          aria-label={carts.length > 0 ? `Cart (${carts.length})` : "Cart"}
          onClick={() => setActiveTab("cart")} />

      </div>

      {activeTab == "premiums" && <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>

        <Primiums primiumPromise={primiumPromise} carts={carts} setCarts={setCarts}></Primiums>

      </Suspense>}

      {activeTab == "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}


      <Footer></Footer>
    </>
  )
}

export default App
