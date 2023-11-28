import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './componenets/Header';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import Videos from './componenets/Videos';
import Upload from './componenets/Upload';
import Login from './componenets/Login';
import Signup from './componenets/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
