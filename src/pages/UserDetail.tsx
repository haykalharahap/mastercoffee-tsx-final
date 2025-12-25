import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserDetail } from "../services/users";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUserDetail(id!).then(res => {
      setUser(res.data.data);
    });
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={user.avatar} className="w-32 rounded-full" />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;
