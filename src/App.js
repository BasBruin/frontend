import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Login';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
