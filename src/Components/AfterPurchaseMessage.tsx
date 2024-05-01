import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AfterPurchaseMessage = () => (
  <>
    <Box 
      style={{ 
        position: 'absolute', 
        top: '180px', 
        left: '395px', 
        backdropFilter: 'blur(5px)', 
        padding: '5px', 
        borderRadius: '5px', 
      }}
    >
      <Typography 
        component="h1" 
        variant="h2" 
        style={{ 
            color: '#ad1090', 
            fontFamily: 'BlinkMacSystemFont', 
            textAlign: 'center', 
            fontWeight: 'bold', 
            textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        Thanks for purchasing on LUCKY GAMES!
      </Typography>
    </Box>
    <Box 
      style={{ 
        position: 'absolute', 
        top: '300px', 
        left: '395px', 
        backdropFilter: 'blur(5px)', 
        padding: '5px', 
        borderRadius: '5px', 
      }}
    >
      <Typography 
        component="h1" 
        variant="body2" 
        style={{ 
            color: '#ffffff', 
            fontFamily: 'BlinkMacSystemFont', 
            textAlign: 'center', 
            textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
            fontSize: '2rem',
        }}
      >
        Check your e-mail adress for key you've just bought!
        
      </Typography>
    </Box>
    <Box 
      style={{ 
        position: 'absolute', 
        top: '345px', 
        left: '395px', 
        backdropFilter: 'blur(5px)', 
        padding: '5px', 
        borderRadius: '5px', 
      }}
    >
      <Typography 
        component="h2" 
        variant="body2" 
        style={{ 
            color: '#ffffff', 
            fontFamily: 'BlinkMacSystemFont', 
            textAlign: 'center', 
            textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
            fontSize: '2rem',
        }}
      >
        All the addicional information are sent to you in the e-mail
        
      </Typography>
    </Box>
    <Box 
      style={{ 
        position: 'absolute', 
        top: '390px', 
        left: '395px', 
        backdropFilter: 'blur(5px)', 
        padding: '5px', 
        borderRadius: '5px', 
      }}
    >
      <Typography 
        component="h2" 
        variant="body2" 
        style={{ 
            color: '#ffffff', 
            fontFamily: 'BlinkMacSystemFont', 
            textAlign: 'center', 
            textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
            fontSize: '2rem',
        }}
      >
        
        In case of any questions, please contact us!
      </Typography>
    </Box>
  </>
);

export default AfterPurchaseMessage;