import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles({

    titleText: {
        
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        textAlign: "center",
        color: "#216194",
              marginTop: 200,
          },
          textField: {
              width: '416px',
              height: '80px',
              margin: '32px 0 0 0',
          },
          textFieldsignup: {
            width: '640px',
            height: '80px',
            margin: '32px 0 0 0',
            
        },
        textFieldinput:{
            
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  color: "#216194",
        },
        Firstname:{
            width: '304px',
            height: '80px',
  background: "#FFFFFF",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  marginTop: 32,
        },
        Lastname:{
            width: '304px',
            height: '80px',
  background: "#FFFFFF",
  boxShadow: "0px 15px 30px rgba(33, 97, 148, 0.1)",
  borderRadius: "16px",
  marginTop: 32,
  marginLeft: 32,
        },
      
          formButton: {
              background: "#216194",
              borderRadius: "16px",
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              width: '128px',
              height: '42px',
              textAlign: "center",
              color: "#FFFFFF",
             marginTop: '32px',
             textTransform: 'none'
          },
      
          externalLoginButton: {
              backgroundColor: '#f3f8fe',
              borderRadius: '16px',
              width: '240px',
              height: '48px',
              textTransform: 'none',
              color: '#216194',
              marginBottom: '16px'
      
          },
      
          checkBoxControl: {
              margin: '24px 0 0 0',
          },
      
          checkBoxLabel: {
              
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: "#BAB9B9",
              '.MuiFormControlLabel-label': {
                  fontSize: '16px'
              },
          },
          tinyText: {
              fontSize: '11px',
              color: '#969696'
          },
          errorText: {
              
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        alignItems: "center",
        color: "#E58A83",
        marginTop: 8,
          }

});

export default useStyles;