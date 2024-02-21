import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/signup' element={<Signup /> } />
      <Route path='/login' element={<Login /> } />
      <Route path='/forgotPassword' element={<ForgotPassword /> } />
      <Route path='/resetPassword/:token' element={<ResetPassword /> } />
      <Route path='/dashboard' element={<Dashboard /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
