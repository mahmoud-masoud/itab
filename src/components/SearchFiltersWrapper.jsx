import Filters from './Filters';
import MoreFilters from './MoreFilters';
import SavedSearches from './SavedSearches';
import SearchInput from './SearchInput';
import { useAppContext } from './useAppContext';

const SearchFiltersWrapper = () => {
  const { filtersOpened } = useAppContext();
  return (
    <section>
      <div className='flex flex-col md:flex-row justify-between mb-8 md:mb-16 gap-6'>
        <div className='flex-1'>
          <SearchInput />
          <SavedSearches />
        </div>
        <Filters />
      </div>
      {filtersOpened && <MoreFilters />}
    </section>
  );
};
export default SearchFiltersWrapper;
