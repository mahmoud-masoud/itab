import ContextProvider from './Context';
import Dashboard from './components/Dashboard';
import Graph from './components/Graph';

const App = () => {
  return (
    <ContextProvider>
      <Dashboard />
    </ContextProvider>
  );
};
export default App;
