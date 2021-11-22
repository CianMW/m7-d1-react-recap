import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './components/MyNavbar';
import JobSearch from './components/JobSearch';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar/>


      <Routes>
          <Route path='/' element={<JobSearch />} />
          {/* <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='*' element={<h1>404 - Not Found</h1>} /> */}
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
