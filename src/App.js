import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import { UserProvider } from './context/useUserContext';
import './global.css'
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <MyRoutes />
      </UserProvider>
      <Footer />
    </ BrowserRouter>
  );
}

export default App;
