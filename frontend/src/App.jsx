import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CreateNotePage from './pages/CreateNotePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import {toast} from 'react-hot-toast';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreateNotePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </>
  )
}

export default App
