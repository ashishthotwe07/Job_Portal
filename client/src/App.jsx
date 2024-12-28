import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'quill/dist/quill.snow.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/AppContext';

const App = () => {

  const { showRecruiterLogin } = useContext(AppContext)
  return (
    <div>
       {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  )
}

export default App