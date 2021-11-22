import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './components/MyNavbar';
import JobSearch from './components/JobSearch';
import CompanyInfo from './components/CompanyInfo';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar/>


      <Routes>
          <Route path='/' element={<JobSearch />} />
          <Route path='/company/:companyId' element={<CompanyInfo />} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
