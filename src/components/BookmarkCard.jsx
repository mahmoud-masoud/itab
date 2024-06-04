import {
  BookmarkIcon,
  HeartIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowLongUpIcon,
  ClockIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';

const GridCard = () => {
  return (
    <div
      className='bg-primary-50 rounded-2xl p-4 shadow-md border-white border hover:shadow-xl
    duration-200 shadow-slate-100
    '
    >
      {/* header */}
      <div className='flex items-start justify-between gap-2 mb-6'>
        <div className='h-12 w-12 rounded-full shrink-0'>
          <img
            src='/reddit-logo.png'
            alt='website logo'
            className='max-h-full'
          />
        </div>
        <a href='' className='line-clamp-2 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste
          non animi facilis fugit perferendis, vel
        </a>
        <button
          className='bg-white rounded-full p-3 border border-primary-300
         hover:scale-95 hover:border-gray-300 duration-200'
        >
          <ArrowLongUpIcon className='h-6 rotate-45 stroke-primary' />
        </button>
      </div>

      {/* body */}
      <div className='bg-white rounded-xl p-4 border border-primary-200'>
        {/* date */}
        <div className='flex gap-2 items-center text-sm mb-4'>
          <span>Oct 10</span>
          <div className='flex gap-1 items-center'>
            <ClockIcon className='h-5 fill-hover' />
            <span>15m read time</span>
          </div>
        </div>
        {/* tags */}
        <div className='flex gap-2 flex-wrap'>
          <BookmarkTag />
          <BookmarkTag />
          <BookmarkTag />
        </div>
        {/* image */}
        <div className='h-40 rounded-lg overflow-hidden mt-4'>
          <img
            src='/placeholder.webp'
            alt='bookmark image'
            className='max-h-full w-full object-cover'
          />
        </div>

        {/* divider */}
        <div className='h-[1px] w-full bg-gray-100 my-6'></div>

        {/* buttons */}
        <CardButtons />
      </div>
    </div>
  );
};

const RowCard = () => {
  return (
    <div
      className='bg-primary-50 rounded-2xl p-4 md:p-8 shadow-md border-white border hover:shadow-xl
    duration-200 shadow-slate-100'
    >
      {/* header */}
      <div className='flex items-start justify-between gap-3 mb-4'>
        <div className='h-12 w-12 rounded-full shrink-0'>
          <img
            src='/reddit-logo.png'
            alt='website logo'
            className='max-h-full'
          />
        </div>
        <a href='' className='line-clamp-2 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste
          non animi facilis fugit perferendis, vel
        </a>

        <button
          className='bg-white rounded-full p-3 border border-primary-300
         hover:scale-95 hover:border-gray-300 duration-200'
        >
          <ArrowLongUpIcon className='h-6 md:h-7 rotate-45 stroke-primary' />
        </button>
      </div>

      {/* body */}
      <div className=' bg-white rounded-xl p-4 border border-primary-200'>
        {/* date */}
        <div className='flex gap-2 items-center text-sm mb-4'>
          <span>Oct 10</span>
          <div className='flex gap-1 items-center'>
            <ClockIcon className='h-5 fill-hover' />
            <span>15m read time</span>
          </div>
        </div>

        <div className='flex flex-wrap justify-between gap-6'>
          {/* tags */}
          <div className='flex gap-2 flex-wrap'>
            <BookmarkTag />
            <BookmarkTag />
            <BookmarkTag />
          </div>
          {/* buttons */}
          <CardButtons />
        </div>
      </div>
    </div>
  );
};

const ListCard = () => {
  return (
    <div
      className='bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg
    duration-200'
    >
      <div className='flex items-start justify-between gap-2'>
        <div className='h-12 w-12 rounded-full shrink-0'>
          <img
            src='/reddit-logo.png'
            alt='website logo'
            className='max-h-full'
          />
        </div>
        <a href='' className='line-clamp-2 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste
          non animi facilis fugit perferendis, vel
        </a>
        <button
          className='bg-white rounded-full p-3 border border-primary-300
         hover:scale-95 hover:border-gray-300 duration-200'
        >
          <ArrowLongUpIcon className='h-6 rotate-45 stroke-primary' />
        </button>
      </div>
    </div>
  );
};

const cards = {
  grid: <GridCard />,
  row: <RowCard />,
  list: <ListCard />,
};

const BookmarkCard = ({ variant }) => {
  return cards[variant] || cards.grid;
};

export default BookmarkCard;

const BookmarkTag = () => {
  return (
    <button className='rounded-lg bg-gray-50 border-gray border p-1 px-2 text-sm'>
      # lablablaa
    </button>
  );
};

const CardButtons = () => {
  return (
    <div className='flex justify-between gap-4 max-md:w-full'>
      <button className='rounded-full p-2 border border-slate-300 hover:border-gray-300'>
        <HeartIcon className='h-6 text-slate-500' />
      </button>
      <button className='rounded-full p-2 border border-slate-300 hover:border-gray-300'>
        <SparklesIcon className='h-6 text-hover' />
      </button>
      <button className='rounded-full p-2 border border-slate-300 hover:border-gray-300'>
        <TrashIcon className='h-6 text-slate-500' />
      </button>
      <button className='rounded-full p-2 border border-slate-300 hover:border-gray-300'>
        <BookmarkIcon className='h-6 text-slate-500' />
      </button>
    </div>
  );
};
