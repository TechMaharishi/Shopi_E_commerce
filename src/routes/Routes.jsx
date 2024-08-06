import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import AllProducts from '../pages/AllProducts';
import MensClothes from '../pages/MensClothes';
import WomensClothes from '../pages/WomensClothes';
import Jewelery from '../pages/Jewelery';
import Electronics from '../pages/Electronics';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import MyOrder from '../pages/MyOrder';
import Signin from '../pages/Singin';
import Signup from '../pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/sign-in/*",
        element: <Signin />
      },
      {
        path: "/sign-up/*",
        element: <Signup />
      },
      {
        path: '/allproducts',
        element: <AllProducts />,
      },
      {
        path: '/mens_clothing',
        element: <MensClothes />,
      },
      {
        path: '/womens_clothing',
        element: <WomensClothes />,
      },
      {
        path: '/jewelery',
        element: <Jewelery />,
      },
      {
        path: '/electronics',
        element: <Electronics />,
      },
      {
        path: '/product_details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/myorder',
        element: <MyOrder />,
      },
    ],
  },
]);

export default router;
