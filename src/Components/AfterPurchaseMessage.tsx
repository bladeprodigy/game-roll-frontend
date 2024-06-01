import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AfterPurchaseMessage = () => (
  <>
    <Box 
      style={{
        display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center',
          justifyContent : 'center',
        backdropFilter: 'blur(5px)', 
        padding: '5px', 
        borderRadius: '5px',
          gap: '40px'
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
        <Typography
            component="h1"
            variant="body2"
            style={{
                color: '#ffffff',
                fontFamily: 'BlinkMacSystemFont',
                textAlign: 'center',
                textShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
                fontSize: '2rem',
                lineHeight: '3rem'

            }}
        >
            Check your e-mail adress for key you have just bought! <br/>
            All the addicional information are sent to you in the e-mail <br/>
            In case of any questions, please contact us! <br/>
        </Typography>
    </Box>
  </>
);

export default AfterPurchaseMessage;