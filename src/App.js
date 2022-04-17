import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeMain from './components/Home/HomeMain';
import SignUp from './components/register/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
