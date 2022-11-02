import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default router;
