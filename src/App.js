import './App.css';
import './css/styles.css';
import './css/bootstrap.css';
import { Index } from './components/Index';
import { useSetHeadTag } from './hooks/useSetHeadTag';

function App() {
  useSetHeadTag();
  return (
    <>
      <Index />
    </>
  );
}

export default App;
