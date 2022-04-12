import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/HomePage/Home/Home';
import DirectDynamicRoutingForDetail from './Pages/DirectDynamicRoutingForDetail/DirectDynamicRoutingForDetail';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="mainApp">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:id" element={<DirectDynamicRoutingForDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
