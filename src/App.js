import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import cart from './components/Cart/cart';
import Products from './components/Products/Products';
import CartDetail from './components/CartDetail/CartDetail';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/Products" Component={Products} />
      <Route path="/Cart" Component={cart} />
      <Route path="/Products/:id" Component={CartDetail} />
    </Routes>
    </>
  );
}

export default App;
