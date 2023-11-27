import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Footer from './componenets/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
