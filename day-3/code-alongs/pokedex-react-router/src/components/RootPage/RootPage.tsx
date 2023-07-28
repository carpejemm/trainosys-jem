import { Link, Outlet } from 'react-router-dom';
import './rootpage.css';

const RootPage: React.FC = () => {
  return (
    <header className='m-container'>
      <h2 className='title'>
        <Link to="/">Pokedex</Link></h2>
      <div className='button-container'>
        <p className='load'> 
          <Link to="/all">All Pokemons</Link>
        </p>
        <p className='filter'> 
          <Link to="/home">Home</Link>
        </p>
        <p className='load'> 
          <Link to="/about">About</Link>
        </p>
        <p className='filter'> 
          <Link to="/profile">Profile</Link>
        </p>
      </div>
      <main>
        <Outlet />
      </main>
    </header>
  );
};

export default RootPage;