import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './Login';
import User from './AddUser';
import Chat  from './Chat';
import Update from "./Update";
import Delete from "./Delete";

const App = () => {
  return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<User />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Chat" element={<Chat />} />
           <Route path="/Update" element={<Update />} />
           <Route path="/Delete" element={<Delete />} />
         </Routes>
       </BrowserRouter>
  );
}

export default App;
