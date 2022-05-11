
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import ProductSingle from './Components/Pages/ProductSingle';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import Dashboard from './Components/Admin/Dashboard';
import Category from './Components/Admin/Category';
import Products from './Components/Admin/Products';
import Tag from './Components/Admin/Tag';
import Dash from './Components/Admin/Dash';
import AddTag from './Components/Admin/AddTag';

function App() {
  return (
    <>
      <Header/>
        <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/shop' element={ <Shop /> } />
        <Route path='/shop/:name' element={ <ProductSingle /> } />
        <Route path='/admin' element={ <Dashboard /> } >
              <Route path='/admin/dashboard' element={ <Dash /> } />
              <Route path='/admin/products' element={ <Products /> } />
              <Route path='/admin/category' element={ <Category /> } />
              <Route path='/admin/tag' element={ <Tag /> } />
              <Route path='/admin/add-tag' element={ <AddTag /> } /> 
          </Route>

        </Routes>
      <Footer/>
    </> 
  );
}

export default App;
