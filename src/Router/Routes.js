import Main from '../Layout/Main';
import About from '../Pages/Home/About/About';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Home/Services/Services';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

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
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }
    ]
  }
]);

export default router;
