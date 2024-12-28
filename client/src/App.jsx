
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'quill/dist/quill.snow.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  return (
    <div>
      
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  )
}

export default App