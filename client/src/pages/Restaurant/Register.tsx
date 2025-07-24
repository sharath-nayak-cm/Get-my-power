import React, {useState} from "react"
import { useNavigate,Routes } from "react-router-dom";
import '../../components/Auth.css';
import { useAppDispatch } from '../../store/hooks';
import axios from "axios";


const RegisterUser = () => {
  const [user, setUser] = useState({ username: '', password: '' , email: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
   const [error, setError] = useState('');

  const handlelogin = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser({ username: '', password: '', email: '' });

    try {
        const response = await axios.post('/api/auth/register', {
            username: user.username,
            password: user.password,
            email: user.email
        });
        if(!response.data.success) {
            throw new Error(response.data.message);
        }
        navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    // can you use Auth.css for this page?

    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <p className="register-text">Please fill in the details to register.</p>
        <form onSubmit={handlelogin}>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
            </div>
            <div className="input-group">
                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </div>
            <button type="submit" disabled={loading}>Register</button>
            {loading && <p>Registering in progress...</p>}
        </form>
    </div>
    </div>
    
  );
};
