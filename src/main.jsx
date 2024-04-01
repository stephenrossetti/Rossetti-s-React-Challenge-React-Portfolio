// Import ReactDOM //
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior //
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Include bootstrap used in css and index.css //
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views //
import App from './App';
import ErrorPage from './pages/error';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import PortfolioPage from './pages/portfolio';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';

// Define the accessible routes, and which components respond to which URL //
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

// Render the RouterProvider component //
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);