import BookmarksWrapper from './BookmarksWrapper';
import GraphIntro from './GraphIntro';
import Navbar from './Navbar';
import SearchFiltersWrapper from './SearchFiltersWrapper';
import Welcome from './Welcome';
import Wrapper from './Wrapper';
import { useAppContext } from './useAppContext';

const Dashboard = () => {
  const { sidebarOpened } = useAppContext();

  return (
    <div
      className={
        sidebarOpened ? 'lg:grid grid-cols-open' : 'lg:grid grid-cols-closed'
      }
    >
      <Navbar />
      <main className='bg-slate-50/70 col-start-2'>
        <Wrapper className={'lg:px-10 p-4'}>
          <Welcome />
          <GraphIntro />
          <SearchFiltersWrapper />
          <BookmarksWrapper />
        </Wrapper>
      </main>
    </div>
  );
};
export default Dashboard;
