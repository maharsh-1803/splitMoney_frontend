import axios from "axios";
import { useState, useEffect } from "react";

const CreateGroup = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
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

    fetchUsers();
  }, []);

  const handleCheckboxChange = (username) => {
    setSelectedUsernames((prevSelected) =>
      prevSelected.includes(username)
        ? prevSelected.filter((name) => name !== username)
        : [...prevSelected, username]
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/Group/createGroup',
        new URLSearchParams({
          name: groupName,
          groupType: groupType,
          members: selectedUsernames.join(',') 
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      if (response.data.success) {
        alert('Group created successfully!');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create a New Group</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Group Name</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="border border-gray-300 rounded-lg w-full p-2"
          placeholder="Enter group name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Group Type</label>
        <input
          type="text"
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
          className="border border-gray-300 rounded-lg w-full p-2"
          placeholder="Enter group type"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Select Users</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user._id} className="flex items-center space-x-4 p-2 border rounded-lg bg-gray-100">
              <input
                type="checkbox"
                checked={selectedUsernames.includes(user.username)}
                onChange={() => handleCheckboxChange(user.username)}
                className="mr-2"
              />
              <span className="text-gray-800">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Create Group
      </button>
    </div>
  );
};

export default CreateGroup;
