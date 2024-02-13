import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'

// components
import ProductsPage from './pages/ProductsPage';
import CheckOutPage from './pages/CheckOutPage';
import DetailsPage from './pages/DetailsPage';
import NotFound from './pages/NotFound';
import Layout from './layout/Layout';


// context
import ProductsProvider from './context/ProductContext';
import CartProvider from './context/CartContext';



function App() {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <Layout>

            <Routes>
              <Route index element={<Navigate to='/products' replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </>
  )
}

export default App;