// import { Link, useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import './Register.css';
// import useAuth from '../../../hooks/useAuth';

// const Register = () => {
// 	const [loginData, setLoginData] = useState({});
//     const navigate = useNavigate();
//     const { user, registerUser, isLoading, authError } = useAuth();

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }
//     const handleLoginSubmit = e => {
//         if (loginData.password !== loginData.password2) {
//             alert('Your password did not match');
//             return
//         }
//         registerUser(loginData.email, loginData.password, loginData.name, navigate);
//         e.preventDefault();
//     }
//     return (
//         <div>
//             <div className="container">

// <div className="card o-hidden border-0 shadow-lg my-5">
// 	<div className="card-body p-0">
// 		<div className="row">
// 			<div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
// 			<div className="col-lg-7">
// 				<div className="p-5">
// 					<div className="text-center">
// 						<h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
// 					</div>
// 						{!isLoading  && <form className="user" onSubmit={handleLoginSubmit}>
// 						<div className="form-group row">
// 							<div className="col-sm-6 mb-3 mb-sm-0">
// 								<input onBlur={handleOnBlur} name="name" type="text" className="form-control form-control-user" id="exampleFirstName"
// 									placeholder="Your name"/>
// 							</div>
// 							<div className="col-sm-6">
// 								<input onBlur={handleOnBlur} name="phone" type="tel" className="form-control form-control-user" id="exampleLastName"
// 									placeholder="Phone number"/>
// 							</div>
// 						</div>
// 						<div className="form-group">
// 							<input onBlur={handleOnBlur} name="email" type="email" className="form-control form-control-user" id="exampleInputEmail"
// 								placeholder="Email Address"/>
// 						</div>
// 						<div className="form-group row">
// 							<div className="col-sm-6 mb-3 mb-sm-0">
// 								<input onBlur={handleOnBlur} name="password" type="password" className="form-control form-control-user"
// 									id="exampleInputPassword" placeholder="Password"/>
// 							</div>
// 							<div className="col-sm-6">
// 								<input onBlur={handleOnBlur} name="password2" type="password" className="form-control form-control-user"
// 									id="exampleRepeatPassword" placeholder="Repeat Password"/>
// 							</div>
// 						</div>
// 						<button type='submit' className="btn btn-primary btn-user btn-block">
// 							Register Account
// 						</button>
// 						<hr/>
// 						<a href="index.html" className="btn btn-google btn-user btn-block">
// 							<i className="fab fa-google fa-fw"></i> Register with Google
// 						</a>
// 						<a href="index.html" className="btn btn-facebook btn-user btn-block">
// 							<i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
// 						</a>
// 					</form>}
// 					{isLoading && <div className="spinner-border text-primary" role="status">
// 					<span className="sr-only">Loading...</span>
// 					</div>}
// 					{user?.email && <div class="alert alert-success" role="alert">
// 					User successfully created!
// 					</div>}
//                     {authError && <div class="alert alert-danger" role="alert">
// 					{authError}
// 					</div>}
// 					<hr/>
// 					<div className="text-center">
// 						<a className="small" href="forgot-password.html">Forgot Password?</a>
// 					</div>
// 					<div className="text-center">
// 					<Link to="/login">Already have an account? Login!</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>

// </div>


//         </div>
//     );
// };

// export default Register;