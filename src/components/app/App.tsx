import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';
import Asteroid from '../asteroid/Asteroid';
import Page404 from '../page404/Page404';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="asteroid" element={<Asteroid />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
