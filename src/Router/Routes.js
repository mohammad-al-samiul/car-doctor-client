import Main from '../Layout/Main';
import About from '../Pages/Home/About/About';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Home/Services/Services';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      }
    ]
  }
]);

export default router;
