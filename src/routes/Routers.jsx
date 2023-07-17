import React from 'react'
import Home from '../pages/Home'
import Company from '../pages/Company'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Policy from '../pages/Policy'

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>

    </Routes>
  )
}

export default Routers