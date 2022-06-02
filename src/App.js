
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import { PublicRoutes } from './Routes/PublicRoutes';

function App() {
  return (
    <div className='lg:px-12'>
     <Navbar>
      <Routes>
      {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
      </Routes>
      <Footer/>
     </Navbar>
    </div>
  );
}

export default App;
