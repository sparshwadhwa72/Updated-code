// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Grid,
// } from '@material-ui/core';

// const SignupPage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleDateOfBirthChange = (event) => {
//     setDateOfBirth(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
  
//   function signup()
//   {
//       console.warn(firstName,lastName,email,dateOfBirth,password)
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const signupData = {
//       firstName,
//       lastName,
//       email,
//       dateOfBirth,
//       password,
//     };

//     try {
//       const response = await fetch('http://43.198.148.197:8000/kindo/users/signup/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signupData),
//       });

//       if (response.ok) {
//         console.log('Signup successful');
//         setFirstName('');
//         setLastName('');
//         setEmail('');
//         setDateOfBirth('');
//         setPassword('');
//       } else {
//         console.log('Signup failed');
//         // Handle the signup error
//         // ...
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle any other errors
//       // ...
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Signup Page
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="First Name"
//               fullWidth
//               value={firstName}
//               onChange={handleFirstNameChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Last Name"
//               fullWidth
//               value={lastName}
//               onChange={handleLastNameChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               type="email"
//               fullWidth
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Date of Birth"
//               type="date"
//               fullWidth
//               value={dateOfBirth}
//               onChange={handleDateOfBirthChange}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" fullWidth onClick={signup}> 
//               Signup
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default SignupPage;

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Typography, TextField, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import TextInput from './form-components/text-input/text-input';
import { Login } from '@utils/axios';
import { useRouter } from 'next/router';
import useStyles from './Login/Signup-Styles';
import DateInput from '@components/forms/form-components/date-picker/Signup-dob';


const SignupForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        criteriaMode: 'all'
    });
    
    const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);

    const [ showPassword, setShowPassword ] = useState(false);
    const [ keepLoggedIn, setKeepLoggedIn ] = useState(false);
    const classes = useStyles();
    const router = useRouter()
    const handleChangeKeepLoggedIn = () => {
        setKeepLoggedIn(!keepLoggedIn);
    };

    const handleChangeShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const onSubmit = (data) => {
        if (forgotPasswordClicked) {
          // Redirect to the password recovery page
          router.push('/signup-form');
        } else {
          // Handle regular signup
          // Make a POST request to the signup API endpoint
          fetch('http://43.198.148.197:8000/kindo/users/signup/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((responseData) => {
              // Handle the response data from the API
              console.log('Signup response:', responseData);
      
              // Redirect to the desired page upon successful signup
              router.push('/signup-form');
            })
            .catch((error) => {
              // Handle any errors that occurred during the API request
              console.error('Signup error:', error);
            });
        }
      };
      
      const cleanErrors = { ...errors };
      delete cleanErrors.types;
      delete cleanErrors.ref;
      delete cleanErrors.context;

    return (
        <Container>
            {forgotPasswordClicked ? (
      <SignupForm />
    ) : (
            <Grid container direction='column' alignItems='center' justifyContent='space-evenly' spacing={2}>
                <Grid>
                    <Typography  className={classes.titleText}>
                    Begin your journey of health now!
                    </Typography>
                </Grid>
                <Grid >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container item direction='column'>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='email'
                                    label='Email'
                                  
                                    placeholder='example@domain.com'
                                    additionalStyles={classes.textFieldsignup}
                                    rules={{ 
                                        required: 'email address is incorrect/ is not exist',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Enter a valid email address'
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                    style={{ color: 'red' }}
                                />
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.email?.message}</div>
                            </Grid>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='First name'
                                    label='First name'
                                    placeholder='e.g. Alex'
                                    additionalStyles={classes.Firstname}
                                    rules={{ 
                                        required: 'required field',
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: 'Enter a valid email address'
                                        // },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                />
                                <TextInput
                                    control={control}
                                    name='Last name'
                                    label='Last name'
                                    placeholder='e.g. Wong'
                                    additionalStyles={classes.Lastname}
                                    rules={{ 
                                        required: 'required field',
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: 'Enter a valid email address'
                                        // },
                                        maxLength: {
                                            value: 50,
                                            message: 'Character limit: 50 characters'
                                        }
                                    }}
                                />
                            </Grid>
                            
            <Grid item>
                <DateInput
                    name={`startDate`}
                    placeholder={`(i.e. 08/02/2021)`}
                    label={`Start date*`}
                    rules={{required: true}}
                    shouldUnregister={true}

                />
            </Grid>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='password'
                                    rules={{
                                        required: 'Password is required',
                                        minLength: {
                                          value: 8,
                                          message: 'Password must be at least 8 characters long',
                                        },
                                        pattern: {
                                          value: /^(?=.*[a-z]).*$/,
                                          message: 'Password must contain at least one lowercase letter',
                                        },
                                        pattern: {
                                          value: /^(?=.*[A-Z]).*$/,
                                          message: 'Password must contain at least one uppercase letter',
                                        },
                                        pattern: {
                                          value: /^(?=.*\d).*$/,
                                          message: 'Password must contain at least one number',
                                        },
                                      }}
                                      
                                    label='New password'
                                   
                                    placeholder='at least 8 characters '
                                    additionalStyles={classes.textFieldsignup}
                                    type={showPassword ? 'text' : 'password'}
                                />
                                    
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.password?.message}</div>
                            </Grid>
                          
                          
                           
                            <Grid item container direction='row' justifyContent='flex-start'>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            disableRipple={true}
                                            checked={showPassword}
                                            onChange={handleChangeShowPassword}
                                            name='show-password-checkbox'
                                            style={{
                                                color: '#216194'
                                            }}
                                        />
                                    }
                                    label='Show password'
                                    classes={{label: classes.checkBoxLabel}}
                                    className={classes.checkBoxControl}
                                />
                            </Grid>
                            <Grid item container direction='row' justifyContent='center'>
                            <Button type='submit' variant='contained' className={classes.formButton} onClick={onSubmit}>
  Sign up
</Button>

                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item>
                    <Typography className={classes.tinyText}>
                        OR
                    </Typography>
                </Grid>
                <Grid item container direction='column'>
                    <Grid item container justifyContent='center'>
                        <Button className={classes.externalLoginButton}>
                            Log in with Google
                        </Button>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Button className={classes.externalLoginButton}>
                            Log in with Facebook
                        </Button>
                    </Grid>
                    
                    <Grid item container justifyContent='center'>
                    <Typography>Don't have an account?</Typography>
                    <Typography>Sign up</Typography>
                    </Grid>
                    <Grid item container justifyContent='center'>
                    <Typography onClick={() => setForgotPasswordClicked(true)}>Forgot password?</Typography>

                    
                    </Grid>
                </Grid>
            </Grid>
             )}
        </Container>
    )
}

export default SignupForm;