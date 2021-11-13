import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    console.log(loginData)
    const { user, logInUser, isLoading, authError,signInWithGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        console.log(loginData.email,loginData.password)
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location,history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Email'
                            variant='standard'
                            name='email'
                            onChange={handleOnChange}
                        ></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Password'
                            type='password'
                            variant='standard'
                            name='password'
                            onChange={handleOnChange}
                        ></TextField>
                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained' >Login</Button>
                        <NavLink
                            to='/registar'
                            style={{ textDecoration: 'none' }} variant='text'>
                            <Button>New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                    <p>----------------------------</p>
                    <Button onClick={handleGoogleSignIn}  sx={{ width: '75%', m: 1 }}  variant='contained' >Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;