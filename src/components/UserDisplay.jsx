import axios from "axios";
import { useEffect, useState } from "react";

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/User/getAllUser');
        if (response.data.success) {
          setUsers(response.data.users);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDisplay;
