import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="sticky-header">
      <div className="container">
        <img src="/logo.png" alt="New York Lore" className="logo" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/submit">Submit</Link>
        </nav>
      </div>
    </header>
  );
}
