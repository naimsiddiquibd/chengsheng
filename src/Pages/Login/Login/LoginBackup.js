import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBar from '../../Shared/TopBar/TopBar';
import './Login.css';

const Login = () => {
    return (
        <div>
            <TopBar/>
      
            <section className="h-100 mt-2">
		<div className="container h-100" style={{maxWidth: "400px"}}>
			<div className="row justify-content-md-center h-100">
				<div className="card-wrapper">
					
					<div className="card fat">
						<div className="card-body">
							<h4 className="card-title">Login</h4>
							<form method="POST" className="my-login-validation" noValidate="">
								<div className="form-group">
									<label htmlFor="email">E-Mail Address</label>
									<input id="email" type="email" className="form-control" name="email"  required autoFocus/>
									<div className="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="password">
										<a href="forgot.html" className="float-right">
											Forgot Password?
										</a>
									</label>
									<input id="password" type="password" className="form-control" name="password" required data-eye/>
								    <div className="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div className="form-group mt-2">
									<div className="custom-checkbox custom-control">
										<input type="checkbox" name="remember" id="remember" className="custom-control-input"/>
										<label htmlFor="remember" className="custom-control-label">Remember Me</label>
									</div>
								</div>

								<div className="form-group m-0">
									<button type="submit" className="btn btn-primary btn-block">
										Login
									</button>
								</div>
								<div className="mt-4 text-center">
									Don't have an account? <Link to="/register">Register</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <Footer/>

        </div>
    );
};

export default Login;