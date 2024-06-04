import { XMarkIcon } from '@heroicons/react/16/solid';

const CloseButton = () => {
  return (
    <button className='p-2 rounded-full border border-gray-100 hover:border-gray-300'>
      <XMarkIcon className='h-7 text-gray-600' />
    </button>
  );
};
export default CloseButton;
