import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import Quiz from './components/Quiz';
import ErrorPage from './components/Error';

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/quiz' element={<Quiz />}></Route>
          <Route path='/result' element={<Result />}></Route>
          <Route path='/error' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}