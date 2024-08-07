import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Paint from './pages/Paint';
import Footer from './components/footer/Footer';
import Amr from './components/AmrAboHassab/Amr';
import PageTop from './components/pageTop/PagTop';
import ConatctCall from './components/contact/ContactCall';
import ConatctWhats from './components/contactWats/ContactWhats';
import NavList from './components/NavLinks/NavM';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      <NavList />
        <ConatctCall />
        <ConatctWhats />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paint" element={<Paint />} />
        </Routes>
        <Footer />
        <Amr />
        <PageTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
  

