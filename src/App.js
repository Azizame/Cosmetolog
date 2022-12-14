import './App.css';

import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Contact from './pages/Contact';
import Number from './pages/Number';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/number' element={<Number />} />
      </Routes>
        
    </div>
  );
}

export default App;
