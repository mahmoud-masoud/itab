import {
  RectangleGroupIcon,
  RectangleStackIcon,
  HeartIcon,
  FolderIcon,
  TrashIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';

import {
  RectangleGroupIcon as RectangleGroupFilled,
  RectangleStackIcon as RectangleStackFilled,
  HeartIcon as HeartFilled,
  ClockIcon as ClockFilled,
  FolderIcon as FolderFilled,
  TrashIcon as TrashFilled,
} from '@heroicons/react/24/solid';

import { useAppContext } from './useAppContext';
import { twMerge } from 'tailwind-merge';

const Sidebar = ({ hideOnMobile }) => {
  const { sidebarOpened, setSidebarOpened } = useAppContext();

  const handleOpen = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <aside
      className={twMerge(
        `absolute top-full hidden lg:block`,
        hideOnMobile && 'block'
      )}
    >
      <div
        className={twMerge(
          `h-[calc(100vh-72px)] transition-all`,
          sidebarOpened ? 'w-[300px]' : 'w-[100px]'
        )}
      >
        <div
          className='h-full w-full border border-gray-100 shadow-sm bg-white
         relative p-4'
        >
          <button
            onClick={handleOpen}
            role='close sidebar'
            className='rounded-full border-gray-100  border p-3 absolute right-4 hover:border-gray-300'
          >
            <ChevronLeftIcon
              className={`h-5 stroke-[3px] text-primary transition-all duration-300 ${
                sidebarOpened ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </button>

          <div className='flex flex-col justify-between h-full'>
            <div className='pt-20 flex flex-col gap-4'>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
               hover:bg-primary-100'
              >
                <RectangleStackIcon className='h-7' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>All bookmarks</span>
                )}
              </a>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
              hover:bg-primary-100
              '
              >
                <HeartIcon className='h-7' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>Favorites</span>
                )}
              </a>
              <a
                className='flex items-center bg-primary py-2.5 px-4 text-white
                  font-bold tracking-wider rounded-lg gap-4 '
              >
                <ClockFilled className='h-7 fill-secondary' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>History</span>
                )}
              </a>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
               hover:bg-primary-100'
              >
                <FolderIcon className='h-7' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>Archive</span>
                )}
              </a>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
               hover:bg-primary-100'
              >
                <TrashIcon className='h-7' />
                {sidebarOpened && <span className='cursor-pointer'>Trash</span>}
              </a>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
              hover:bg-primary-100
              '
              >
                <RectangleGroupIcon className='h-7' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>Collections</span>
                )}
              </a>
            </div>
            <div className=' flex flex-col gap-4 border-t border-gray-100 pt-4'>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
                 hover:bg-primary-100'
              >
                <Cog6ToothIcon className='h-7' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>Settings</span>
                )}
              </a>
              <a
                className=' flex items-center py-2.5 px-4  rounded-lg gap-4
                hover:bg-primary-100
              '
              >
                <ArrowLeftStartOnRectangleIcon className='h-7' />
                {sidebarOpened && (
                  <span className='cursor-pointer'>Logout</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
