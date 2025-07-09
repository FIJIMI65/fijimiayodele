import './App.css';
import './css/styles.css';
import './css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Index } from './components/Index';
import { useSetHeadTag } from './hooks/useSetHeadTag';
import FijimiSchema from './schemas/fijimiSchema';

function App() {
  useSetHeadTag();
  return (
    <>
      <ToastContainer />
      <FijimiSchema />
      <Index />
    </>
  );
}

export default App;
