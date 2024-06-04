import { useContext } from 'react';
import { Context } from '../Context';

export const useAppContext = () => {
  const { filtersOpened, setFiltersOpened, sidebarOpened, setSidebarOpened } =
    useContext(Context);

  return { filtersOpened, setFiltersOpened, sidebarOpened, setSidebarOpened };
};
