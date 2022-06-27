import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Edit from './pages/Edit';
import Login from './pages/Login';
import { RequiredAuth } from './hoc/RequiredAuth';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      
      <Routes>
        <Route path='/' element={<RequiredAuth><Home/></RequiredAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/todos/:id' element={<Todos/>}></Route>
        <Route path='/todos/:id/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
    </>
    
  );
}

export default App;
