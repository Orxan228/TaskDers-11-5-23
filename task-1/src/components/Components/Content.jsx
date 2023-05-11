import React from 'react'
import "./Content.css"
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//https://github.com/EbulfezSadigov/Formik-React/blob/master/src/Test2.jsx
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Content = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <>
            <div className="content">
                <div className="content___left">
                    <img src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200" alt="" />
                </div>
                <div className="content___right">
                    <div className="content___right___signIn">
                        <div className="lockIcon"><LockIcon /></div>
                        <p className="signIn-hero">Sign In</p>
                    </div>
                    <div className="content___right___form">
                        <form onSubmit={formik.handleSubmit}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '1' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField value={formik.values.email} onChange={formik.handleChange}  error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} required id="outlined-basic" type={"email"} label="Email Adress" variant="outlined" />
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '1' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField required id="outlined-basic" type={"password"} label="Password" variant="outlined" />
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                                </FormGroup>
                            </Box>
                            <Button id='subBtn' variant="contained">SIGN IN</Button>
                        </form>
                    </div>
                    <div className="content___right___help">
                        <div className="content___right___help___top">
                            <a href="#">Forgot Password?</a>
                            <a href="#">Don't have an account? Sign Up</a>
                        </div>
                        <div className="content___right___help___bottom">
                            <p className='copyright'>Copyright © <span className='copyright___link'>Your Website</span> 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
