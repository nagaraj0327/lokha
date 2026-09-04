import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-[72px] min-h-[70vh] flex items-center bg-paper">
      <div className="container-x text-center py-24">
        <p className="font-display text-8xl text-signal mb-6">404</p>
        <h1 className="font-display text-3xl mb-6">This page hasn't launched yet.</h1>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
