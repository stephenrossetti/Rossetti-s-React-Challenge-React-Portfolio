// Bringing in the required import from 'react-router-dom' //
// Outlet acts as a conditional input depending on URL //
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
