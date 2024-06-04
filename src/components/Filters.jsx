import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { useAppContext } from './useAppContext';

const Filters = () => {
  const { filtersOpened, setFiltersOpened } = useAppContext();

  const handlerFiltersOpened = () => {
    setFiltersOpened(!filtersOpened);
  };

  return (
    <div className='flex flex-1 md:justify-end gap-6 h-fit'>
      <button
        onClick={handlerFiltersOpened}
        role='opens search filters'
        className='px-6 py-3 border border-gray-100
      bg-white rounded-lg flex gap-2 max-md:w-full'
      >
        <AdjustmentsHorizontalIcon className='h-6' /> Filters
      </button>
      <select
        name='time'
        id=''
        className='block border px-6 py-3 rounded-lg border-gray-100 max-md:w-full'
      >
        <option value='newest'>Newest</option>
        <option value='oldest'>Oldest</option>
        <option value='oldest'>Desc</option>
        <option value='oldest'>Asc</option>
      </select>
    </div>
  );
};
export default Filters;
