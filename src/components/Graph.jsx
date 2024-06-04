import CloseButton from './CloseButton';
const Graph = () => {
  return (
    <section
      className='h-[calc(100vh-72px)] bg-white border-l border-gray-100 shadow-xl 
    w-[800px] max-w-full fixed bottom-0 right-0 z-[300]'
    >
      <div className='mt-10 ml-10'>
        <CloseButton />
      </div>
      <div className='max-w-full flex justify-center items-center'>
        <img src='/graph.png' alt='' />
      </div>
    </section>
  );
};
export default Graph;
