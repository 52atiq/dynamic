
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigate/Navbar';
import Admin from './components/pages/Admin';
import Blog from './components/pages/Blog';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Tab from './components/pages/Tab';
import UserDetails from './components/pages/UserDetails';
import Users from './components/pages/Users';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:atiqk' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/tab' element={<Tab />} />
      <Route path='users' element={<Users />} >
      <Route path=':userId' element={<UserDetails />} />
      <Route path='admin'  element={<Admin />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
     
    </>
  );
}

export default App;
