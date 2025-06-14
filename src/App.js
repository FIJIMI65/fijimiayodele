import './App.css';
import './css/styles.css';
import './css/bootstrap.css';
import { Index } from './components/Index';
import { useSetHeadTag } from './hooks/useSetHeadTag';
import FijimiSchema from './schemas/fijimiSchema';

function App() {
  useSetHeadTag();
  return (
    <>
      <FijimiSchema />
      <Index />
    </>
  );
}

export default App;
