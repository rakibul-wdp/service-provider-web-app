import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
