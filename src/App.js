import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Login from './compo/Login';
import Signup from './compo/Signup';
function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   </>
  );
}

export default App;
