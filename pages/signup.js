import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons'; 

 import useStyles from './Login/Signup-Styles';
import TextInput from '@components/forms/form-components/text-input/text-input';

const SignupPage = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');

  
  const [signUp_type] = useState('');


    const classes = useStyles();
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  function signup()
  {
      console.warn(first_name,last_name,email,dob,password)
  }
  
  const [ keepLoggedIn, setKeepLoggedIn ] = useState(false);
  const handleChangeKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);

    
};

const [ keepLoggedIn1, setKeepLoggedIn1 ] = useState(false);
  const handleChangeKeepLoggedIn1 = () => {
    setKeepLoggedIn1(!keepLoggedIn1);

    
};
const handleSubmit = async (event) => {
  event.preventDefault();

  const signupData = {
    first_name,
    last_name,
    email,
    dob,
    password,
    signUp_type: 1,
  };

  try {
    // Perform user signup
    const signupResponse = await fetch('http://52.66.13.189:8000/kindo/users/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });

    if (signupResponse.ok) {
      console.log('Signup successful');

      // Parse signup response JSON
      const responseData = await signupResponse.json();
      const accessToken = responseData.access_token;

      // Clear form input fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setDateOfBirth('');
      setPassword('');

      // Send confirmation email
      const confirmEmailEndpoint = `http://52.66.13.189:8000/kindo/users/verify-email/?uid=MjY&token=bpzhct-7b08d2400e408db7209fe8b0276cfe8f`;
      const confirmEmailResponse = await fetch(confirmEmailEndpoint, {
        method: 'GET',
      });

      if (confirmEmailResponse.ok) {
        console.log('Confirmation email sent');
        
        // Fetch JWT access token
    
const accessTokenPayload = {
  email,
  password
};

const accessTokenResponse = await fetch('http://52.66.13.189:8000/kindo/users/access-token/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(accessTokenPayload)
});

if (accessTokenResponse.ok) {
  const accessTokenData = await accessTokenResponse.json();
  const jwtAccessToken = accessTokenData.jwt_access_token;
  console.log('JWT Access Token:', jwtAccessToken);
} else {
  console.log('Failed to fetch JWT access token');
  // Handle access token fetching error
  // ...
}
      } else {
        console.log('Failed to send confirmation email');
        // Handle the email sending error
        // ...
      }
    } else {
      console.log('Signup failed');
      // Handle the signup error
      // ...
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle any other errors
    // ...
  }
};


  






  const [ showPassword, setShowPassword ] = useState(false);
  
  const handleChangeShowPassword = () => {
    setShowPassword(!showPassword);
};

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography className={classes.titleText} align="center" gutterBottom>
        Begin your journey of health now!
        </Typography>
        <Grid container spacing={2} justifyContent='center' style={{marginTop: 64}}>
        <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple={true}
                                            checked={keepLoggedIn}
                                            onChange={handleChangeKeepLoggedIn}
                                            name='keep-logged-in-checkbox'
                                            style={{
                                                color: '#216194'
                                            }}
                                        />
                                    }
                                    label='Individual account'
                                    classes={{label: classes.checkBoxLabel}}
                                    className={classes.checkBoxControl}

                                />
                                 <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple={true}
                                            checked={keepLoggedIn1}
                                            onChange={handleChangeKeepLoggedIn1}
                                            name='keep-logged-in-checkbox'
                                            style={{
                                                color: '#216194'
                                            }}
                                        />
                                    }
                                    label='Business account '
                                    classes={{label: classes.checkBoxLabel}}
                                    className={classes.checkBoxControl}

                                />
                                
          
          <Grid item xs={12}>
            <TextField
            className={classes.textFieldsignup}
            InputLabelProps={{
                         shrink: true,                                        
                         className: classes.textFieldLabel,
                            }}
                         InputProps={{
                         disableUnderline: true,
                         notched: false,}}            
                         inputProps={{
                         className: classes.Inputnew
                         }}
              label="Email"
              placeholder='e.g. alexwong@kinhealthcare.co'
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
             label='First name'
             InputLabelProps={{
             shrink: true,                                        
             className: classes.textFieldLabel,
                }}
             InputProps={{
             disableUnderline: true,
             notched: false,}}            
             inputProps={{
             className: classes.Inputnew
             }}
             placeholder='e.g. Alex'
              className={classes.Firstname}
              value={first_name}
              onChange={handleFirstNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
className={classes.Lastname}
InputLabelProps={{
             shrink: true,                                        
             className: classes.textFieldLabel,
                }}
             InputProps={{
             disableUnderline: true,
             notched: false,}}            
             inputProps={{
             className: classes.Inputnew
             }}
placeholder='e.g. Wong'
              value={last_name}
              onChange={handleLastNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,                                        
                className: classes.textFieldLabel,
                   }}
                InputProps={{
                disableUnderline: true,
                notched: false,}}            
                inputProps={{
                className: classes.Inputnew1
                }}
              className={classes.Inputbox3}
              value={dob}
              placeholder='e.g. 20/12/1993'
              onChange={handleDateOfBirthChange}
             
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              
            className={classes.textFieldsignup}
            InputLabelProps={{
                         shrink: true,                                        
                         className: classes.textFieldLabel,
                            }}
                         InputProps={{
                         disableUnderline: true,
                         notched: false,}}            
                         inputProps={{
                         className: classes.Inputnew
                         }}
                         placeholder='at least 8 characters '
              value={password}
              onChange={handlePasswordChange}
            />
                                   <FormControlLabel
                  control={
                    <Checkbox
                      disableRipple={true}
                      checked={!showPassword}
                      onChange={handleChangeShowPassword}
                      name='show-password-checkbox'
                   
                      icon={<Visibility />} // Eye icon when password is hidden
                      checkedIcon={<VisibilityOff />} // Eye icon when password is shown
                    />
                  }
                  classes={{ label: classes.checkBoxLabel }}
                  className={classes.checkBoxControl2}
                />
          </Grid>
          <Grid item container justifyContent='center' xs={12}>
            <Button type="submit" variant="contained" className={classes.formButton}  onClick={signup}> 
              Signup
            </Button>
          </Grid>
          
          <Typography style={{marginTop: 42}}>Or</Typography>
          <Grid item container  xs={12} style={{marginTop: 56.5}}>
                    <Button  className={classes.externalLoginButton} onClick={() => window.location.href = googleLoginUrl}>
                    Sign up with Google
          </Button>

                    </Grid>
                    <Grid item container style={{marginTop: 32}} >
             
                    <Button className={classes.externalLoginButton} onClick={() => window.location.href = facebookLoginUrl}>
                    Sign up with Facebook
</Button>

                    </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignupPage;

// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { Grid, Typography, TextField, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import '@fontsource/roboto';
// import TextInput from './form-components/text-input/text-input';
// import { Login } from '@utils/axios';
// import { useRouter } from 'next/router';
// import useStyles from './Login/Signup-Styles';
// import DateInput from '@components/forms/form-components/date-picker/Signup-dob';
// import { Visibility, VisibilityOff } from '@material-ui/icons';

// const SignupForm = ({formMethods}) => {
//   const { handleSubmit, control, formState: { errors } } = useForm({
//     mode: 'onTouched',
//     reValidateMode: 'onChange',
//     criteriaMode: 'all'
//   });

//   const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [keepLoggedIn, setKeepLoggedIn] = useState(false);
//   const classes = useStyles();
//   const router = useRouter();

//   const handleChangeKeepLoggedIn = () => {
//     setKeepLoggedIn(!keepLoggedIn);
//   };

//   const handleChangeShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit = (data) => {
//     if (forgotPasswordClicked) {
//       // Redirect to the password recovery page
//       router.push('/signup-form');
//     } else {
//       // Handle regular signup
//       // Make a POST request to the signup API endpoint
//       fetch('http://43.198.148.197:8000/kindo/users/signup/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then((responseData) => {
//           // Handle the response data from the API
//           console.log('Signup response:', responseData);

//           // Redirect to the desired page upon successful signup
//           router.push('./signup-formpg2');
//         })
//         .catch((error) => {
//           // Handle any errors that occurred during the API request
//           console.error('Signup error:', error);
//         });
//     }
//   };

//   const cleanErrors = { ...errors };
//   delete cleanErrors.types;
//   delete cleanErrors.ref;
//   delete cleanErrors.context;

//   return (
//     <Container>
//       <Grid container direction='column' alignItems='center' justifyContent='space-evenly' spacing={2}>
//         <Grid>
//           <Typography className={classes.titleText}>
//             Begin your journey of health now!
//           </Typography>
//         </Grid>
//         <Grid>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Grid container item direction='column'>
//               <Grid item>
//                 <TextInput
//                   control={control}
//                   name='email'
//                   label='Email'
//                   placeholder='example@domain.com'
//                   additionalStyles={classes.textFieldsignup}
//                   rules={{
//                     required: 'email address is incorrect/ is not exist',
//                     pattern: {
//                       value: /\S+@\S+\.\S+/,
//                       message: 'Enter a valid email address'
//                     },
//                     maxLength: {
//                       value: 50,
//                       message: 'Character limit: 50 characters'
//                     }
//                   }}
//                   style={{ color: 'red' }}
//                 />
//               </Grid>
//               <Grid item>
//                 <div className={classes.errorText}>{errors.email?.message}</div>
//               </Grid>
//               <Grid item container>
                
//               <TextInput
//               control={control}
//                             name={`quantity`}
//                             rules={{}}
//                             label={`Quantity`}
//                             placeholder={`e.g. 123`}
//                             additionalStyles={{}}                                                    
                            
//                         />
//               </Grid>
//               <TextInput
//                 control={control}
//                 name='Last name'
//                 label='Last name'
//                 placeholder='e.g. Wong'
//                 additionalStyles={classes.Lastname}
//                 rules={{
//                   required: 'required field',
//                   maxLength: {
//                     value: 50,
//                     message: 'Character limit: 50 characters'
//                   }
//                 }}
//               />
//               <Grid item>
//                 <DateInput
//                   name={`startDate`}
//                   placeholder={`(i.e. 08/02/2021)`}
//                   label={`Start date*`}
//                   rules={{ required: true }}
//                   shouldUnregister={true}
//                 />
//               </Grid>
//               <Grid item>
//                 <TextInput
//                   control={control}
//                   name='password'
//                   rules={{
//                     required: 'Password is required',
//                     minLength: {
//                       value: 8,
//                       message: 'Password must be at least 8 characters long',
//                     },
//                     pattern: {
//                       value: /^(?=.*[a-z]).*$/,
//                       message: 'Password must contain at least one lowercase letter',
//                     },
//                     pattern: {
//                       value: /^(?=.*[A-Z]).*$/,
//                       message: 'Password must contain at least one uppercase letter',
//                     },
//                     pattern: {
//                       value: /^(?=.*\d).*$/,
//                       message: 'Password must contain at least one number',
//                     },
//                   }}
//                   label='New password'
//                   placeholder='at least 8 characters '
//                   additionalStyles={classes.textFieldsignup}
//                   type={showPassword ? 'text' : 'password'}
//                 />
//                 <FormControlLabel
//                   control={
//                     <Button
//                       disableRipple
//                       onClick={handleChangeShowPassword}
//                       style={{
//                         color: '#216194',
//                         marginTop: '40px',
//                         padding: '0xp 0px 10px 0px'
//                       }}
//                     >
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </Button>
//                   }
//                   classes={{ label: classes.checkBoxLabel }}
//                   className={classes.checkBoxControl}
//                 />
//               </Grid>
//               <Grid item>
//                 <div className={classes.errorText}>{errors.password?.message}</div>
//               </Grid>
//               <Grid item container direction='row' justifyContent='center'>
//                 <Button type='submit' variant='contained' className={classes.formButton} onClick={onSubmit}>
//                   Sign up
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//           <Grid item>
//             <Typography className={classes.tinyText}>
//               OR
//             </Typography>
//           </Grid>
//           <Grid item container direction='column'>
//             <Grid item container justifyContent='center'>
//               <Button className={classes.externalLoginButton}>
//                 Log in with Google
//               </Button>
//             </Grid>
//             <Grid item container justifyContent='center'>
//               <Button className={classes.externalLoginButton}>
//                 Log in with Facebook
//               </Button>
//             </Grid>
//             <Grid item container justifyContent='center'>
//               <Typography>Don't have an account?</Typography>
//               <Typography>Sign up</Typography>
//             </Grid>
//             <Grid item container justifyContent='center'>
//               <Typography onClick={() => setForgotPasswordClicked(true)}>Forgot password?</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default SignupForm;




// import React, { useState } from 'react';
// import { Container, Grid, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { LoginForm } from '../components/forms';
// import Link from 'next/link';


// const useStyles = makeStyles({
//     mainDiv: {
//         display: 'flex'
//     },
//     loginLeft: {
//         background: '#fff',
//         flex: 1,
//         margin: '166px 0 197px 0'
//     },
//     loginRight: {
//         flex: 1
//     },
//     noAccountText: {
//         fontFamily: 'Roboto',
//         fontSize: '16px',
//         lineHeight: '1.25',
//         color: '#969696',
//         marginTop: '48px',
//     },
//     forgotPasswordLinkText: {
//         fontFamily: 'Roboto',
//         fontSize: '16px',
//         marginTop: '8px',
//         marginBottom: '48px',
//         color: '#216194',
//         fontWeight: '500'
//     },
//     switchAccountTypeText: {
//         fontFamily: 'Roboto',
//         fontSize: '14px',
//         color: '#969696',
//         textDecoration: 'underline'
//     }


// });
// const LoginIndividual = () => {
//     const classes = useStyles();
    
//     return (
//         <div className={classes.mainDiv}>
//             <Grid container direction='row'>
//                 <Grid item container direction='column' alignContent='center' md={6}>
//                     <div className={classes.loginLeft}>
//                         <LoginForm />
//                         <Grid item container direction='column' alignItems='center'>
//                             <Typography className={classes.noAccountText}>
//                                 Don't have an account? <Link href='#'>Sign up</Link>
//                             </Typography>
//                             <Typography className={classes.forgotPasswordLinkText}>
//                                 <Link href='#'>Forgot password?</Link>
//                             </Typography>
//                             <Typography className={classes.switchAccountTypeText}>
//                                 <Link href='#'>Switch to business account</Link>
//                             </Typography>
//                         </Grid>
//                     </div>
//                 </Grid>
//                 <Grid item md={6}>
//                     <div className={classes.loginRight}>
//                     <h1>Insert image here</h1>

//                     </div>
//                 </Grid>
//             </Grid>
//         </div>
        
//     )
// }

// export default LoginIndividual;


