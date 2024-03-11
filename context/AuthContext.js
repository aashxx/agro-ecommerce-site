import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';
import { FaCheck } from "react-icons/fa";

export const AuthContext = createContext();

const AuthState = (props) => {

    const host = "http://localhost:3000" || "https://agro-ecommerce-site.vercel.app";

    const [signCredentials, setSignCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    const [logCredentials, setLogCredentials] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [userName, setUserName] = useState({});
    const [showPass, setShowPass] = useState('password');

    let router = useRouter();

    const handleSignChange = (event) => {
        setSignCredentials({...signCredentials, [event.target.name]: event.target.value});
        setUserName(signCredentials.email);
    }

    // Show Password method
    const handleShowPass = () => {
        let check = document.getElementById("showPass");
        if(check.checked) {
            setShowPass('text');
        } else {
            setShowPass('password')
        }
    }

    const validateAuth = () => {
        const newErrors = {};

        if (!signCredentials.name) {
            newErrors.name = 'Name is required';
        }
        
        if (!signCredentials.email) {
            newErrors.email = 'Email is required';
        } 
    
        if (!signCredentials.password) {
            newErrors.password = 'Password is required';
            console.log("Password: " ,signCredentials.password);
        } 
        
        if (signCredentials.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            console.log("Password: " ,signCredentials.password);
        } 
        
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(signCredentials.password)) {
            newErrors.password = 'Password should have minimum 1 uppercase character, 1 digit and 1 special character'
            console.log("Password: " ,signCredentials.password);
        }
    
        if (signCredentials.password !== signCredentials.cpassword) {
            newErrors.cpassword = 'Passwords do not match';
            console.log("Password: " ,signCredentials.password);
            console.log("Cpassword:", signCredentials.cpassword)
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (validateAuth()) {
            props.setProgress(30);
            const response = await fetch(`${host}/api/auth/signup`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify({name: signCredentials.name, email: signCredentials.email, password: signCredentials.password})
            });
            const json = await response.json();
            // Client side
            if(json) {
                btnAnime();
                localStorage.setItem('token',json.authToken);
                router.push('/');
                // showAlert("Account created", "#f8cf38");
            } else {
                // showAlert("Failed", "#e5322d");
                console.log('failed')
            }
            props.setProgress(100);
        }
    }

    // Inputs the login credentials
    const handleLogChange = (event) => {
        setLogCredentials({...logCredentials, [event.target.name]: event.target.value});
    }

    // Login form
    const handleLogin = async (event) => {
        event.preventDefault();

        props.setProgress(30);
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({email: logCredentials.email, password: logCredentials.password})
        });
        const json = await response.json();

        // props.setProgress(70);
        if(json) {
            btnAnime();
            localStorage.setItem('token',json.authToken);
            router.push('/');
            // showAlert("Logged in", "#f8cf38");
            dispUsername();
        } else {
            // showAlert("Failed", "#e5322d");
            console.log('failed');
        }
        props.setProgress(100);
    }

     // Display logged in user
    const dispUsername = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setUserName(json);
    }

    // Logout method
    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push('/auth/login');
    }

    const btnAnime = () => {  
        const btn_anime = document.querySelector('#button-anime');
        btn_anime.innerHTML = '<div id="btn-loader"></div>';
        setTimeout(() => {
            btn_anime.style.width='120px';
            btn_anime.innerHTML = 'Login';
        }, 3500);
    }


    return (
        <AuthContext.Provider value={{ errors, showPass, handleShowPass, handleLogin, handleLogout, handleSignUp, handleLogChange, handleSignChange, dispUsername, userName }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;