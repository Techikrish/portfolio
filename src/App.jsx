import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dock from './components/Dock';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllBlogs from './pages/AllBlogs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<AllBlogs />} />
        </Routes>
        <Footer />
        <Dock />
      </Layout>
    </Router>
  );
}

export default App;
