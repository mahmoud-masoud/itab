import { createContext, useState } from 'react';

export const Context = createContext({
  filtersOpened: null,
  sidebarOpened: true,
  setSidebarOpened: () => {},
  setFiltersOpened: () => {},
});
const ContextProvider = ({ children }) => {
  const [filtersOpened, setFiltersOpened] = useState(false);
  const [sidebarOpened, setSidebarOpened] = useState(true);

  return (
    <Context.Provider
      value={{
        filtersOpened,
        setFiltersOpened,
        sidebarOpened,
        setSidebarOpened,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
