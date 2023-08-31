import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginAndRegister from './pages/LoginAndRegister';
import Notes from './pages/Notes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginAndRegister />,
  },
  {
    path: '/notes',
    element: <Notes />,
  },
]);

const App = () => (
  <div className='bg-yellow-100 flex justify-center items-center h-screen'>
    <RouterProvider router={router} />
  </div>
);

export default App;
