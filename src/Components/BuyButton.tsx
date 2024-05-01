// BuyButton.tsx
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

interface BuyButtonProps {
  onClick: (event: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const StyledButton = styled(Button)(({ style }: BuyButtonProps) => ({
  ...style,
  color: '#ad1090',
  backgroundColor: '#e6dc2e',
  boxShadow: '1px 1px 15px 5px rgba(0, 0, 0, 0.5)',
  borderRadius: '25px',
  fontFamily: 'BlinkMacSystemFont',
  textShadow: '4px 1px 1px rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: '#e6dc2e',
  },
}));

const BuyButton: React.FC<BuyButtonProps> = ({ onClick, style, children = 'BUY NOW!' }) => (
  <StyledButton variant="contained" onClick={onClick} style={style}>{children}</StyledButton>
);

export default BuyButton;