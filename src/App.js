import { RouterProvider, Route, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Interface from './pages/Interface';

function App() {
  const router = createBrowserRouter([
    {
      path:"/home",
      element: <Interface />
    },
    {
      path:"/",
      element: <Home />
    }
  ])
  return (
    <div className="App">
      <Navbar />
      
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
