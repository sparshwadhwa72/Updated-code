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

import { useRouter } from 'next/router';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import useStyles from './Login/Signup-Styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const router = useRouter(); 

  const handleLogin = async () => {
    try {
      const loginData = {
        email,
        password,
      };
  
      const loginResponse = await fetch(
        'http://52.66.13.189:8000/kindo/users/login/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        }
      );
  
      if (loginResponse.ok) {
        const responseData = await loginResponse.json();
        const accessToken = responseData.access_token;
        console.log('Login successful. Access Token:', accessToken);
  
        // Navigate to the welcome page
        router.push('./Welcome-Page');
      } else {
        console.log('Login failed');
        // Handle login error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors
    }
  };

  const handleChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm">
      <Typography className={classes.titleText} align="center" gutterBottom>
        Welcome back! Please login to your account.
      </Typography>
      <form>
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: 64 }}>
          <Grid item xs={12}>
            <TextField
              className={classes.textFieldsignup}
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              className={classes.textFieldsignup}
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  checked={!showPassword}
                  onChange={handleChangeShowPassword}
                  name="show-password-checkbox"
                  icon={<Visibility />} // Eye icon when password is hidden
                  checkedIcon={<VisibilityOff />} // Eye icon when password is shown
                />
              }
              classes={{ label: classes.checkBoxLabel }}
              className={classes.checkBoxControl2}
            />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              className={classes.formButton}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginPage;
