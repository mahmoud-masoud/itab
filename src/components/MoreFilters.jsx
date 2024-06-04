import { MinusIcon, XMarkIcon } from '@heroicons/react/16/solid';

const MoreFilters = () => {
  return (
    <div className='mb-16'>
      <form>
        <div className='mb-6 flex flex-col-reverse md:flex-row justify-between gap-10'>
          <div className='flex flex-col'>
            <label className='block mb-4'>Toggle Between</label>
            <div className='flex flex-1 gap-4'>
              <button
                className='text-dark border border-gray-100 
            rounded-lg px-6 py-2 w-full'
              >
                Website
              </button>
              <button className='w-full bg-primary text-white rounded-lg px-6 py-2 font-medium'>
                Topic
              </button>
            </div>
          </div>
          <div className='flex gap-4 md:gap-10'>
            <div className='max-md:w-full'>
              <label htmlFor='status' className='mb-4 block'>
                Status
              </label>
              <select
                name='time'
                id='status'
                className='block border px-6 py-3 rounded-lg border-gray-100 w-full'
              >
                <option value=''>Filter Dead & Seen</option>
                <option value='dead-links'>Filter Dead Links</option>
                <option value='seen'>Filter seen Links</option>
              </select>
            </div>
            <div className='max-md:w-full'>
              <label htmlFor='timeframe' className='mb-4 block'>
                Timeframe
              </label>
              <select
                name='time'
                id='timeframe'
                className='block border px-6 py-3 rounded-lg border-gray-100 w-full'
              >
                <option value=''>Select a Time frame</option>
                <option value='today'>today</option>
                <option value='last-week'>last week</option>
                <option value='last-month'>last month</option>
                <option value='last-year'>last year</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <AppliedFilters />
    </div>
  );
};
export default MoreFilters;

const AppliedFilters = () => {
  return (
    <div className='flex gap-4 mt-8 flex-wrap'>
      <AppliedFilterItem />
      <AppliedFilterItem />
      <AppliedFilterItem />
      <AppliedFilterItem />
      <AppliedFilterItem />
      <button className='text-text-color'>Clear filters</button>
    </div>
  );
};

const AppliedFilterItem = () => {
  return (
    <div className=' bg-[#F1F1F1] flex justify-between gap-2 p-1.5 px-2 rounded-full items-center'>
      <button className=''>
        <MinusIcon className='h-6 text-gray-300' />
      </button>
      <span>Content</span>
      <button className='bg-white rounded-full p-0.5'>
        <XMarkIcon className='h-6 text-gray-300' />
      </button>
    </div>
  );
};
