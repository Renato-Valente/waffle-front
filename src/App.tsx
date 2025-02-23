import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Teste from './pages/Teste'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Teste />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>

    </BrowserRouter>

    
    
  )
}

export default App
