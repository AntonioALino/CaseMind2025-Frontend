import { LoginPage } from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { HomePage } from './pages/HomePage';
import { PostProvider } from './components/Posts/PostContex';
import { PrivateRoute } from './components/auth/PrivateRoutes';
import { HomeLoginPage } from './pages/HomeLoginPage';
import { CreatePostPage } from './pages/CreatePostPage';
import { ViewMyPosts } from './components/Posts/ViewPost';
import { EditPostPage } from './pages/EditPostPage';
function App() {

  return (
    <PostProvider>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/recover-password' element={<ForgotPasswordPage/>}/>

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/home-login" element={<HomeLoginPage />} />
          <Route path='/create-posts' element={<CreatePostPage/>} />
          <Route path='/edit-post/:id' element={<EditPostPage/>} />
          <Route path="/meus-posts" element={<ViewMyPosts />} />
        </Route>

        </Routes>
      </Router>
    </PostProvider>
  );
}

export default App
