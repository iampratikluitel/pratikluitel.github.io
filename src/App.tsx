import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index.tsx'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App 