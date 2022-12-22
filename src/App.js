import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import './global.css'
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
    </ BrowserRouter>
  );
}

export default App;
