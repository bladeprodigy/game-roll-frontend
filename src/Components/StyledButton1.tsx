import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton1 = styled(Button)(({
    position: 'absolute',
    bottom: '10px',
    left: '75%',
    transform: 'translateX(-50%)',
    width: '150px',
    height: '60px',
    fontSize: '22px',
    color: '#861884',
    backgroundColor: '#e6dc2e',
    boxShadow: '1px 1px 15px 5px rgba(0, 0, 0, 0.5)',
    borderRadius: '25px', 
    fontFamily: 'BlinkMacSystemFont',        
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: '#e6dc2e',
    },
  }));

  export default StyledButton1;