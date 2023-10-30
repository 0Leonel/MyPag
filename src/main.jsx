import ReactDOM from 'react-dom/client'
import './index.css'
import { Product } from './core/components/ProductList/Product.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar/Navbar';
import Promesa from './core/components/FetchCall/Promesa';
import { Home } from './core/components/ProductList/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <>
  <Navbar/>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/lamparas' element={<Product/>}/>
      <Route path='/Gatitos' element={<Promesa/>}/>
    </Routes>
  </>
    
  </BrowserRouter>,
)
