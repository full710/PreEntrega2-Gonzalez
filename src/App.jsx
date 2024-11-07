import './global/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import ItemListContainer from './components/ItemListContainer'
import Contact from './components/Contact'
import Information from './components/Information'
import Products from './components/Products'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './context/CartProvider'
import Cart from './components/Cart'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/Information' element={<Information />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Products' element={<Products />}></Route>
            <Route path='/Products/category/:categoryId' element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
