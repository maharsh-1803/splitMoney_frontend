import axios from 'axios';
import { useState, useEffect } from 'react';

const MyGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/api/Group/getMyGroup', {
          headers: {
            Authorization: token,
          },
        });

        if (response.data.success) {
          setGroups(response.data.groups);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch groups.');
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-6 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">My Groups</h1>
      {groups.length === 0 ? (
        <div className="text-center py-6 text-gray-500">No groups found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div key={group._id} className="p-4 border rounded-lg bg-gray-50 shadow-md hover:bg-gray-100 transition duration-200">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{group.name}</h2>
              <p className="text-sm text-gray-500 mb-2">Type: <span className="font-medium text-gray-600">{group.groupType}</span></p>
              <p className="text-sm font-medium text-gray-600 mb-2">Members:</p>
              <ul className="list-disc list-inside ml-4">
                {group.members.map((member) => (
                  <li key={member._id} className="text-gray-700">{member.username}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGroups;
