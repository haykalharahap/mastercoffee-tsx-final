import { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(email, password);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.error || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffe03b]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded w-80 shadow"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Register</h1>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 mb-3 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white w-full py-2"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        <p className="text-sm mt-3 text-center">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
