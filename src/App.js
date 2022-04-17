import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeMain from './components/Home/HomeMain';
import PageNotFound from './components/page-404/PageNotFound';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut/>
          </RequiredAuth>
          }
        />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
