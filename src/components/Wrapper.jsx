import { twMerge } from 'tailwind-merge';

const Wrapper = ({ children, className }) => {
  return (
    <div className={twMerge('container mx-auto', className)}>{children}</div>
  );
};
export default Wrapper;
