import ContextProvider from './Context';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <ContextProvider>
      <Dashboard />
    </ContextProvider>
  );
};
export default App;
