import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Typography, TextField, Container, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import TextInput from './form-components/text-input/text-input';
import { Login } from '@utils/axios';
import { useRouter } from 'next/router';
import useStyles from './Login/Signup-Styles';
import SignupForm from './signup-form';


const LoginForm = () => {
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
          // Handle regular login
          Login({ email: data.email, password: data.password }).then((response) => {
            if (response) {
              router.push('/signup-form');
            }
          });
        }
      };
      
    

    return (
        <Container>
            {forgotPasswordClicked ? (
      <SignupForm />
    ) : (
            <Grid container direction='column' alignItems='center' justifyContent='space-evenly' spacing={2}>
                <Grid>
                    <Typography variant='h3' className={classes.titleText}>
                        Login
                    </Typography>
                </Grid>
                <Grid >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container item direction='column'>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='email'
                                    label='Your email'
                                    placeholder='example@domain.com'
                                    additionalStyles={classes.textField}
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
                                />
                            </Grid>
                            <Grid item>
                                <div className={classes.errorText}>{errors.email?.message}</div>
                            </Grid>
                            <Grid item>
                                <TextInput
                                    control={control}
                                    name='password'
                                    rules={{ required: 'Enter a password' }}
                                    label='Password'
                                    placeholder='enter password'
                                    additionalStyles={classes.textField}
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
                                    label='Keep me logged in'
                                    classes={{label: classes.checkBoxLabel}}
                                    className={classes.checkBoxControl}

                                />
                            </Grid>
                            <Grid item container direction='row' justifyContent='center'>
                                <Button type='submit' variant='contained' className={classes.formButton}
                                >
                                    Log in
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

export default LoginForm;