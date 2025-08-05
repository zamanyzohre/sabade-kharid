import { useState } from 'react'
import {Route,Routes,BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import store from './redux/store'
import {Provider} from 'react-redux'
import ShopingCart from './pages/ShopingCart'
function App() {

  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Header />
    <div className="container mt-5">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<ShopingCart/>} />
    </Routes>
    </div>
    </Provider>
    </BrowserRouter>
    </>
  )
}

export default App
