import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="ml-sidebar">
      <nav>
        <ul>
          <li><Link to="/">Каталог</Link></li>
          <li><Link to="/favorites">Избранное</Link></li>
          <li><Link to="/history">История</Link></li>
        </ul>
      </nav>
    </aside>
  );
} 