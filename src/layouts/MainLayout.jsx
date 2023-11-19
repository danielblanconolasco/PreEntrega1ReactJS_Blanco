import React, { children } from 'react'
import FooterComponent from '../components/FooterComponent/FooterComponent'

const MainLayout = ({children}) => {
  return (
    <div>
      <div>
          {children}
      </div>
      <FooterComponent />
    </div>
  )
}

export default MainLayout