import React from 'react';
import { IonPage, IonContent, IonRouterLink, IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import './Login.css';

class LoginAndSignUp extends React.Component {

  constructor(props) {
    super(props);
    
    console.log(props.location);
    let path = props.location.pathname;
    let isSignUp = false;
    let title = "Login";

    if(path === "/register"){
        title = 'Register';
        isSignUp = true;
    }

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      isSignUp: isSignUp,
      title: title
    };

  }
  
  handleLogin = async() => {
    console.log("ok");
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { 
          email: this.state.email,
          password: this.state.password
        }
      })
    })
    .then((r) => {
      console.log(r.json())
    })
    .catch(() => console.log('error'));
  };

  handleRegister = async() => {
    // TODO: check if passwords are matched first
    //
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { 
          email: this.state.email,
          password: this.state.password
        }
      })
    })
    .then((r) => {
      console.log(r.json())
    })
    .catch(() => console.log('error'));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
   

    return ( 
      <IonPage>
        <IonContent>
          <div className='container'> 
            <h1 className='is-size-1 has-text-weight-semibold mb-6'>{this.state.title}</h1> 
            <form className='login-form mb-6'>
              <div className='control has-icons-left'>
                <input className='input is-rounded is-medium ' 
                       type='text' 
                       placeholder='email' 
                       name='email'
                       value={this.state.email}
                       onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <IonIcon icon={mailOutline}/>
                </span>
              </div>
              <div className='control has-icons-left mt-4'>
                <input className='input is-rounded is-medium' 
                       type='password' 
                       placeholder='password' 
                       name='password'
                       value={this.state.password}
                       onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <IonIcon icon={lockClosedOutline}/>
                </span>
              </div>
              
              <div>
              {this.state.isSignUp && 
              <div className='control has-icons-left mt-4'>
                <input className='input is-rounded is-medium' 
                       type='password' 
                       placeholder='re-password' 
                       name='passwordConfirmation'
                       value={this.state.password}
                       onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <IonIcon icon={lockClosedOutline}/>
                </span>
              </div>
              }
            </div>
            </form>
            {this.state.isSignUp ? (
            <div>
              <button className='button is-primary is-large mb-6' onClick={this.handleRegister}>Sign Up</button> 
              <br />
              <p className='has-text-grey'>already have an account?
                <IonRouterLink href='/login'> Login</IonRouterLink>
              </p>
            </div>
            ) : (
            <div>
              <button className='button is-primary is-large mb-6' onClick={this.handleLogin}>Login</button> 
              <br />
              <IonRouterLink href='/register'> Need an account? </IonRouterLink>
            </div>
            )
            }

          </div>
        </IonContent>
      </IonPage>
    );
  }
}








export default LoginAndSignUp;
