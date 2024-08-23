import { Route, Routes } from "react-router-dom";
import './App.css';
import Create from './Components/Create';
import Read from "./Components/Read";
import Update from "./Components/Update";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      {/* <Create/> */}
      <Routes>
        <Route index element={<Create />}/> 
        <Route path="/read" element={<Read/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
