import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
            <span className="text-xl font-semibold">UrbanHub</span>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/reports" className="hover:underline">Reportar</Link>
            </div>
        </nav>
    );
}
export default Navbar