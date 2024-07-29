import { BrowserRouter, Routes, Navigate, Route, Link } from 'react-router-dom';
import PublicLayout from '../components/layout/public/PublicLayout';
import Login from '../components/users/Login';
import Register from '../components/users/Register';
import PrivateLayout from '../components/layout/private/PrivateLayout';
import Feed from '../components/publications/Feed';

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <PublicLayout />  } >
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>

            <Route path='/social/' element={ <PrivateLayout /> }  >
                <Route index element={ <Feed /> } />
                <Route path='feed' element={ <Feed /> } />
            </Route>

            <Route path='*' element={
              <>
                <div>
                  <h1>Error 404</h1>
                  <Link to="/">Volver a Inicio</Link>
                </div>
              </>
            } />

        </Routes>
    </BrowserRouter>
  )
}

export default Routing
