import { useNavigate } from 'react-router-dom';

const Home = ({ children }) => {
  const navigate = useNavigate();

  const handleClickUser = () => {
    navigate('/User');
  };
  const handleClickCreateGroup = ()=>{
    navigate('/createGroup')
  }

  return (
    <div className="flex h-screen">
      <div className="bg-sky-600 w-[14vw] h-full fixed flex flex-col items-center py-6">
        <p 
          className="text-white font-bold text-lg mb-4 cursor-pointer hover:bg-blue-700 p-2 rounded"
          onClick={handleClickUser}
        >
          User List
        </p>
        <p 
          className="text-white font-bold text-lg mb-4 cursor-pointer hover:bg-blue-700 p-2 rounded"
          onClick={handleClickCreateGroup}
        >
          Create Group
        </p>
      </div>
      <div className="ml-[14vw] w-full p-6 bg-gray-100 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Home;
