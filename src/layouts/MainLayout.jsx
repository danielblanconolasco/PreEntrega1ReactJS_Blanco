import React, { children } from 'react'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import FooterComponent from '../components/FooterComponent/FooterComponent'

const MainLayout = ({children}) => {
  return (
    <div>
        <div>
        <NavBarComponent/>
        </div>
        <div>
            {children}
        </div>
        <FooterComponent />
    </div>
  )
}

export default MainLayout