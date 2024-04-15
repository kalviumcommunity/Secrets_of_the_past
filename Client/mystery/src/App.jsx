import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Incidents from './components/Incidents';
import Fictional from './components/Fictional';
import More from './components/More';
import Images from './components/Image';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import RealForm from './components/RealForm';
import FictionForm from './components/FictionForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/real" element={<Incidents />} />
        <Route path="/fiction" element={<Fictional />} />
        <Route path="/facts" element={<More />} />
        <Route path="/images" element={<Images />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-real" element={<RealForm />} />
        <Route path="/add-fictional" element={<FictionForm/>} />
      </Routes>
    </>
  );
}

export default App;
