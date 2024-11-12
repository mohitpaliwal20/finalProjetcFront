import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Signup from './pages/Signup';
import Service from './pages/Service';
import LoginPage from './pages/Login';
import Cart from './pages/Cart';
import VerifyEmail from "./pages/VerifyEmail"
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

