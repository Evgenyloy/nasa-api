import './page404.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="page-404" style={{ height: '100vh' }}>
      <p>Page doesn't exist</p>
      <Link to="/">Back to main page</Link>
    </div>
  );
};

export default Page404;