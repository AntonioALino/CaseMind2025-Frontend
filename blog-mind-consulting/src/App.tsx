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
import { ListViewPostsLoginPage } from './pages/ListViewOfPost';
import { ListViewPostsLogoutPage } from './pages/ListOfViewPostsLogout';
import { ViewPost } from './pages/ViewPost';
import { ViewPostLogout } from './pages/ViewPostLogout';
import { PerfilPage } from './pages/PerfilPage';
function App() {

  return (
    <PostProvider>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/recover-password' element={<ForgotPasswordPage/>}/>
        <Route path='/view-posts-logout' element={<ListViewPostsLogoutPage/>}/>
        <Route path='/posts/:slug' element={<ViewPostLogout/>}/>
        

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/home-login" element={<HomeLoginPage />} />
          <Route path='/create-posts' element={<CreatePostPage/>} />
          <Route path='/edit-post/:id' element={<EditPostPage/>} />
          <Route path="/meus-posts" element={<ViewMyPosts />} />
          <Route path="/view-posts" element={<ListViewPostsLoginPage/>} />
          <Route path='/posts/login/:slug' element={<ViewPost/>}/>
          <Route path='/profile/:id' element={<PerfilPage/>}/>
        </Route>

        </Routes>
      </Router>
    </PostProvider>
  );
}

export default App
