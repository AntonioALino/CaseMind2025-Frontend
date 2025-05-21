import { LoginPage } from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { HomePage } from './pages/HomePage';
import { PostProvider } from './components/Posts/PostContex';
function App() {

  return (
    <PostProvider>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/recover-password' element={<ForgotPasswordPage/>}/>
        </Routes>
      </Router>
    </PostProvider>
  );
}

export default App
