import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import FirstLoad from './components/FirstLoad';

function App() {
  const {
    isLoading,
    isAuthenticated,
    error
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

    return (
      <Router>
        <Routes>
          {!isAuthenticated && <Route path="/" element={<FirstLoad />} />}
          {isAuthenticated && <Route path="/" element={<Profile />} />}
        </Routes>
      </Router>
    );
  
}

export default App;