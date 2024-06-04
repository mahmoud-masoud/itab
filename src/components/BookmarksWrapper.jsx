import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import {
  FolderPlusIcon,
  Squares2X2Icon as SquaresFill,
} from '@heroicons/react/24/solid';

import { useState } from 'react';
import RowIcon from '../assets/RowIcon';
import BookmarkCard from './BookmarkCard';

const BookmarksWrapper = () => {
  const [view, setView] = useState('grid');
  return (
    <section>
      <div className='flex justify-between mb-2'>
        <div>
          <button className='flex gap-2 items-center justify-center font-medium text-text-color '>
            <FolderPlusIcon className='h-8 fill-primary' />
            Save search
          </button>
        </div>
        <BookmarksViewControl view={view} setView={setView} />
      </div>

      <div
        className={`grid gap-6 gap-y-10 ${
          view === 'grid' && 'md:grid-cols-2 lg:grid-cols-3'
        } pb-20`}
      >
        <BookmarkCard variant={view} />
        <BookmarkCard variant={view} />
        <BookmarkCard variant={view} />
        <BookmarkCard variant={view} />
        <BookmarkCard variant={view} />
        <BookmarkCard variant={view} />
        <BookmarkCard variant={view} />
      </div>
    </section>
  );
};
export default BookmarksWrapper;

const BookmarksViewControl = ({ view, setView }) => {
  return (
    <div className='flex justify-end mb-4'>
      <div className='flex gap-2'>
        <button onClick={() => setView('list')}>
          {view === 'list' ? (
            <ListBulletIcon className='h-8 text-hover stroke-2' />
          ) : (
            <ListBulletIcon className='h-8' />
          )}
        </button>
        <button onClick={() => setView('row')}>
          {view === 'row' ? (
            <RowIcon className={'fill-hover stroke-hover'} />
          ) : (
            <RowIcon />
          )}
        </button>
        <button onClick={() => setView('grid')}>
          {view === 'grid' ? (
            <SquaresFill className='h-8 text-hover' />
          ) : (
            <Squares2X2Icon className='h-8' />
          )}
        </button>
      </div>
    </div>
  );
};
