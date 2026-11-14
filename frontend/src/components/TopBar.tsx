import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="font-bold text-xl tracking-tight">Insurance AI Assistant</div>
      <nav className="flex items-center gap-6">
        <Link to="/" className="text-slate-300 hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/upload" className="text-slate-300 hover:text-white transition-colors">
          Upload
        </Link>
      </nav>
    </header>
  );
}
