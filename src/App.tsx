import { ReactElement } from 'react';
import { Home } from './pages/Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Signup } from './pages/Signup/signup';


export const DGAViagensApp = (): ReactElement => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Signup/>} />
      </Routes>
    </Router>
  )
}