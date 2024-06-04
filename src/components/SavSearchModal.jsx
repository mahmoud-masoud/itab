import CloseButton from './CloseButton';

const SavSearchModal = () => {
  return (
    <div
      className='max-w-full w-[500px] rounded-2xl p-8 mt-20 mx-20
     border border-primary-50 shadow-xl relative'
    >
      <div className='flex flex-col gap-4 mb-8'>
        <h4 className='text-4xl text-primary font-medium'>Save Search</h4>
        <p className='font-medium text-dark'>
          Save search for easy access in future
        </p>
      </div>
      <form>
        <div className='flex flex-col gap-6'>
          <input
            type='text'
            placeholder='Enter the name'
            className='border border-gray-300 rounded-lg p-4 w-full'
          />

          <button className='p-4 w-full bg-primary hover:bg-hover duration-200 font-medium text-white text-lg rounded-lg'>
            Save
          </button>
        </div>
      </form>

      <div className='absolute right-5 top-5'>
        <CloseButton />
      </div>
    </div>
  );
};
export default SavSearchModal;
