import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchInput = () => {
  return (
    <form className='flex rounded-full relative items-center shadow-sm'>
      <input
        type='text'
        className='w-full px-6 py-3 md:py-4 rounded-full focus:border-hover outline-none
          border-gray-100 border text-xl'
        placeholder='Search'
      />
      <button
        className='bg-primary rounded-full p-1 md:p-2 absolute
         flex justify-center items-center right-2'
      >
        <MagnifyingGlassIcon className='h-8 md:h-9 stroke-white' />
      </button>
    </form>
  );
};
export default SearchInput;
