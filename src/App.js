 
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Cart  from './components/pages/Cart';
import Shop from './components/pages/Shop';
import ShopCategory from './components/pages/ShopCategory';
import Product from './components/pages/Product';
import LoginSignup from './components/pages/LoginSignup';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kid_banner from './components/Assests/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product />}>
           <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>


      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
