import React from 'react'
import Footer from './Footer'

function MainLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout