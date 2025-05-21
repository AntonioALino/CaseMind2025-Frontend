import { LoginPage } from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/recover-password' element={<ForgotPasswordPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
