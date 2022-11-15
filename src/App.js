import {HomePage} from './components/HomePage';
import {Places} from './components/Places';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
        <BrowserRouter>
          <Routes >
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/places" exact element={<Places />}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
