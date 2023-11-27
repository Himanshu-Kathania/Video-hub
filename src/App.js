import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Header from './componenets/Header.jsx';
import Home from './componenets/Home.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
