import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import { BorderColor } from '@material-ui/icons';

const useStyles = makeStyles({


  dropdownpaper: {
    borderRadius: '16px',
  width: '644px',
  fontFamily: 'Roboto',
  marginTop: -10,
  fontSize: '16px',
  color: '#216194',
  textAlign: 'center',

  '@media(max-Width: 412px)' : {
    width: '16%',
  },
  },


    textField: {
        height: '80px',
        width: '644px',
        borderRadius: '16px',
        boxShadow: '0 15px 30px 0 rgba(33, 97, 148, 0.15)',
        padding: '16px 76px 16px 20px',
        backgroundColor: '#fff',
       
       
        

  '@media only screen and (max-device-width: 900px)' : {
    width: '352px',
  },
        
        
         
        
        
    },
    
    dropdownInput: {
        marginBotton: '16px',
        padding: '0 24px 0 0',
    
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        "& input::placeholder": {
          fontFamily: 'Roboto',
          fontSize: '16px',
          color: '#bab9b9',
          opacity: '1',
      },
    },

    
    MdropdownInput: {
      marginBotton: '16px',
      padding: '0 24px 0 0',
  
      fontFamily: 'Roboto',
      fontSize: '16px',
      color: '#216194',
      "& input::placeholder": {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        opacity: '1',
    },
  },

    noBorder: {
      border: "none",
    },

    dropdownMenuItem: {
        textAlign: 'center',
        fontSize: '16px',
        justifyContent: 'center'
    },

    dropdownMenuList: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        color: '#216194',
        textAlign: 'center',
    },



    dropdownlabel: {
        color: '#216194',
        fontFamily: 'Roboto',
        margin: '19px 0px 43px -19px',
        fontSize: '22px',
        fontWeight: 'bold',
        height: '11px',
        marginTop: 12,
        lineHeight: '0.11',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        transform: 'none',
        transition: 'none',
        
        '&.Mui-focused': {
            color: '#216194',
        },
    },


    helperText: {
      
      margin: '-50px 0px 43px -10px',
      '@media(max-Width: 900px)' : {
       
      margin: '-60px 0px 43px -15px',
      },
    },
    
    cssOutlinedInput: {
        height: '82px',
        margin: '-2px 0px 43px -20px',
        width: '590px',
        
        '&$cssFocused $notchedOutline': {
          borderColor: '#216194',
          '@media(max-Width: 900px)' : {
            width: '60%'
          },
        borderRadius: '16px',
        padding: '16px 76px 16px 20px',
        margin: '-13px 0px 43px 0',
        height: '85px',
        width: '644px',
         
        
        }
      },

      root: {
       
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: '#216194',
        },
        "& .MuiOutlinedInput-input": {
          color: '#216194',
        },
        "&:hover .MuiOutlinedInput-input": {
          color: '#216194'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
          color: '#216194',
        },
       
        
      
      },

      
  cssFocused: {
    
    
   
  },

  paper: {
    borderRadius: '16px',
  width: '644px',
  fontFamily: 'Roboto',
  marginTop: -10,
  fontSize: '16px',
  color: '#216194',
  textAlign: 'center',
  },

  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#fff',
   
    color: 'red',
    '@media(max-Width: 390px)' : {
      width: '21.5%'
    },
    borderRadius: '16px',
    padding: '16px 76px 16px 20px',
    margin: '-14px 0px 43px 0',
    height: '85px',
    width: '644px',
   

  },


    
});

export default useStyles;