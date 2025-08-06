import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading user info...</div>;
  }
  
  if (isAuthenticated) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img 
          src={user.picture} 
          alt="Profile" 
          style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%',
            marginBottom: '15px'
          }} 
        />
        <h2 style={{ color: '#1e40af', margin: '10px 0' }}>Welcome {user.name}!</h2>
        <p><strong>Email:</strong> {user.email}</p>
        
        {user.email_verified ? (
          <p style={{color: 'green'}}> Email verified</p>
        ) : (
          <p style={{color: 'red'}}> Please verify your email</p>
        )}
        
        {user.user_metadata && user.user_metadata.country && (
          <p><strong>Location:</strong> {user.user_metadata.country}</p>
        )}
      </div>
    );
  }
  
  return <div>Not logged in</div>;
}

export default Profile;