import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <>
        <Navbar />
          <div className="container">
            {
              children
            }
          </div>
        <Footer />
    </>
  )
}

export default Layout