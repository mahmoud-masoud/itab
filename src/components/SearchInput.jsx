import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchInput = () => {
  return (
    <form className='flex rounded-full relative items-center shadow-sm'>
      <input
        type='text'
        className='w-full px-6 rounded-full focus:border-2 focus:border-hover/50 outline-none
          h-16 border-gray-100 border text-xl'
        placeholder='Search'
      />
      <button
        className='bg-primary rounded-full p-2 absolute
        top-2 right-2.5 h-[50px] w-[50px] flex justify-center items-center'
      >
        <MagnifyingGlassIcon className='h-9 stroke-white' />
      </button>
    </form>
  );
};
export default SearchInput;
