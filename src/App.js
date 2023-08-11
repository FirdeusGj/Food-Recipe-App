import './App.css';
import FoodInfo from './components/FoodInfo';
import FoodSearch from './components/FoodSearch';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/food/:id' element={<FoodInfo/>}/>
          <Route path='/food' element={<FoodSearch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
