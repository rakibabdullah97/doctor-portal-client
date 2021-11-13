import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Registar = () => {
    const { user, registerUser, isLoading, authError } = useAuth()
    const history = useHistory()
    const [loginData, setLoginData] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password1 !== loginData.password2) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password1, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Name'
                            variant='standard'
                            name='name'
                            onBlur={handleOnBlur}
                        ></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Email'
                            variant='standard'
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                        ></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Your Password'
                            type='password'
                            variant='standard'
                            name='password1'
                            onBlur={handleOnBlur}
                        ></TextField>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id='standard-basic'
                            label='Re-type Your Password '
                            type='password'
                            variant='standard'
                            name='password2'
                            onBlur={handleOnBlur}
                        ></TextField>
                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant='contained' >Register</Button>
                        <NavLink
                            to='/login'
                            style={{ textDecoration: 'none' }} variant='text'>
                            <Button>Already Registered?Log in </Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registar;