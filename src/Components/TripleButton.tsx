// TripleButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BuyButton from './BuyButton';

const TripleButton: React.FC = () => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.clear();

    navigate('/');
  };
  
  return (
    <>
      <BuyButton 
        onClick={() => navigate('/profile')} 
        style={{ position: 'absolute', top: '630px', left: '300px', backgroundColor: '#2ebbe6', fontSize: '60px', color: 'white' }} 
      >
        Profil!
      </BuyButton>
      <BuyButton 
        onClick={() => navigate('/rolled')} 
        style={{ position: 'absolute', top: '630px', left: '680px', fontSize: '60px', color: 'white' }} 
      >
        Kup następną!
      </BuyButton>
      <BuyButton 
        onClick={() => handleLogout()}
        style={{ position: 'absolute', top: '630px', left: '1300px', backgroundColor: 'gray', fontSize: '60px', color: 'white' }} 
      >
        Wyloguj 
      </BuyButton>
    </>
  );
};

export default TripleButton;