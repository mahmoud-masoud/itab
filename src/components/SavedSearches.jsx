import { PencilSquareIcon } from '@heroicons/react/24/outline';

const SavedSearches = () => {
  return (
    <div className='flex gap-4 flex-col my-8'>
      <div className='flex items-center gap-2'>
        <label className='font-medium text-dark'>Saved Searches</label>
        <button className='text-primary'>
          <PencilSquareIcon className='h-6' />
        </button>
      </div>
      <div className='flex items-center gap-4 flex-wrap'>
        <SavedSearchItem />
        <SavedSearchItem />
        <SavedSearchItem />
        <SavedSearchItem />
        <SavedSearchItem />
        <SavedSearchItem />
      </div>
    </div>
  );
};
export default SavedSearches;

const SavedSearchItem = () => {
  return (
    <button
      className='max-md:text-sm py-1.5 px-6 rounded-full border border-gray-300
     hover:border-gray-600 duration-200 bg-white'
    >
      content
    </button>
  );
};
