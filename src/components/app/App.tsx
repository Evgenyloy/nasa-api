import { useGetAsteroidsDataQuery } from '../../api/apiSlice';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';
import Asteroid from '../asteroid/Asteroid';
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
      <Router>
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="asteroid" element={<Asteroid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
