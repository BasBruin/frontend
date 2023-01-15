import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Login';
import User from './components/User';
import Chat  from './Chat';

const App = () => {
  return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<User />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Chat" element={<Chat />} />
         </Routes>
       </BrowserRouter>
  );
}

export default App;
