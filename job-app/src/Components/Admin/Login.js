import React from 'react';
// import Header from './Header';
import logo from '../../Image/logo.svg';
import Footer from './Footer'
import './Admin.css';
import './Login.css'
const LoginAndSignUp = () => {
    return (
        <div class="loginSignUpContainer">
            <div class="loginAndSignUpHeader">
                <div class="loginLogo">
                    <img class="login-header" src={logo} style={{ width: "5rem" }} alt="logo" />
                </div>
                <div class="loginSignUpPost">
                    {/* <a href={"#"}></a> */}
                    <h3 class="login">LOGIN</h3>
                    <h3 class="signUp">SIGN UP</h3>
                    <button class="postAjob">POST A JOB</button>
                </div>
            </div>
            <div class="create-text"><h2 >Create your Account</h2></div>
            <div class="card-container">
                <div class="user-card">
                    <i class="fa-solid fa-user fa-7x"></i>
                    <h2>Job Seeker</h2>
                    <p>Are you looking for your dream job?<br />
                        Create a unique career profile with findJobs</p>
                    <input type="button" name="Jobseeker" value="FindJob seeker sign up" class="button" />
                </div>
                <div class="employer-card">
                    <i class="fa-solid fa-briefcase fa-7x"></i>
                    <h2>Employer</h2>
                    <p>Are you looking for quality candidates to employ?<br />
                        Advertise and search with findJobs</p>
                    <input type="button" name="employer" value="Recuiter sign up" class="button" />
                </div>
               
            </div>
            <Footer />
        </div>
    )
}

export default LoginAndSignUp;