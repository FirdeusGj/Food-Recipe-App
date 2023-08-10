import './App.css';
import FoodInfo from './components/FoodInfo';
import Main from './components/Main';
import Rows from './components/Rows';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/food' element={<FoodInfo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
