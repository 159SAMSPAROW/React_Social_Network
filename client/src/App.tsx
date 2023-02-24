import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from './pages/root'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
