import { ReactElement } from 'react';
import { Home } from './pages/Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const DGAViagensApp = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}