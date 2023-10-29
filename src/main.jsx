import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Product } from './core/components/ProductList/Product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Product/>
  </React.StrictMode>,
)
