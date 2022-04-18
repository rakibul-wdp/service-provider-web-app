import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route
          path='/product/:productId'
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
