import CartView from './components/CartView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CartView />} path='/' />
          <Route element={<Cart />} path='/cart' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
