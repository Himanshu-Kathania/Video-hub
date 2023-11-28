import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './componenets/Header';
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import Videos from './componenets/Videos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
