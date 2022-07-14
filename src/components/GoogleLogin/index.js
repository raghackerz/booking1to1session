import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import gLogo from "../../assets/Signup/google 2.png";

const CLIENT_ID =
  "331849008796-qnboc9nvd2df133eb5ud7b9ibodror1v.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.setState({ userInfo, isLoggedIn: true });
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
     <>
          {this.state.isLoggedIn ? (
            <div>
              <h1>Welcome, {this.state.userInfo.name}</h1>

              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText = "Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
              render={renderProps => (
                <button  onClick={renderProps.onClick} className=" h-12 rounded mx-4 bg-white text-xl border align-middle" style={{color: `#444BAB`,borderColor:`#444BAB`}}>
                    <div> 
                    <img src={gLogo} className="mr-3 w-5 h-6 align-middle" style={{display:`inline`}}/>
                    <span>Sign Up with Google</span>
                    </div>
                </button>
              )}
              
            />
          )}
      </>
    );
  }
}
export default GoogleLoginComponent;