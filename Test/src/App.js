
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import BookDetails from './components/BookDetails';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
     <Route path="/" element={ <Homepage/>} />
     <Route path="/book/:id/*" element={<BookDetails />} />
     <Route path="/add-review/*" element={<ReviewForm />} />
    </Routes>
    </div>
  );
}

export default App;
