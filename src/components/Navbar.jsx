import {
  Bars3BottomLeftIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const [hideOnMobile, setHideOnMobile] = useState(false);

  const toggleSidebarVisibility = () => {
    setHideOnMobile(!hideOnMobile);
  };

  return (
    <nav className='col-span-2 sticky top-0 z-50 bg-dark border-b border-slate-200'>
      <div className='flex justify-between items-center py-2 px-4 lg:px-10 max-w-[2400px] mx-auto'>
        <div className='flex gap-4'>
          <button
            className='text-white lg:hidden'
            onClick={toggleSidebarVisibility}
          >
            {hideOnMobile ? (
              <XMarkIcon className='h-7' />
            ) : (
              <Bars3BottomLeftIcon className='h-7' />
            )}
          </button>
          <div>
            <img
              src='/logo.png'
              alt='app logo'
              width={80}
              className='filter brightness-0 invert'
            />
          </div>
        </div>
        <div className='flex justify-center items-center gap-8 '>
          <form>
            <div
              className='bg-hover hover:bg-primary duration-200 
            flex gap-2 px-4 py-2 font-semibold text-white rounded-lg relative'
            >
              <span className='hidden md:block'>Add Bookmarks</span>
              <PlusIcon className='h-7 stroke-2 text-secondary' />
              <input type='file' className='absolute inset-0 opacity-0' />
            </div>
          </form>

          <div className='h-14 w-14 rounded-full bg-lime-500'></div>
        </div>
      </div>
      <Sidebar hideOnMobile={hideOnMobile} />
    </nav>
  );
};
export default Navbar;
