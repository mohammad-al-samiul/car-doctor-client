import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Checkout from '../Pages/Checkout/Checkout';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/Home/About/About';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Home/Services/Services';
import Login from '../Pages/Login/Login';
import Orders from '../Pages/Orders/Orders';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

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
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        )
      },
      {
        path: '/blog',
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        )
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
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
