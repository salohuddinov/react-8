import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom"

import Home from './pages/home/Home';
import SingleProduct from './pages/single-product/SingleProduct';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Auth from './pages/auth/Auth';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Auth />}>
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
