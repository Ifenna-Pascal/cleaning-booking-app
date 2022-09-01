import React from 'react'
import Footer from './Footer'

function MainLayout({ children }) {
  return (
    <div className="bg-white">
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout