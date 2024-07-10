import axios from "axios";
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error message
    setMessage(''); // Clear any previous success message

    try {
      const response = await axios.post('http://localhost:5000/api/User/login', {
        email,
        password
      });
      console.log('login successfully',response.data)
      
      if (response.status >= 200) {
        setMessage('Login successful');
        navigate('/home')
        localStorage.setItem('token', response.data.token);
      } else {
        throw new Error('Login failed');
      }

    } catch (error) {
      setError('Login failed');
      console.log('Error:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Log in to your account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Dont have an account? 
            <Link to='/signup' className="text-indigo-600 hover:text-indigo-500 font-medium ml-1">
              Sign up
            </Link>
            </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {message && <p className="text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
