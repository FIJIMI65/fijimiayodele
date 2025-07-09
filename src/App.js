import './App.css';
import './css/styles.css';
import './css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Index } from './components/Index';
import { useSetHeadTag } from './hooks/useSetHeadTag';
import FijimiSchema from './schemas/fijimiSchema';
import { useIsMobile } from './hooks/IsMobile';

function App() {
  useSetHeadTag();
  const isMobile = useIsMobile();
  return (
    <>
      <ToastContainer
      toastClassName="custom_toast"
      position={isMobile?"top-center":"top-right"}
      autoClose={3000} // 3 seconds (you can increase if needed)
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      // rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <FijimiSchema />
      <Index />
    </>
  );
}

export default App;
