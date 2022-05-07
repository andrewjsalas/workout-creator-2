import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ExerciseSearch from './pages/ExerciseSearch'
import Profile from './pages/Home'
import About from './pages/About'
import MyWhiteBoard from './pages/MyWhiteBoard';


function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home /> }/>
          <Route path='exerciseSearch' element={<ExerciseSearch /> }/>
          <Route path='about' element={<About /> }/>
          <Route path='myWhiteBoard' element={<MyWhiteBoard />} />
          <Route path='profile' element={<Profile /> }/>
        </Routes>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
