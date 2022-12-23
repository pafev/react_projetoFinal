import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import './global.css'
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
      <Footer />
    </ BrowserRouter>
  );
}

export default App;
