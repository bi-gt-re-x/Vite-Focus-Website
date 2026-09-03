import DecksPage from './pages/DecksPage.jsx'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route index element={<DecksPage />} />
    </Routes>
  )
}
