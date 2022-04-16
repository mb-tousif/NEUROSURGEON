import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Header from './components/Header/Header';
import HomeMain from './components/Home/HomeMain';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomeMain/>}/>
        <Route path='/home' element={<HomeMain/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </div>
  );
}

export default App;
