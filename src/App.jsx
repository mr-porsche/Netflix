import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Player from './pages/Player/Player.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = () => {

  return (
    <>
      <ToastContainer theme='dark' />

      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path='/player/:id'
          element={
            <PrivateRoute>
              <Player />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App;