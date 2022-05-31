
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { PublicRoutes } from './Routes/PublicRoutes';

function App() {
  return (
    <div className=''>
     <Navbar>
      <Routes>
      {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
      </Routes>
     </Navbar>
    </div>
  );
}

export default App;
