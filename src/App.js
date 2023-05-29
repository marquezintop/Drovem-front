import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './style/pages/ProfilePage';
import Projects from './style/pages/ProjectsPage';
import Classes from './style/pages/ClassesPage';
import Register from './style/pages/RegisterPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Register/>} />
        <Route path="/turmas" element={<Classes/>} />
        <Route path="/projetos" element={<Projects/>} />
        <Route path="/perfil" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
