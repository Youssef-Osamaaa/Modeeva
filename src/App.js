import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ProductProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </ProductProvider>
  );
}

export default App;