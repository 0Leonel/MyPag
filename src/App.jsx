import { Product } from './core/components/ProductList/Product.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar/Navbar';
import Promesa from './core/components/FetchCall/Promesa';
import { Home } from './core/components/ProductList/Home';
import { Card } from './core/components/Card/Card.jsx';
import { Things } from './core/components/Card/Things.jsx';

export const App = () => (
  <BrowserRouter>
  <>
  <Navbar/>
  
  <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/lamparas' element={<Product> <Card/> </Product>}/>
      <Route path='/Gatitos' element={<Promesa/>}/>
      <Route path='/Cosas' element={<Product> <Things/> </Product>}/>
    </Routes>
  </>
  </BrowserRouter>
)
