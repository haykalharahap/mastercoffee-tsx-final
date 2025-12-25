import { useState } from "react";
import { loginUser } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(""); // username = email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser(username, password);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "Invalid username or password");
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
        <h1 className="text-xl font-bold mb-4 text-center">
          Login User
        </h1>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 mb-3 text-sm">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Username / Email"
          className="border w-full p-2 mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
