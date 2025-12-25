import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">MASTER COFFEE</h1>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
