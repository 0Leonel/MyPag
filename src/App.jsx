import { Product } from './core/components/ProductList/Product.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar/Navbar';
import Promesa from './core/components/FetchCall/Promesa';
import { Home } from './core/components/ProductList/Home';
import { Card } from './core/components/Card/Card.jsx';
import { Things } from './core/components/Card/Things.jsx';
import { LAMPARAS_TITLE, COSAS_TITLE } from './core/components/app_text/titles.js';

const App = () => (
  <BrowserRouter>
  <>
  <Navbar/>
  <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/lamparas' element={<Product title={LAMPARAS_TITLE}> <Card/> </Product>}/>
      <Route path='/Gatitos' element={<Promesa/>}/>
      <Route path='/Cosas' element={<Product title={COSAS_TITLE}> <Things/> </Product>}/>
    </Routes>
  </>
  </BrowserRouter>
)

export default App;