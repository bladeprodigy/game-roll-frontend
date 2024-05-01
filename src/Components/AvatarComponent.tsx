import Avatar from '@mui/material/Avatar';
import CasinoIcon from '@mui/icons-material/Casino';

const AvatarComponent = () => (
  <Avatar sx={{ m: 10, bgcolor: 'secondary.main', width: 75, height: 75 }}>
    <CasinoIcon fontSize="large" />
  </Avatar>
);

export default AvatarComponent;

