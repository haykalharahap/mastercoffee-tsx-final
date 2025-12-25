import { useEffect, useState } from "react";
import { getUsers } from "../services/users";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(page).then(res => {
      setUsers(res.data.data);
    });
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User List</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {users.map(user => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="border p-4 rounded"
          >
            <img src={user.avatar} className="w-20 rounded-full" />
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
