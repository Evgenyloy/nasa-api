import { useGetAsteroidsDataQuery } from '../../api/apiSlice';
import Header from '../header/Header';
import Main from '../main/Main';
import './app.scss';

function App() {
  const {
    data: asteroids,
    isError,
    isFetching,
    isSuccess,
    isLoading,
  } = useGetAsteroidsDataQuery('');

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
