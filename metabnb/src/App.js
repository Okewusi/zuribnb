import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Places from './components/Places/Places';
import Nav from './components/Nav/Nav';
import Footer2 from './components/Footer2/Footer2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/places' element= { <Places />}/>
      </Routes>
      <Footer2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
